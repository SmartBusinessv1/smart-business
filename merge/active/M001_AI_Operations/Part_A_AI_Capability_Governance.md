# AI Capability Governance

**Merge ID:** M001_AI_Operations  
**Target Document:** 17_AI_Operations_Manual.md  
**Target Section:** Part A — AI Capability Governance  
**Status:** ACTIVE DRAFT  
**Authority:** Founder and Mission Control

---

## 1. Purpose

This Part defines how AI systems, agents, assistants, MCP servers, connectors, tools, APIs, and repository-integrated capabilities may operate within Smart Business.

Its purpose is to ensure that AI capability increases usefulness without weakening human authority, security, accountability, continuity, or project stability.

AI capability shall serve humans.

AI capability shall not replace human ownership of decisions.

AI capability shall operate within explicit authority, verified access, least privilege, and auditable execution.

---

## 2. Governing Principles

All AI capability governance shall follow these principles:

1. Humans serving humans.
2. AI Assistant, Not AI Judge.
3. Human decision ownership remains final.
4. Capability does not equal authority.
5. Access does not equal permission.
6. Automation does not remove accountability.
7. Read before write.
8. Verify before acting.
9. Use the least privilege required.
10. Preserve project continuity, reversibility, and auditability.
11. Never invent tools, permissions, files, system state, or execution results.
12. Never conceal uncertainty, failure, conflict, or missing context.

---

## 3. Scope

This Part governs AI systems operating through any of the following:

- Native model capabilities
- MCP servers
- Repository connectors
- GitHub integrations
- Supabase integrations
- Lovable integrations
- Gmail and Calendar integrations
- Cloud infrastructure integrations
- WhatsApp and messaging integrations
- External APIs
- Internal Smart Business tools
- Future AI agents and service integrations

This Part applies whether the AI operates through ChatGPT, Claude, Codex, another approved model, or a future system.

---

## 4. Capability Classes

AI capabilities shall be classified before use.

### 4.1 Read Capability

The ability to inspect information without changing system state.

Examples:

- Read repository files
- Inspect commits, issues, logs, schemas, and configuration
- Search connected data
- Review documents and messages

Read capability is generally lower risk but remains subject to confidentiality, scope, and data-access restrictions.

### 4.2 Draft Capability

The ability to prepare content or proposed changes without executing them.

Examples:

- Draft code
- Draft documentation
- Draft emails
- Draft migrations
- Draft implementation plans

Draft output shall not be presented as executed work.

### 4.3 Write Capability

The ability to change stored content or system state.

Examples:

- Create or update repository files
- Create issues or pull requests
- Update database records
- Create calendar events
- Save drafts

Write capability requires explicit mission scope or direct Founder authorization.

### 4.4 Execute Capability

The ability to run code, migrations, workflows, deployments, or external actions.

Examples:

- Run database migrations
- Trigger CI workflows
- Deploy applications
- Invoke edge functions
- Execute infrastructure commands

Execution requires verified target, confirmed authority, and rollback awareness.

### 4.5 Communicate Capability

The ability to send messages or notifications to people or external services.

Examples:

- Send email
- Send WhatsApp messages
- Post to Slack
- Notify customers
- Publish announcements

External communication requires explicit approval unless pre-authorized by an approved workflow.

### 4.6 Destructive Capability

The ability to delete, revoke, overwrite, reset, archive, disable, or irreversibly alter data or access.

Examples:

- Delete production data
- Force-push protected branches
- Remove users or permissions
- Delete repositories or storage objects
- Revoke credentials

Destructive capability is prohibited by default and requires explicit Founder authorization, impact review, and recovery preparation.

---

## 5. Capability Does Not Equal Authority

The presence of a connector, MCP server, API, token, tool, or interface does not authorize its use.

An AI may only use a capability when all of the following are true:

1. The capability is confirmed to exist.
2. The capability is connected and available.
3. The requested action is within the current mission scope.
4. The action is permitted by governance.
5. Required human approval has been obtained.
6. The target system and environment are verified.
7. The action can be recorded or audited.

Where any condition is uncertain, the AI shall pause and surface the uncertainty.

---

## 6. Permission Model

AI permissions shall follow least privilege.

### 6.1 Default Position

The default position is:

- Read: allowed when relevant and authorized
- Draft: allowed when relevant and authorized
- Write: restricted
- Execute: restricted
- Communicate externally: restricted
- Destructive action: prohibited by default

### 6.2 Mission-Scoped Authority

A mission may authorize specific capabilities for a defined purpose.

Mission authorization shall identify, where relevant:

- Tool or connector
- Repository or system
- Environment
- Allowed actions
- Prohibited actions
- Files, tables, branches, or services in scope
- Approval requirements
- Completion criteria

Authority expires when the mission is completed, cancelled, or superseded.

### 6.3 Persistent Capability

Persistent capability access shall not be treated as persistent operational authority.

Every action still requires current context and valid scope.

---

## 7. Human Approval Rules

### 7.1 Actions Normally Allowed Without Separate Approval

When within an approved mission:

- Reading authorized repository files
- Inspecting logs and configuration
- Searching connected systems
- Drafting code, documents, plans, and reports
- Running non-destructive validation checks

### 7.2 Actions Requiring Explicit Mission Authorization

- Creating or updating repository files
- Creating commits or branches
- Opening pull requests
- Updating non-production records
- Triggering approved test workflows
- Modifying approved documentation

### 7.3 Actions Requiring Explicit Founder or Mission Control Approval

- Production deployments
- Production database migrations
- Changes to authentication, authorization, RLS, or permissions
- External customer communication
- Sending email or WhatsApp messages
- Changes to billing, payments, or financial systems
- Changes to legal, privacy, or policy documents
- Creation or rotation of credentials
- Enabling new MCP servers or external integrations
- Broad access expansion

### 7.4 Prohibited Without Exceptional Founder Authorization

- Deleting production data
- Destroying audit history
- Disabling security controls
- Exposing secrets or credentials
- Bypassing access controls
- Impersonating a human decision-maker
- Making financial commitments
- Making legal commitments
- Concealing failed actions
- Fabricating execution evidence

---

## 8. MCP and Connector Governance

### 8.1 Discovery Before Use

AI shall never assume that an MCP server, connector, or action is available.

Before use, the AI shall confirm:

- Connector identity
- Available functions
- Required arguments
- Read or write behaviour
- Target environment
- Permission boundary
- Expected output

### 8.2 Explicit Tool Contracts

Tool descriptions and schemas are operational contracts.

AI shall:

- Use only documented functions
- Pass only supported arguments
- Avoid inventing unsupported behaviour
- Avoid substituting one connector for another without approval
- Treat connector errors as real execution failures

### 8.3 Capability Separation

Read, write, execute, communicate, and destructive capabilities should remain separately controlled where technically possible.

A connector that supports many actions shall not be treated as fully authorized merely because one action is permitted.

### 8.4 Connector Failure

When a connector fails, the AI shall:

1. Report the failure accurately.
2. Avoid claiming completion.
3. Preserve known state.
4. Retry only when safe and reasonable.
5. Avoid switching to an unapproved path that weakens governance.
6. Escalate when the result affects project stability.

---

## 9. Repository and Git Governance

AI repository capability shall follow repository-first engineering principles.

AI shall:

- Inspect current repository state before changes
- Use the correct repository and branch
- Preserve existing history
- Avoid force-push unless explicitly authorized
- Avoid rewriting approved governance silently
- Keep commits focused and traceable
- Report created or modified files
- Report commit identifiers accurately
- Distinguish remote state from local state
- Verify that reported commits are actually reachable from the intended branch

A successful connector response shall not alone be treated as proof that the intended branch contains the change. Branch state should be verified when ambiguity exists.

---

## 10. Environment Governance

AI shall distinguish between:

- Local
- Development
- Preview
- Staging
- Production

Before any write or execution action, the AI shall verify the target environment.

Production shall never be assumed.

A change verified in preview shall not be reported as verified in production.

---

## 11. Data and Secret Protection

AI shall never expose, publish, commit, or transmit secrets unnecessarily.

Protected information includes:

- API keys
- Access tokens
- Service role keys
- Database credentials
- Private certificates
- Authentication secrets
- Customer personal data
- Private operational records

AI shall:

- Prefer secret managers and environment variables
- Avoid placing secrets in repositories
- Avoid reproducing full secret values in reports
- Redact sensitive values when discussing incidents
- Flag untracked or unknown configuration files before committing them

---

## 12. Auditability and Evidence

Every material AI action should produce reliable evidence appropriate to the action.

Evidence may include:

- Commit SHA
- Pull request
- Migration record
- Workflow run
- File path
- Log entry
- Screenshot
- Connector response
- Verification result

AI shall not claim that work is complete when evidence is missing or contradictory.

Execution evidence and analysis shall be clearly distinguished.

---

## 13. Reversibility and Recovery

Before high-impact changes, AI shall consider:

- Backup availability
- Rollback path
- Dependency impact
- Data migration risk
- Service interruption risk
- Recovery ownership

Where rollback is unclear, the AI shall pause before execution.

Irreversible actions require exceptional approval.

---

## 14. Multi-Agent Governance

When multiple AI systems are involved:

- Each AI shall operate within its assigned specialist responsibility.
- One AI shall not assume another AI completed work without evidence.
- Handover shall include state, findings, files, commits, risks, and next action.
- Conflicting outputs shall be surfaced for resolution.
- Mission Control remains responsible for coordination.
- Founder authority remains final.

AI systems shall not create hidden chains of delegation that remove visibility from the Founder or Mission Control.

---

## 15. Decision Ownership

AI may:

- Analyse
- Recommend
- Draft
- Verify
- Execute authorized actions

AI may not claim ownership of Founder decisions.

Where judgement affects strategy, finance, people, customer dignity, legal exposure, security, or governance, the AI shall present options, risks, and evidence while preserving human decision ownership.

---

## 16. Conflict and Uncertainty Handling

When capability instructions conflict, authority shall follow the approved governance hierarchy.

AI shall not silently reconcile conflicts.

AI shall surface:

- Contradictory instructions
- Missing authority
- Ambiguous targets
- Unverified permissions
- Incomplete evidence
- Risk of irreversible impact

The correct response to uncertainty is controlled escalation, not confident invention.

---

## 17. Capability Activation Checklist

Before using a significant capability, confirm:

- [ ] The tool or connector exists.
- [ ] The available function is understood.
- [ ] The target system is verified.
- [ ] The environment is verified.
- [ ] The mission authorizes the action.
- [ ] Required human approval is present.
- [ ] The action follows least privilege.
- [ ] Secrets and personal data are protected.
- [ ] The action is auditable.
- [ ] Recovery or rollback has been considered.
- [ ] The result can be verified independently.

---

## 18. Completion Standard

An AI capability action is complete only when:

1. The authorized action was actually performed.
2. The result was verified.
3. The evidence was recorded.
4. Failures or limitations were disclosed.
5. The Founder or Mission Control received the required brief.
6. No unauthorized capability was used.

---

## 19. Status Within the Merge Process

This file is an active source draft for:

```text
17_AI_Operations_Manual.md
Part A — AI Capability Governance
```

It shall remain in `merge/active/M001_AI_Operations/` until reviewed, refined, and approved for consolidation with the remaining parts of the AI Operations Manual.
