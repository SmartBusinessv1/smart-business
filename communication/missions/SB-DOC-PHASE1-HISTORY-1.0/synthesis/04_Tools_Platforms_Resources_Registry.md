# SB-DOC-PHASE1-HISTORY-1.0 — Tools, Platforms & Resources Registry

**Document status:** PHASE B — RECONCILIATION PASS 1 — EVIDENCE-BACKED DRAFT  
**Purpose:** Record when major Smart Business tools/platforms/resources entered the project, why they were introduced, what capability they enabled, and their authority/current-state boundaries.  
**Security boundary:** No secrets, private keys, tokens, service-role credentials or sensitive values are recorded here.

## 1. Registry interpretation

This registry distinguishes:

- historical introduction;
- demonstrated capability;
- authorized use;
- historical role;
- current role;
- limits and authority boundaries.

Current-state details may evolve independently from historical introduction. Where a platform identity changed, both historical and current states are preserved rather than collapsed.

## 2. Core registry

| Tool / platform / resource | Introduction / maturity period | Why introduced | Capability enabled | Current / historical role | Authority / limitation |
| --- | --- | --- | --- | --- | --- |
| ChatGPT Project | Phase 0 | Create Smart Business operating context | Persistent project sources, specialist rooms, Founder/Mission Control coordination | Historical and current project operating environment | Conversation is not durable operational truth; repository records material work. |
| Mission Control | Phase 0 | Coordinate one continuous project across specialist rooms | Sequencing, authorization, handover, evidence review | Core governance/execution coordinator | Founder authority remains final; Mission Control does not invent Product Truth. |
| Specialist rooms | Phase 0 onward | Divide responsibility by domain | Infrastructure, Lovable, Supabase, AI/WhatsApp, Security, Customer Success, etc. | Specialist review/execution support | Capability and specialist confidence do not create mission authority. |
| Hostinger | Before / during SB-P-1.1 | Corporate domain and DNS control | `teamlips.com` DNS, subdomain foundation | Domain/DNS provider in early Phase 1 | DNS changes require exact target/state evidence; unrelated records preserved. |
| Google Workspace / Team LIPS business email | Early Phase 1 | Organizational communication and platform identity | Team LIPS email presence and SaaS registration context | Organizational identity/communication resource | Email alias ≠ independent Google auth identity ≠ SaaS account authority. |
| GitHub `SmartBusinessv1/smart-business` | SB-P-1.3 foundation, matured throughout Phase 1 | Canonical implementation and evidence environment | Source control, mission artifacts, commits, PRs, Actions, evidence | Canonical operational repository | Repository truth is not automatically runtime truth. Protected workflow and no self-merge remain required. |
| GitHub `SmartBusinessv1/starter-supab-shell` | Later production-delivery topology | Delivery path for intended Lovable production project | Controlled synchronization from canonical repository into production Lovable project | Current production delivery repository | It is not the canonical Product Truth/repository authority; synchronize only under authorization. |
| Lovable | SB-P-1.3 onward | Build public site and React product experience | Public site, application shell, auth/workspace/operations/inventory/catalog UI | Authorized application builder / production project path | Lovable does not define Product Truth, database architecture or permissions. Workspace/publish/runtime states must be verified separately. |
| Current Lovable project `f3e992ec-06df-4d49-b157-b92ec064c078` | Later production recovery | Restore intended Lovable production implementation path | Current authorized Lovable production build/publication path | Active intended production Lovable project | Must remain synchronized through the approved canonical→delivery path; platform state is separate from repository state. |
| Historical Lovable workspace/project `governed-growth-path` | Earlier product runtime | Historical Smart Business Lovable runtime | Earlier product publication/runtime | Historical / excluded from new authority | Preserve evidence; do not use as current implementation authority. |
| Supabase | Provisioned early; product use matured SB-P-1.5 onward | Backend, auth, PostgreSQL, RLS, business data | Authentication, schema, RLS, migrations, functions, test/production data services | Core backend platform | Environment identity must be verified; production mutation requires explicit authority. |
| Supabase project `gysgzasfcjvtrgaigfyn` | Provisioned before later production migration | Dedicated Smart Business Supabase project | Test backend during SB-P-1.10; later production backend | Current authoritative production Supabase project | Historical role was test-only at SB-P-1.10 acceptance; do not rewrite that history. |
| Lovable Cloud backend `wwgqnshcgbukqczqblsm` | Application Access / early Lovable Cloud period | Managed backend for Lovable runtime | Historical production backend for auth/business/inventory era | Historical / excluded from current authority | Was production at SB-P-1.10 acceptance; later superseded by migration to current Supabase production. |
| Claude.ai / Claude Pro Smart Business project | Early/mid Phase 1 engineering-platform calibration | Engineering intelligence, large-context planning, architecture review | Engineering planning/reasoning and project knowledge | Engineering support environment | Platform capability ≠ operational authority. Must not be conflated with ChatGPT Claude rooms or Claude Code. |
| ChatGPT Claude-oriented room/Lab | Early/mid Phase 1 | Technical governance/review inside ChatGPT Project | Calibration, review, troubleshooting, early implementation reasoning | Historical ChatGPT specialist evidence | Not Claude.ai and not Claude Code execution evidence. |
| Claude Code / VS Code | Mature engineering period, especially later Product Missions | Repository-aware engineering and independent verification | EIS, implementation packages, reviews, code/repo reasoning, verification | Team LIPS engineering execution/review capability | GitHub durable evidence is primary; local chat history is supplementary unless a reasoning gap remains. |
| Codex / repository-integrated AI | Mature Phase 1 | Product definition, repository documentation, audit and mission support | Product Blueprint drafting, audits, docs, Git operations under authority | Repository-aware AI execution/support | Cannot self-approve/self-merge or redefine Founder/Product Truth. |
| GitHub Actions / Markdown Quality Gate | 13–17 Jul engineering-system maturation | Automate documentation/quality checks | Markdown CI, controlled evidence/checks | Active engineering quality capability | Required checks must be correctly triggerable; fix control paths rather than bypassing checks. |
| Founder local clone / VS Code / PowerShell | Throughout engineering maturity | Human-operated repository/runtime verification | Git operations, REST/RPC checks, local engineering work | Founder-controlled execution/verification environment | Local state ≠ remote canonical state; verify branch/SHA/environment before conclusions. |
| Meta / WhatsApp Business Platform | Planned from early public-verification period; AI/WhatsApp specialization throughout | Primary conversation channel for merchant experience | WhatsApp webhook/message/media workflows | Approved product channel; production activation depends on separate evidence/gates | Channel does not own Product Truth/business memory/permissions; do not claim production activation from planning evidence alone. |
| OpenAI | Planned/intelligence framework throughout Phase 1 | Language understanding, extraction, Ask CFO/assistant reasoning | AI interpretation, multimodal/voice/document intelligence | Approved intelligence provider role where separately implemented | AI assists, does not own merchant authority; tool/model availability is not implementation proof. |
| Cloudflare R2 | Planned storage capability | Merchant document/media object storage | Future/approved storage role | Planned/operational profile capability; exact production activation must be separately evidenced | Do not claim active storage use solely from framework documents. |
| Cloudflare Workers | Late SB-P-1.11 runtime investigation | Test alternate runtime reachability/compatibility | Non-production runtime reachability probe | Historical runtime investigation resource | Default `Hello World` success proved provider reachability only, not parser compatibility. |
| AWS Account | Late SB-P-1.11, after Founder explicitly had no AWS account | Parser/runtime infrastructure | IAM, OIDC, Lambda, Roles Anywhere | Current infrastructure capability for parser/runtime line | Root protected by MFA/no root keys; operational access least-privilege and mission-scoped. |
| AWS IAM / OIDC | Late SB-P-1.11 | Secure workload/deployment identity | GitHub OIDC, policies, permissions boundaries, constrained invoke paths | Mature infrastructure-security capability | Resource scope alone is insufficient when invocation path is security-relevant. |
| IAM Roles Anywhere | Late SB-P-1.11 | Certificate/workload identity where required | Non-user workload authentication pattern | Parser/infrastructure security capability | Bootstrap administration must not become permanent deploy-role breadth. |
| AWS Lambda | Late SB-P-1.11 | Controlled parser execution environment | Parser/runtime function | Parser infrastructure capability | Deployment/runtime authority separate from account/admin authority; exact runtime verification required. |
| Team LIPS Markdown / engineering toolkit | 13–17 Jul | Reduce documentation drift and standardize engineering artifacts | Markdown checks, artifact workflows, reusable project engineering standards | Organization-level reusable capability | Tools support governance; they do not create new governance authority. |
| Project Source files / canonical source package | Phase 0 onward, later consolidated | Provide shared governance/product context | Product Truth, roadmap, architecture, operations guidance | Active canonical governance package | Current approved source package outranks historical project-source copies. |
| Founder reference PDFs | 24 Jun historical Founder Room | Give Founder printable overview of roadmap/product | Physical/reference summaries | Historical reference artifacts | Not active governance; current source files prevail where wording differs. |

## 3. Platform-state lessons

### GitHub

`canonical repository state` ≠ `delivery repository state` ≠ `deployed runtime state`.

### Lovable

`workspace/project exists` ≠ `published` ≠ `custom domain points to it` ≠ `current production code matches canonical`.

### Supabase

`project exists/healthy` ≠ `schema deployed` ≠ `production` ≠ `application bound to it`.

### AI platforms

`model can access/read/write` ≠ `mission permits that action`.

### AWS

`account owner/admin capability` ≠ `deployment identity` ≠ `runtime identity`.

These distinctions became important reusable Team LIPS operating capability.

## 4. Current safe reference points

The following current identities may be referenced without exposing secrets:

- canonical repository: `SmartBusinessv1/smart-business`;
- delivery repository: `SmartBusinessv1/starter-supab-shell`;
- product domain: `smartbusiness.teamlips.com`;
- corporate domain: `teamlips.com`;
- current Lovable project ID: `f3e992ec-06df-4d49-b157-b92ec064c078`;
- current production Supabase ref: `gysgzasfcjvtrgaigfyn`.

Historical references such as Lovable Cloud backend `wwgqnshcgbukqczqblsm` must be clearly labeled historical when used.

## 5. Registry result

The project evolved from a small Founder+AI coordination environment into a multi-platform engineering system in which each tool has an explicit role and a bounded relationship to authority.

The strongest cross-platform lesson is:

**A tool's capability, connection, account ownership, repository visibility, environment state and mission authority are separate facts.**
