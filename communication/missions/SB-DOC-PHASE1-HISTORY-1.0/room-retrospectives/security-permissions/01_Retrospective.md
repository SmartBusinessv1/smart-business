# Security & Permissions Architecture Institutional Retrospective

**Mission:** `SB-DOC-PHASE1-HISTORY-1.0 — Phase 1 Historical Continuity Reconstruction`  
**Contributor:** Security & Permissions Architecture  
**Primary Identity:** Security & Permissions Architecture  
**Scope:** Documentation and institutional-memory capture only  
**Status:** `RETROSPECTIVE — DOCUMENTATION ONLY`  
**Review cutoff:** 2026-09-13  
**Canonical repository reviewed:** `SmartBusinessv1/smart-business`  
**Canonical baseline reviewed:** `758013eafcbb9f9c485f072c73da632979d105f6`  
**Implementation authority:** None

This retrospective preserves the security judgement learned by Security & Permissions Architecture across Smart Business Phase 1. It intentionally separates historical findings, corrected findings, current observations, architecture risks, runtime proof, provider proof, mission authority and tool capability. It does not authorize any security correction, RLS/grant/IAM change, provider mutation, runtime deployment, Product Truth amendment, GC-42/GC-43 reactivation, parser reactivation, or new Product Mission.

---

# 1. Lessons Learned

## 1.1 Security acceptance is its own evidence layer

`CURRENT — STILL VALID`

The most important Phase 1 security lesson is that the following states are different:

1. code exists;
2. PR merged;
3. CI green;
4. migration applied;
5. deployment succeeded;
6. happy path works;
7. RLS is enabled;
8. provider dashboard is healthy;
9. security review passed;
10. denial paths were runtime-verified;
11. Mission Control accepted the security state.

Durable rules:

> Green CI is not security acceptance.  
> Merge is not security acceptance.  
> Tool access is not authority.  
> A successful allowed-path test is not denial-path proof.

Phase 1 repeatedly demonstrated this distinction. The GC-42 AWS provisioning path could be technically provisioned while still requiring independent post-provisioning Security verification. GC-43 initially stopped because the reviewer did not yet have provider-derived evidence sufficient to verify actual IAM state. Later evidence recovery changed the evidence status, but then independent review exposed a real runtime-boundary defect. Only after the specific defect was corrected and independently re-verified could the affected control be classified PASS.

Likewise, Inventory RLS was enabled and anonymous row visibility was observed as zero, but a later direct ACL review still found unnecessarily broad `anon` table/function privileges. RLS behavior and table/function grant posture therefore had to be treated as separate layers.

## 1.2 Authentication, authorization, role, permission and tenant ownership are not synonyms

`CURRENT — STILL VALID`

Smart Business security matured by separating:

- authentication — who the caller is;
- authorization — what the caller is allowed to do now;
- role — the caller's category or relationship;
- permission — a scoped capability granted within that role/context;
- business ownership — which business truth the caller controls;
- tenant isolation — what other businesses must remain invisible/inaccessible;
- delegated staff capability — what an Owner explicitly allows a Manager/Employee to do;
- privileged backend capability — exceptional technical power used by narrow trusted paths;
- service-role capability — backend-only RLS-bypass power;
- administrator/system capability — platform operations, never business-decision authority.

Current Product Truth remains:

- Owner is the highest authority for their business;
- Manager receives only delegated authority;
- Employee access is permission-scoped;
- employees must not see Owner financial intelligence by default;
- AI/system access does not create business decision authority.

A role label alone is insufficient. Future mature Owner/Manager/Employee permissions must be enforced through actual scoped permission evaluation, tenant binding, backend/RLS policy, command-path checks and denial-path tests.

## 1.3 Business isolation must be proven negatively, not merely inferred positively

`CURRENT — STILL VALID`

> Cross-business denial is a first-class acceptance scenario.

A secure multi-tenant system must prove at minimum:

- Owner A can access authorized Business A data;
- Owner A cannot read or mutate Business B data;
- Owner B receives the reciprocal isolation guarantee;
- Employee/Manager scope cannot cross tenant boundaries;
- privileged RPCs derive or validate authoritative tenant identity;
- caller-supplied `business_id` cannot create foreign authority;
- search, batch reads, exports and conversational channels preserve the same boundary.

Phase 1 had strong owner-scoped RLS foundations and multiple domain-specific denial checks, but product-wide automated cross-tenant verification remained incomplete. During the Gate 2A release-security work, Security correctly refused to manufacture production test identities or repurpose real merchant accounts when clearly designated production-safe test identities were not available. The lesson is that denial-path verification requires safe preconditions; lack of test fixtures is a blocker, not permission to improvise.

## 1.4 RLS enabled is not a complete security verdict

`CURRENT — STILL VALID`

RLS security requires reasoning across:

- whether RLS is enabled;
- whether RLS is forced where relevant;
- SELECT/INSERT/UPDATE/DELETE policies;
- `USING` versus `WITH CHECK` semantics;
- role applicability (`anon`, `authenticated`, executor roles, service role);
- role inheritance and bypass flags;
- direct table grants;
- function/RPC execution rights;
- `SECURITY INVOKER` versus `SECURITY DEFINER`;
- function ownership and `search_path`;
- service-role bypass;
- runtime caller context;
- denial-path behavior.

A table can have RLS enabled and still be unsafe through a permissive policy, privileged function, broad direct grant, bypass role, role-switch path, unsafe function ownership, or incorrectly trusted caller-supplied tenant identifier.

Conversely, RLS enabled with no policy can be an intentional server-only default-deny pattern when direct grants and privileged access are also deliberately constrained. Provider security-advisor findings therefore require architectural interpretation rather than automatic defect classification.

## 1.5 Grants and default privileges can silently defeat least-privilege intent

`CURRENT — STILL VALID`

Phase 1 exposed an important systemic lesson around `GRANT` and `ALTER DEFAULT PRIVILEGES`.

The historical reconciliation migration `20260727000000_reconcile_default_grants.sql` made broad Supabase-style defaults explicit for several `public` objects. Later security review demonstrated that this created defense-in-depth risk even when RLS still returned zero rows to anonymous callers.

The critical distinction is:

- RLS controls row visibility/mutation for non-bypass roles;
- ACL grants determine whether the role is even allowed to attempt table/function operations;
- default privileges determine what new future objects inherit automatically.

`ALTER DEFAULT PRIVILEGES` is particularly dangerous because it can silently recreate broad access on future tables/functions long after the original migration is forgotten.

The Inventory hardening migration `20260830120000_sb_rel_1_10_1_11_gate2a_c1_inventory_anon_privilege_hardening.sql` is the important correction pattern:

- revoke unnecessary `anon` table authority on the three Inventory tables;
- revoke unnecessary `anon` function EXECUTE;
- remove two relevant `PUBLIC` EXECUTE edges;
- correct the `postgres` public-schema default privilege baseline for future tables/functions;
- leave unrelated roles/RLS/function bodies untouched;
- explicitly disclose out-of-scope residual default-grant concerns.

`CURRENT OBSERVATION — NOT COMPLETE SECURITY PROOF`

Read-only production inspection on 2026-09-13 confirms `anon` is no longer a grantee on:

- `inventory_items`;
- `inventory_movements`;
- `inventory_movement_idempotency_keys`.

The same current read-only inspection still shows `anon` among table grantees on:

- `businesses`;
- `transactions`;
- `transaction_correction_events`.

This matches the current Founder-approved build plan, which carries residual `anon` privilege exposure on those non-Inventory surfaces as a mandatory early security gate for the next authorized permissions mission. It must not be silently marked resolved because Inventory was hardened.

## 1.6 Service-role is a privileged bypass boundary, not an ordinary application identity

`CURRENT — STILL VALID`

The service role bypasses RLS. Therefore:

- service-role credentials must be backend-only;
- service-role capability must never reach browser/client code;
- possession of service-role access does not authorize arbitrary mutation;
- direct table grants to service role still matter;
- service-role call sites should be narrow, auditable and mission-authorized;
- tenant identity should be derived from trusted server/auth context rather than merchant-controlled input;
- helper functions/workflows should minimize privileged surface.

Phase 1 parser support-state work made this concrete. Server-side lease/guard tables could not simply rely on “RLS enabled” if service-role had broad direct privileges through default grants. The security model had to reason about the actual bypass role and its exact direct-access needs.

## 1.7 A privileged RPC is a trust boundary, not a convenience function

`CURRENT — STILL VALID`

Durable `SECURITY DEFINER` / privileged-function rules learned in Phase 1:

- pin a safe `search_path`;
- control function ownership;
- deliberately constrain EXECUTE grants;
- derive actor identity from trusted authentication/session context;
- validate business ownership/tenant scope inside the privileged boundary;
- do not trust caller-supplied business authority;
- constrain executor-role access;
- make validation deterministic;
- preserve auditability and idempotency where relevant;
- verify denied paths, not only success;
- treat role switching and executor roles as part of the security architecture.

Catalog is the strongest Phase 1 example. The public Catalog command surface intentionally uses authenticated-callable `SECURITY DEFINER` functions with narrow executor roles and tenant-aware validation. That design cannot be judged from the provider advisory alone.

`CURRENT OBSERVATION — NOT COMPLETE SECURITY PROOF`

The current Supabase security advisor still reports nineteen authenticated-executable Catalog `SECURITY DEFINER` functions. This is not automatically a vulnerability because the nineteen functions are the deliberately locked Catalog command surface. It remains a contextual review obligation: future security work must evaluate the complete caller identity, business isolation, executor-role, ownership, `search_path`, grant and denied-path model before declaring the surface safe or unsafe.

## 1.8 No-policy server-only tables can be correct, but only with effective privilege proof

`CURRENT OBSERVATION — NOT COMPLETE SECURITY PROOF`

The current Supabase advisor reports RLS enabled with no policies on:

- `parser_preview_guards`;
- `parser_upload_leases`.

That state was deliberately designed as server-only support state in the parser architecture. A no-policy RLS model is valid only if browser/client roles cannot reach the tables and privileged/service-role/helper access remains intentionally narrow.

Durable rule:

> RLS-with-no-policy can be a secure default-deny pattern, but only when effective grants and privileged bypass paths prove the intended server-only boundary.

## 1.9 GC-42 taught that execution access must be designed as a security system

`CAPABILITY PROVEN`

The AWS non-production parser workstream established a governed execution-access architecture using:

- GitHub Actions OIDC;
- exact repository/environment/main-ref trust conditions;
- short-lived STS sessions;
- a narrowly scoped non-production deploy role;
- a protected GitHub Environment;
- a separate runtime permission boundary;
- constrained `iam:PassRole`;
- explicit self-escalation denial;
- no IAM-user engineering key;
- no long-lived AWS access key;
- provider-derived CloudTrail and policy-simulator evidence.

The exact deploy-role trust evidence binds the role to `SmartBusinessv1/smart-business`, repository ID `1287523579`, owner ID `298686418`, environment `aws-nonprod-parser`, audience `sts.amazonaws.com`, and `refs/heads/main`.

The founder-stage “Prevent self-review” exception was a narrow governance adaptation for a sole authorized infrastructure operator, not a general relaxation of review discipline. If another infrastructure operator is introduced, that exception should be reconsidered rather than silently inherited.

## 1.10 GC-43 taught that evidence access and security correctness are separate problems

`CORRECTION / LESSON`

The first independent post-provisioning GC-43 review stopped because Security could not independently inspect enough provider-derived IAM state. That stop was an evidence-access/evidence-handoff failure, not proof of a security defect.

The correct response was to recover sanitized provider-derived evidence rather than weaken the verification standard or accept assertions from implementation reports.

The recovered evidence package included, among other things:

- deploy-role trust JSON;
- deploy policy JSON;
- runtime boundary JSON;
- provider-state summary;
- IAM Policy Simulator output;
- CloudTrail/STS evidence;
- root/static-credential posture.

Once evidence was available, Security did **not** simply convert the previous STOP to PASS. Independent review found a real defect in the runtime permissions boundary.

Durable rule:

> An evidence blocker and a security defect are different findings. Closing the first can expose the second.

## 1.11 `SEC-GC43-07 / GC43B-SEC-01` is the key runtime-boundary correction lesson

`HISTORICAL — SUPERSEDED` original state

The original RuntimeBoundary allowed:

- `lambda:InvokeFunctionUrl` on the exact parser Lambda with `AWS_IAM`; and
- a separate unconditional `lambda:InvokeFunction` on the exact parser Lambda namespace.

Because the deploy role could author the WorkloadRole inline policy inside that permissions boundary, the boundary ceiling still allowed a future direct Lambda Invoke API path. That contradicted the locked runtime architecture:

`IAM Roles Anywhere workload identity → AWS_IAM Lambda Function URL only`.

`CORRECTION / LESSON`

The boundary was corrected so `lambda:InvokeFunction` is allowed only when:

`lambda:InvokedViaFunctionUrl = true`.

The corrected `TeamLIPS-SB-NonProd-Parser-RuntimeBoundary` Version 2 preserves exact parser resources, AWS_IAM Function URL invocation and explicit runtime control-plane denies.

`CURRENT — STILL VALID`

The corrected Version 2 evidence is the current canonical runtime-boundary evidence in this retrospective. The historical unconditional direct-invoke finding is closed and must not be carried forward as an active blocker unless new evidence shows regression.

No GC-42 or GC-43 stream is reactivated by this retrospective.

## 1.12 Least privilege means adding the smallest missing permission, not widening the role

`CAPABILITY PROVEN`

GC-38R later exposed two useful least-privilege cases.

First, tagged IAM Roles Anywhere resource creation failed because the deploy role lacked `rolesanywhere:TagResource`. Security reviewed the actual provider failure and recommended exactly one bounded permission:

- action: `rolesanywhere:TagResource`;
- resources: exact non-production Trust Anchor/Profile ARN classes in account `658980433673`, region `ap-south-1`;
- six locked request-tag values;
- exactly those six tag keys;
- no `UntagResource` or broad Roles Anywhere authority.

The resulting deploy-policy Version 2 evidence preserves that bounded shape.

Second, first-time Roles Anywhere setup later exposed `iam:CreateServiceLinkedRole`. Security compared two paths and preferred one-time Founder-controlled creation of the exact service-linked role over permanently broadening the CI deploy role, because bootstrap privilege did not need to become steady-state automation privilege.

Durable rule:

> Operational inconvenience is not justification for permanent privilege.

## 1.13 The actor who changes a security boundary must not be the only approver of that change

`CURRENT — STILL VALID`

Phase 1 established an actor-separation principle across security work:

- Infrastructure Operations may implement an explicitly authorized provider correction;
- Security & Permissions Architecture independently verifies the resulting evidence;
- Mission Control decides acceptance/next gate;
- Founder performs private/account-owner actions when required;
- builders do not self-approve their own security-sensitive changes;
- Security review does not self-authorize implementation.

This principle is especially important where the same human Founder is the only infrastructure operator. The human may perform the private action, but the mission still preserves independent evidence review and explicit acceptance boundaries.

## 1.14 Historical authorization expires with its mission

`CURRENT — STILL VALID`

A previous GC-42/GC-43/root/bootstrap authorization is not reusable permission for later work.

Phase 1 repeatedly enforced:

- one-time Founder administrative sessions expire when the authorized action/evidence capture is complete;
- prior root use does not create standing root authority;
- a previously authorized workflow run does not authorize another run;
- a corrected policy does not authorize parser reactivation;
- a PASS review makes the next decision eligible; it does not make the decision itself.

Security must revalidate stale/pending action authority before execution.

## 1.15 Evidence handoff quality determines what Security can truthfully claim

`CURRENT — STILL VALID`

Security evidence can include:

- migrations and RLS definitions;
- effective grants/default privileges;
- provider screenshots;
- role/policy/trust JSON;
- IAM Policy Simulator output;
- CloudTrail/STS evidence;
- runtime denial tests;
- audit logs;
- caller identity;
- commit/migration identifiers;
- environment identity.

But each evidence type proves only a particular boundary.

> A security claim must be traceable to evidence that proves the specific boundary being claimed.

A screenshot showing a role exists does not prove least privilege. A table showing RLS enabled does not prove cross-tenant denial. Green deployment does not prove IAM correctness. A policy document in Git does not prove it is the provider's effective policy unless provider state is independently tied back to it.

## 1.16 Runtime truth, repository truth and provider truth must be checked at the correct layer

`CURRENT — STILL VALID`

Security must distinguish:

- repository migration/policy intent;
- applied database state;
- provider IAM state;
- deployed runtime state;
- actual caller behavior.

Examples from Phase 1:

- an Inventory migration can prove intended REVOKE statements, but direct current database inspection is stronger evidence that production no longer grants `anon` those Inventory objects;
- an IAM trust policy committed to evidence proves captured policy content, while CloudTrail/STS assumption results prove actual role-assumption behavior;
- a permissions boundary document proves structural policy shape, while runtime denial evidence proves actual request behavior when that layer is exercised.

Security review must inspect the layer relevant to the claim.

## 1.17 AI and conversational channels must share the same permission engine

`CURRENT — STILL VALID`

Smart Business principle:

> AI Assistant, Not AI Judge.

Security implications:

- AI inference does not create authority;
- Ask CFO remains read-only intelligence;
- automation trigger does not equal permission;
- recommendations cannot override Owner decision ownership;
- Employee input rights do not imply Owner financial-intelligence rights;
- native Conversation Workspace, future WhatsApp, voice and structured dashboards must share one authority/permission engine;
- channel-specific “chat permissions” must not become a second security model.

Future conversation/WhatsApp work must revalidate permissions at action time and preserve the same tenant/role/data-visibility constraints as structured application surfaces.

## 1.18 Privacy must constrain support and privileged operations

`CURRENT — STILL VALID`

Merchant data belongs to the merchant. Security/privacy implications include:

- Owner financial intelligence should remain Owner-controlled;
- Employees should not see Owner financial intelligence by default;
- support/admin access must be purpose-limited;
- operational observability must not become routine merchant-content visibility;
- privileged support access should be auditable;
- logs/evidence must avoid secrets and unnecessary sensitive data;
- exported/document/media access must enforce business ownership and permission scope;
- private keys, service-role keys, access tokens, MFA codes and recovery material must never be committed as evidence.

> Operational support access should be purpose-limited and auditable.

---

# 2. Capabilities Acquired

## Authorization architecture capability

`CAPABILITY PROVEN`

Security & Permissions Architecture can now perform evidence-backed reasoning around:

- authentication vs authorization;
- Owner/Manager/Employee authority boundaries;
- delegated permission scope;
- business/tenant ownership;
- cross-business isolation;
- privileged backend capability;
- service-role bypass boundaries;
- execution-time revalidation;
- AI/tool authority versus human authority.

This does not mean the mature Owner/Manager/Employee permission engine is already fully implemented. The current Global Product Completion Register still classifies the mature Permissions, Business Isolation & Role Authority foundation as incomplete.

## Database security capability

`CAPABILITY PROVEN`

- RLS/policy review across SELECT/INSERT/UPDATE/DELETE behavior.
- `USING` / `WITH CHECK` reasoning.
- effective ACL/grant review.
- default-privilege review.
- service-role bypass analysis.
- privileged RPC / `SECURITY DEFINER` analysis.
- function ownership and safe `search_path` review.
- narrow executor-role review.
- cross-tenant denial reasoning.
- domain-specific hardening verification.
- current-vs-historical database security-state classification.

## Cloud/IAM security capability

`CAPABILITY PROVEN`

- AWS IAM trust-policy review.
- GitHub Actions OIDC review.
- exact role-assumption condition analysis.
- deploy-role vs runtime-role separation.
- permissions-boundary review.
- self-escalation analysis.
- exact `iam:PassRole` reasoning.
- IAM Policy Simulator evidence review.
- CloudTrail/STS evidence review.
- GitHub Environment gating analysis.
- least-privilege correction design.
- one-time privileged bootstrap vs permanent CI privilege comparison.

## Security verification capability

`CAPABILITY PROVEN`

- independent post-provisioning verification;
- evidence-blocker classification;
- correction re-verification;
- single-control re-verification;
- allowed-path and denied-path reasoning;
- runtime-boundary structural verification;
- provider-derived evidence inspection;
- stale/current finding classification;
- current live database read-only verification where explicitly authorized.

## Security-governance capability

`CAPABILITY PROVEN`

- no self-approval of security-sensitive work;
- exact correction authorization discipline;
- stop/resume boundary management;
- evidence-access recovery without lowering standards;
- tool-access versus authority distinction;
- one-time authority expiry;
- closed-stream preservation;
- separating PASS eligibility from next-gate authorization.

---

# 3. Tools We Have

## 3A. Tools / Systems Actually Used or Proven by Security & Permissions Architecture

| Tool / system | Actual security use / proven capability | Limitation / authority boundary |
|---|---|---|
| GitHub / Git | Canonical repository inspection, branch/PR review, immutable evidence paths, policy/migration diffing, security report delivery | Merge is not security acceptance; repository state is not provider/runtime state; no self-merge in this mission |
| Supabase / PostgreSQL inspection | RLS, policy, grant, role, function, trigger, default-ACL and current production read-only inspection | Read capability does not authorize mutation; project identity must be verified first |
| Supabase Security Advisor | Current advisory signal for no-policy RLS tables and authenticated `SECURITY DEFINER` functions | Advisor finding requires architecture-aware interpretation; it does not automatically prove exploitability |
| PostgreSQL RLS / ACL catalogs | Effective role, grant, inheritance, bypass and policy analysis | Catalog truth still requires runtime caller tests for complete denial-path proof |
| AWS IAM | Trust policy, identity policy, permission-boundary and `PassRole` security review | IAM access is not mission authority; deploy-role permissions must not become IAM administration |
| AWS STS / GitHub OIDC | Positive/negative role assumption evidence and short-lived session identity | Successful assumption does not prove downstream permission correctness |
| IAM Policy Simulator | Self-escalation and denied-action evidence | Simulation is structural/provider evidence, not complete runtime behavior proof |
| AWS CloudTrail | STS/OIDC audit evidence for successful and denied role-assumption attempts | Audit events prove observed provider behavior only for the tested requests |
| GitHub Actions / GitHub Environments | OIDC identity path and protected environment controls | Workflow existence/green run does not equal security acceptance or deployment authorization |
| IAM Roles Anywhere | Runtime workload identity architecture and bounded resource/tag review | Must remain isolated from CA private-key custody and broad credential authority |
| Repository evidence packages | Sanitized handoff of policies, manifests, provider observations and closure evidence | Evidence must be provider-derived where provider state is claimed; narrative reports alone are insufficient |
| Browser/provider-console evidence | Founder-guided read-only/current-state evidence for private-account operations | Console access does not authorize mutation; sensitive credentials/material must remain with the authorized human |

## 3B. Approved / Planned Providers or Integrations

`CURRENT — STILL VALID`

Do not classify future product integrations as Security-room tools merely because Security has reviewed their intended boundaries.

Examples:

- Meta WhatsApp Cloud API — approved future product integration, not a completed Security-room operational tool;
- OpenAI orchestration — approved future intelligence direction, not a security capability merely because future permission boundaries are defined;
- Cloudflare R2 — approved future storage direction, not current security tooling unless later mission evidence proves operational use;
- future Conversation Workspace/voice — product channels that must reuse the same authority kernel, not separate security systems.

---

# 4. Suggested Tools to Have

All items below are `RECOMMENDATION — NOT YET ADOPTED` unless separately authorized.

- Automated RLS denial-path harness with Owner A / Owner B / Manager / Employee / anon fixtures.
- Cross-tenant integration test suite for table, RPC, search, batch and export paths.
- Grant/default-privilege scanner that compares effective ACLs against a machine-readable policy baseline.
- Privileged RPC inventory/scanner covering `SECURITY DEFINER`, owner, `search_path`, EXECUTE grants and caller/business validation.
- Service-role call-site inventory and static check preventing browser exposure.
- IAM policy-diff checker with explicit least-privilege regression alerts.
- GitHub OIDC trust-policy validator for repository/ref/environment/audience claims.
- Security evidence manifest generator binding claim → provider/runtime evidence → commit/environment identity.
- Environment identity verifier before any database/cloud security mutation.
- Production security smoke tests focused on read-only denial behavior.
- Secret scanning and credential-leak prevention across repository/evidence artifacts.
- Dependency/SAST tooling integrated with engineering CI.
- Access-review dashboard for privileged roles and support/admin paths.
- Permission regression tests generated from the future machine-readable authorization matrix.
- Security finding lifecycle tracker using `OPEN / CORRECTED / RE-VERIFIED / CLOSED / SUPERSEDED`.

These suggestions strengthen existing Lighthouse principles by reducing unsafe privilege, ambiguity, repeated manual inspection and stale findings. They do not authorize new vendors or infrastructure.

---

# 5. Suggestions to Improve This Project

1. Make denial-path tests mandatory acceptance scenarios for every permission-sensitive Product Mission.
2. Create one machine-readable authorization matrix for Owner/Manager/Employee/external roles and derive test cases from it.
3. Maintain one current privileged-RPC inventory rather than rediscovering function ownership/grants repeatedly.
4. Run periodic grant/default-ACL audits, especially after migrations that create tables/functions.
5. Maintain a service-role call-site inventory and prohibit service-role use from browser/client code by automated check.
6. Require environment identity proof before any security mutation.
7. Require IAM trust-policy and permissions-boundary review before deployment authorization.
8. Require a security evidence manifest for each security-sensitive mission linking each claim to the exact evidence that proves it.
9. Maintain explicit finding lifecycle status: `OPEN / CORRECTED / RE-VERIFIED / CLOSED / SUPERSEDED`.
10. Never leave stale warnings without a current-state label.
11. Keep Security verification separate from builder/implementation completion.
12. Require Product Mission Completion Reports to cite both experience/happy-path evidence and permission-denial evidence where applicable.
13. Make production-safe designated multi-tenant test identities/data an explicit release-security prerequisite so cross-tenant probes do not depend on improvised real-merchant accounts.
14. Treat broad/default privilege roots systemically: fixing one domain does not prove equivalent grants elsewhere are fixed.
15. Preserve one shared permission engine across dashboards, Conversation Workspace, automation, voice and future WhatsApp.

---

# 6. What Future Rooms Must Know Before Touching This Area

1. Verify the exact mission authority before changing any security boundary.
2. Verify environment/project/account/repository identity before inspection or mutation.
3. Start from current merged evidence; do not inherit an old security warning without checking its latest status.
4. Distinguish authentication, role, permission, tenant ownership, privileged capability and business authority.
5. UI hiding is never sufficient authorization.
6. RLS enabled is necessary evidence, not a complete verdict.
7. Inspect grants/default privileges and privileged functions, not only RLS policies.
8. Treat service role as an RLS-bypass backend identity; never expose it to clients.
9. Treat every `SECURITY DEFINER` function as a trust boundary requiring owner, `search_path`, EXECUTE and tenant-validation review.
10. Test wrong-owner/wrong-business/anon/actor-mismatch/forged-business denial paths.
11. GitHub OIDC deploy identity, runtime identity and administrative/provider identity are different authorities.
12. A policy allowing an action does not mean a mission authorizes using that action.
13. Historical one-time root/admin authorization is expired unless a new mission explicitly reauthorizes it.
14. The GC-43 runtime-boundary direct-invoke defect is historical and corrected; do not reopen it without new evidence.
15. Inventory `anon` hardening is current and applied; residual broad/default grants outside Inventory remain separate current review obligations.
16. Current Catalog `SECURITY DEFINER` advisor warnings require contextual review, not automatic vulnerability/safety declarations.
17. Preserve the Product principle `AI Assistant, Not AI Judge`; AI/channel capability never bypasses permissions or human authority.
18. No security correction begins merely because this retrospective identifies a residual risk.

---

# 7. Do-Not-Repeat Register

- `MISTAKE / FAILURE MODE` — Do not treat UI hiding as authorization.
- `MISTAKE / FAILURE MODE` — Do not assume RLS enabled means safe.
- `MISTAKE / FAILURE MODE` — Do not assume broad grants are harmless because RLS exists.
- `MISTAKE / FAILURE MODE` — Do not expose service-role credentials to client/browser code.
- `MISTAKE / FAILURE MODE` — Do not use `SECURITY DEFINER` without safe `search_path`, caller/business validation and deliberate EXECUTE grants.
- `MISTAKE / FAILURE MODE` — Do not trust caller-supplied `business_id` as authority.
- `MISTAKE / FAILURE MODE` — Do not skip wrong-business/wrong-owner/anon denial tests.
- `MISTAKE / FAILURE MODE` — Do not assume an allowed path proves isolation.
- `MISTAKE / FAILURE MODE` — Do not treat green CI as security acceptance.
- `MISTAKE / FAILURE MODE` — Do not treat merged PR as runtime security proof.
- `MISTAKE / FAILURE MODE` — Do not treat provider health as authorization correctness.
- `MISTAKE / FAILURE MODE` — Do not let tool access become permission.
- `MISTAKE / FAILURE MODE` — Do not broaden IAM because one action is inconvenient.
- `MISTAKE / FAILURE MODE` — Do not create long-lived administrator/static credentials to bypass OIDC or least privilege.
- `MISTAKE / FAILURE MODE` — Do not let the deploy role administer its own security ceiling.
- `MISTAKE / FAILURE MODE` — Do not reuse historical GC-42/GC-43/root authorization.
- `MISTAKE / FAILURE MODE` — Do not treat evidence absence as security PASS or FAIL; classify evidence blockers explicitly.
- `MISTAKE / FAILURE MODE` — Do not accept an implementation report as provider proof by assertion.
- `MISTAKE / FAILURE MODE` — Do not erase stale findings without closure evidence.
- `MISTAKE / FAILURE MODE` — Do not carry corrected historical findings forward as current blockers.
- `MISTAKE / FAILURE MODE` — Do not mark a security issue resolved without independent re-verification when the mission requires it.
- `MISTAKE / FAILURE MODE` — Do not self-approve security corrections.
- `MISTAKE / FAILURE MODE` — Do not let conversational AI create a separate permission model.
- `MISTAKE / FAILURE MODE` — Do not repurpose real merchant identities as production security-test fixtures without explicit designation/authority.
- `MISTAKE / FAILURE MODE` — Do not commit secrets, credentials, tokens, private keys, MFA material or recovery data as evidence.

---

# 8. Current Truth vs Historical Truth

| Area | Historical state | Current security truth | Capability to preserve | Assumption that must not return |
|---|---|---|---|---|
| Authorization | Early work often reasoned mainly in Owner/authenticated terms | Mature direction requires one Authority & Identity Kernel with scoped Owner/Manager/Employee/external permissions | Explicit role/permission/tenant reasoning | Role label alone is sufficient authorization |
| UI permissions | Hidden/disabled surfaces sometimes served as practical gate during early foundation work | Backend/RLS/command enforcement is mandatory | UX may reflect permissions, but backend decides | UI hiding is security |
| RLS | “RLS enabled” was sometimes treated as strong proof | RLS + policies + grants + privileged functions + bypass roles + denial tests determine effective security | RLS remains first-class | RLS flag alone proves isolation |
| Inventory `anon` grants | Gate 2A found broad anonymous table/function privileges despite zero-row RLS behavior | Inventory hardening is applied; current read-only inspection shows no `anon` grantee on the three Inventory tables | REVOKE-first least privilege plus RLS | Inventory remains in the old broad-grant state |
| Non-Inventory broad grants | Historical root cause affected several public objects | Current evidence still shows `anon` grants on `businesses`, `transactions`, `transaction_correction_events`; next authorized permissions mission must address/verify | Systemic default-ACL thinking | Fixing Inventory proved every equivalent grant resolved |
| Default privileges | Broad public defaults were normalized for parity | `postgres` Inventory-related anon defaults were narrowed by hardening; other origin/default concerns require explicit current evidence | Audit default ACLs whenever creating security-sensitive objects | New objects start with a clean privilege slate |
| Service role | Sometimes treated as convenient backend access | Service role is explicit RLS-bypass authority, backend-only and mission-scoped | Narrow helpers/call sites and auditable use | Possession of service-role key authorizes arbitrary writes |
| Privileged RPCs | Functions could be discussed primarily as implementation mechanisms | Each `SECURITY DEFINER` function is a trust boundary | Safe owner/search_path/tenant/grant design | Authenticated caller automatically implies correct business authority |
| Catalog RPC advisor findings | Provider warnings can look like generic vulnerabilities | Nineteen authenticated `SECURITY DEFINER` Catalog commands are current contextual-review items; safety depends on complete architecture/denial evidence | Architecture-aware advisory interpretation | Advisor count alone proves vulnerability or safety |
| Parser support tables | RLS/no policies can look incomplete | No-policy RLS is intentional only if server-only effective grants remain narrow | Default-deny server-only pattern | “No policies” is automatically safe or unsafe |
| AWS execution access | Early execution path did not yet exist | Exact GitHub OIDC → bounded non-prod deploy role path was designed/provisioned/verified | Short-lived credentials, exact trust, no static keys | Human/CI convenience justifies broad IAM |
| GC-43 evidence | First re-verification stopped due provider evidence gap | Evidence recovery closed the visibility gap; later review found a real runtime-boundary defect | Independent provider-derived evidence | Evidence stop itself was a security defect |
| GC43B direct invoke | Runtime boundary allowed generic `lambda:InvokeFunction` | RuntimeBoundary Version 2 requires `lambda:InvokedViaFunctionUrl=true`; defect is closed unless regression evidence appears | Function-URL-only runtime ceiling | Historical defect remains current forever |
| TagResource gap | Tagged Roles Anywhere create path lacked one action | DeployPolicy Version 2 adds only bounded `rolesanywhere:TagResource` with exact resources/tags | Smallest-permission correction | Missing action justifies `rolesanywhere:*` |
| Service-linked role bootstrap | Workflow encountered `iam:CreateServiceLinkedRole` need | Least-privilege preference was one-time Founder-controlled bootstrap rather than permanent CI broadening | Separate bootstrap from steady-state automation | Every bootstrap prerequisite belongs in deploy role |
| Admin/root use | Root/bootstrap actions were sometimes necessary at founder stage | Root/account-owner use is one-time, MFA-protected, exact-purpose and expires after mission | Human-held private actions + sanitized evidence | Prior root authorization is standing permission |
| Repository vs runtime | Policy/migration documents could be over-read as current truth | Security claims require current layer-appropriate evidence | Repo/provider/runtime reconciliation | Source code alone proves current effective security |
| AI/channel authority | Future chat/voice/WhatsApp can appear as new execution surfaces | All channels must reuse one permission/authority kernel; AI is assistant, not judge/owner | Shared action/confirmation/permission path | Chat can use a separate weaker permission model |

---

# 9. Evidence Pointers

The following are durable security-relevant evidence locations. Prefer merged durable paths; `communication/live/` history should be used only when no durable archived/evidence path exists and should never become automatic current authority.

## Governance / current planning

- `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/room-retrospectives/00_Mission_Control_Institutional_Learning_Capture_Protocol.md`
- `docs/phase-1-mission-blueprint/smart-business-features/00_Founder_Approved_MC_and_CC_Verified_Build_Plan.md`
- `docs/phase-1-mission-blueprint/smart-business-features/00_Global_Product_Completion_View.md`
- `merge/active/02_Supabase_Architecture_Framework.md`
- `merge/active/05_AI_Behaviour_and_Model_Training_Framework.md`
- `merge/active/12_Product_Execution_and_Release_Framework.md`
- `merge/active/17_AI_Operations_Manual.md`
- `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md`

## Cross-room retrospectives used for reconciliation

- `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/room-retrospectives/founder-room/01_Retrospective.md`
- `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/room-retrospectives/research-intelligence/01_Retrospective.md`
- `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/room-retrospectives/claude-engineering/01_Retrospective.md`
- `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/room-retrospectives/infrastructure-operations/01_Retrospective.md`
- `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/room-retrospectives/supabase-backend/01_Retrospective.md`

## AWS IAM / OIDC / GC-42 / GC-43 evidence

- `communication/evidence/SB-P-1.11-GC-43A/aws-deploy-role-trust.json`
- `communication/evidence/SB-P-1.11-GC-43A/aws-deploy-policy.json`
- `communication/evidence/SB-P-1.11-GC-43A/aws-runtime-boundary.json`
- `communication/evidence/SB-P-1.11-GC-43A/provider-state-summary.md`
- `communication/evidence/SB-P-1.11-GC-43A/aws-policy-simulator.md`
- `communication/evidence/SB-P-1.11-GC-43A/aws-cloudtrail-sts.md`
- `communication/evidence/SB-P-1.11-GC-43C/aws-runtime-boundary-v2.json`
- `communication/evidence/SB-P-1.11-GC-43C/aws-runtime-boundary-version-evidence.md`
- `communication/evidence/SB-P-1.11-GC-43C/authorization-verification.md`
- `communication/evidence/SB-P-1.11-GC-43C/post-correction-root-static-credential-posture.md`

## Later least-privilege parser/IAM correction evidence

- `communication/evidence/SB-P-1.11-GC-38R-TagResource-Correction/manifest.md`
- `communication/evidence/SB-P-1.11-GC-38R-TagResource-Correction/deploy-policy-v2.json`
- `communication/evidence/SB-P-1.11-GC-38R-TagResource-Correction/deploy-role-trust.json`
- `communication/evidence/SB-P-1.11-GC-38R-TagResource-Correction/provider-verification.md`
- `communication/evidence/SB-P-1.11-GC-38R-TagResource-Correction/session-closure.md`
- `.github/workflows/aws-gc38r-parser-deploy.yml`

## Supabase / Inventory / RLS / grant evidence

- `supabase/migrations/20260727000000_reconcile_default_grants.sql`
- `supabase/migrations/20260830120000_sb_rel_1_10_1_11_gate2a_c1_inventory_anon_privilege_hardening.sql`
- current production provider state: Supabase project `gysgzasfcjvtrgaigfyn`, verified read-only during this retrospective for Inventory/non-Inventory grantee reconciliation
- current Supabase Security Advisor output observed 2026-09-13 for parser no-policy tables and nineteen authenticated Catalog `SECURITY DEFINER` functions

## Product/runtime authority boundaries

- current implementation baseline and Global Product Completion Register under `docs/phase-1-mission-blueprint/smart-business-features/`
- Founder-approved build plan's early `SB-P-1.12` residual security gate for `businesses`, `transactions`, `transaction_correction_events`

Historical GC-42/GC-43 live reports were valuable in the room's execution history, but their durable lesson should be consumed through the evidence packages and current retrospective status rather than treating a historical `communication/live/` filename as current authority.

---

# 10. Open Questions / Residual Risks

Only current or genuinely unresolved items are listed here.

## 10.1 Residual non-Inventory `anon` / default-grant exposure

`UNRESOLVED / NEEDS MISSION CONTROL OR FOUNDER DECISION`

Current read-only production evidence still shows `anon` grants on `businesses`, `transactions`, and `transaction_correction_events`. The Founder-approved build plan already carries this as a mandatory early security gate for the next authorized permissions mission.

**Likely owner:** Security & Permissions Architecture + Supabase Backend Architecture under future authorized `SB-P-1.12` scope.

No correction is authorized by this retrospective.

## 10.2 `supabase_admin`-origin default privilege posture

`UNRESOLVED / NEEDS MISSION CONTROL OR FOUNDER DECISION`

The Inventory hardening evidence explicitly disclosed that equivalent broad defaults created by `supabase_admin` were outside that mission's scope because correcting them could require different role authority. Current provider-wide effective default-ACL posture should be reviewed deliberately before future schema expansion.

**Likely owner:** Supabase Backend Architecture + Security & Permissions Architecture.

## 10.3 Catalog `SECURITY DEFINER` contextual review

`CURRENT OBSERVATION — NOT COMPLETE SECURITY PROOF`

The current Supabase advisor reports nineteen authenticated-executable Catalog `SECURITY DEFINER` functions. Their existence is expected as the locked Catalog public command surface, but the mature future permission model will require renewed contextual review of caller identity, tenant validation, executor-role isolation, function ownership, search path, EXECUTE grants and denial paths.

**Likely owner:** Security & Permissions Architecture + Supabase Backend Architecture in the future authorized Product & Price Master/permissions work.

## 10.4 Product-wide denial-path automation is incomplete

`UNRESOLVED / NEEDS MISSION CONTROL OR FOUNDER DECISION`

Phase 1 has valuable manual/targeted denial evidence, but not one automated product-wide matrix covering Owner/Manager/Employee/anon/cross-business/privileged paths.

**Likely owner:** Security & Permissions Architecture + Claude Engineering / future engineering operator.

## 10.5 Production-safe multi-tenant security fixtures

`UNRESOLVED / NEEDS MISSION CONTROL OR FOUNDER DECISION`

Gate 2A demonstrated that release-time cross-tenant verification can be blocked when no clearly designated production-safe test users/businesses/data exist. A governed fixture strategy is needed that does not repurpose real merchant identities or encourage production test-data creation without explicit authorization.

**Likely owner:** Mission Control + Security & Permissions Architecture + Supabase Backend Architecture.

## 10.6 Service-role call-site inventory

`RECOMMENDATION — NOT YET ADOPTED`

Future shared AI, document, automation and integration work increases pressure on backend privileged paths. A current service-role call-site inventory should exist before those surfaces grow.

**Likely owner:** Security & Permissions Architecture + Claude Engineering.

## 10.7 Conversation Workspace / WhatsApp permission convergence

`CURRENT — STILL VALID FUTURE RISK`

The future native Conversation Workspace and WhatsApp integration must use the same Authority & Identity Kernel as structured application surfaces. This is not yet a current vulnerability because the mature channels are not yet implemented, but it is a mandatory architecture guardrail for future missions.

**Likely owner:** future authorized Product Mission + Security & Permissions Architecture.

## 10.8 Stale evidence before future cloud/security mutation

`CURRENT — STILL VALID FUTURE RISK`

GC-42/GC-43 evidence proves the state that was captured and independently verified at that time. Before any future IAM/security mutation, current provider identity/policy state must be re-read; historical PASS is not reusable authority or eternal proof.

**Likely owner:** Infrastructure Operations + Security & Permissions Architecture.

---

## Closing security principle

Phase 1's security maturity can be summarized in one operating rule:

> **Security is not the presence of a control. Security is the evidence-backed proof that the right actor, in the right tenant, through the right path, can do only what is authorized — and that the wrong actor/path is denied — under the current runtime/provider state and current mission authority.**
