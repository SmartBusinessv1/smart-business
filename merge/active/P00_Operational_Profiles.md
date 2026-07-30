# P00_Operational_Profiles

## Metadata

- **Merge ID:** M003_Operational_Profiles
- **Status:** FOUNDER APPROVED — ACTIVE GOVERNANCE
- **Authority:** Founder and Mission Control
- **Primary Operational Authority:** Source 17 — AI Operations Manual
- **Approved By:** Founder — Riyas PK
- **Approval Date:** 2026-07-30
- **Merged From:**
  - P01_Lovable_Operational_Profile
  - P02_Supabase_Operational_Profile
  - P03_WhatsApp_API_Operational_Profile
  - P04_OpenAI_Operational_Profile
  - P05_Voice_AI_Operational_Profile
  - P06_Cloudflare_R2_Operational_Profile

---

## 1. Purpose

This framework defines how approved platforms and AI capabilities participate in Smart Business development and operations.

It exists to ensure that each platform:

- performs only its approved responsibility
- follows the same governance chain
- respects Product Truth
- preserves human decision ownership
- avoids duplication of business logic
- protects merchant data, privacy, permissions, and continuity
- remains replaceable where practical
- strengthens Smart Business without becoming Smart Business

No platform, model, builder, provider, or integration may redefine what Smart Business is.

---

## 2. Governing Authority Chain

Founder

↓

Mission Control

↓

Approved Governance Sources

↓

Source 17 — AI Operations Manual

↓

This Framework

↓

Platform-Specific Execution

Each platform executes approved missions only.

No platform may bypass Mission Control, reinterpret Product Truth, or create independent operational authority.

---

## 3. Mandatory Reading

Before implementation, every platform-specific mission shall inherit the current approved equivalents of:

- Lighthouse Constitution
- Smart Business Product Truth
- Product Execution and Release Framework
- Mission Control activation and governance instructions
- AI Operations Manual
- relevant architecture, security, brand, support, and operational sources

Legacy references to separate Sources 12, 13, and 14 shall be understood as the approved merged **12_Product_Execution_and_Release_Framework**.

Implementation shall never proceed from assumptions.

When governance or Product Truth is unclear, the implementing platform or AI shall pause, identify the uncertainty, and return through Mission Control.

---

## 4. Shared Operational Principles

Every platform shall preserve:

- Humans serving humans
- AI Assistant, Not AI Judge
- technology as a tool for human improvement
- conversation-first interaction where applicable
- channel independence
- human ownership of important decisions
- merchant ownership of business data
- least-privilege access
- reuse before creating
- one source of truth
- one implementation of each core capability
- clear separation of business logic from channels and providers
- traceability, auditability, and controlled evolution

Every platform shall reject:

- feature invention
- hidden business rules
- unauthorized scope expansion
- hardcoded permissions
- duplicate business entities
- duplicate workflows
- provider-specific Product Truth
- simulated success
- silent data loss
- secret exposure
- unsupported assumptions

---

## 5. Shared Mission Control Workflow

Mission

↓

Read Approved Sources

↓

Identify Scope and Boundaries

↓

Design or Plan

↓

Implement or Configure

↓

Validate

↓

Run Acceptance Checks

↓

Document Findings and Risks

↓

Return to Mission Control

No platform may independently declare a mission complete, accepted, pilot-ready, or released.

---

## 6. Shared Prompt and Mission Structure

Every platform-specific instruction should include:

- Mission ID
- Objective
- Relevant Sources
- Scope
- Explicit Boundaries
- Platform-specific impact
- Security considerations
- Expected Deliverables
- Acceptance Criteria
- Required evidence
- Escalation conditions

Instructions shall be concise enough to execute, complete enough to prevent assumptions, and explicit enough to audit.

---

## 7. Shared AI Behaviour

AI participating in any platform shall:

- explain major implementation decisions
- identify uncertainty
- surface assumptions
- describe risks and trade-offs
- ask for clarification when approved sources are unclear
- avoid unsupported claims
- never fabricate system behaviour
- never simulate successful actions
- preserve human decision ownership
- respect permissions and business isolation

AI shall not quietly fill governance gaps with general knowledge.

---

# Part 1 — Lovable Operational Profile

## 8. Purpose and Mission

Lovable implements approved frontend experiences.

Its mission is to transform approved Product Truth into high-quality React user experiences while preserving governance, simplicity, accessibility, and consistency.

Lovable builds the Smart Business experience. It never defines what Smart Business is.

---

## 9. Primary Responsibilities

Lovable owns:

- React UI
- approved routing
- reusable components
- dashboard experiences
- forms
- responsive layouts
- Progressive Web App implementation
- frontend state management
- accessibility
- visual consistency

---

## 10. Boundaries

Lovable shall not:

- redesign Product Truth
- redesign subscriptions
- redesign permissions
- redesign database architecture
- redesign AI behaviour
- invent workflows
- introduce unauthorized features
- create unauthorized routes or navigation
- move business logic into frontend-only implementations

---

## 11. UI and Component Principles

Every interface shall be:

- conversation-first where applicable
- simple
- fast
- respectful
- mobile-first
- responsive
- accessible
- consistent

Component implementation shall:

- reuse before creating
- use modular architecture
- follow the shared design system
- avoid duplicate components and pages
- avoid unnecessary libraries
- preserve responsive behaviour

---

## 12. Routing and Progressive Web App Rules

Lovable shall:

- use only approved public and protected routes
- preserve authentication flows
- avoid invented navigation
- support installability
- preserve cross-device consistency
- provide offline resilience where appropriate

The approved public routes are:

- `/`
- `/how-it-works`
- `/start`
- `/contact`
- `/dashboard` as Login

The approved footer routes are:

- `/contact`
- `/privacy-policy`
- `/terms-of-service`

Hidden or internal routes remain:

- `/super-admin`
- `/api/whatsapp-webhook`

`/survey` is deprecated and shall not be restored; use `/start`.

---

## 13. Lovable Completion Checklist

Before completion verify:

- Product Truth respected
- Product Execution and Release Framework followed
- responsive behaviour verified
- accessibility verified
- components reusable
- duplicate pages or components avoided
- authentication flow preserved
- no unauthorized routes or features introduced
- acceptance evidence prepared

---

# Part 2 — Supabase Operational Profile

## 14. Purpose and Mission

Supabase provides the secure backend foundation for Smart Business.

Its mission is to implement secure, scalable, maintainable backend services that faithfully express approved Product Truth.

Supabase protects Smart Business data. It never defines what Smart Business is.

---

## 15. Primary Responsibilities

Supabase owns:

- PostgreSQL database
- Authentication
- Row Level Security
- Storage where approved
- Edge Functions
- Realtime services
- database migrations
- approved backend APIs
- audit-ready data foundations

---

## 16. Database Principles

Supabase shall maintain:

- one source of truth
- UUID-based merchant isolation
- normalized schema
- auditability
- migration safety
- future scalability
- traceable ownership fields
- explicit relationships and constraints

Reuse existing entities before creating new tables.

Core business entities shall not be duplicated across features.

Business logic shall remain in the correct backend service or domain layer, not be fragmented across database triggers, frontend code, prompts, and webhook handlers without approved design.

---

## 17. Authentication and Permission Rules

Support approved authentication methods, including:

- WhatsApp
- Email and Password
- future approved providers

All approved methods shall map to the same Smart Business identity, Business Memory, and permissions.

Employee access must remain permission-scoped.

By default:

- staff may add transactions only when permitted
- staff may view their own attendance only when permitted
- staff shall not see owner financial intelligence
- no role may bypass merchant isolation

---

## 18. Security Standards

Supabase shall implement:

- Row Level Security
- least-privilege access
- secure storage policies
- API protection
- secrets management
- backup readiness
- cross-merchant isolation tests
- service-role restriction
- audit logging where required

Security is mandatory and cannot be deferred as a cosmetic or post-launch improvement.

---

## 19. Storage and Migration Rules

Metadata belongs in the database.

Files belong in approved storage.

Every migration shall:

- preserve merchant data
- include validation
- avoid unnecessary downtime
- maintain backward compatibility where practical
- be reversible where practical
- document irreversible impact
- include recovery or rollback planning

---

## 20. Supabase Completion Checklist

Before completion verify:

- Product Truth respected
- RLS verified
- permissions verified
- merchant isolation tested
- migration tested
- no duplicate entities created
- performance reviewed
- secrets protected
- documentation updated where required

---

# Part 3 — WhatsApp Business Platform Operational Profile

## 21. Purpose and Mission

WhatsApp is an approved conversation channel.

Its mission is to provide reliable conversational messaging while keeping business logic, permissions, identity, and Business Memory inside Smart Business.

WhatsApp delivers conversations. Smart Business delivers the business experience.

---

## 22. Primary Responsibilities

The WhatsApp Business Platform owns:

- WhatsApp Cloud API integration
- webhook handling
- template messaging
- session messaging
- media transfer
- delivery status handling
- phone number integration

---

## 23. Boundaries and Channel Independence

WhatsApp shall not:

- own Business Memory
- own business rules
- own permissions
- redefine workflows
- invent features
- become the only place where a workflow can operate

Business logic belongs to Smart Business.

WhatsApp is one approved channel among many.

Standard POS bridges are allowed through approved integration layers. Custom POS modifications inside the Smart Business core platform are rejected.

---

## 24. Webhook and Messaging Rules

Webhook handling shall:

- verify signatures
- validate payloads
- handle retries safely
- process events idempotently
- log failures
- prevent duplicate message processing
- avoid embedding business rules directly in webhook handlers

Templates shall be used only where required by Meta policies.

Unnecessary template usage shall be avoided.

---

## 25. Media and Security Rules

Supported media may include:

- text
- images
- documents
- voice notes
- location when required

Store metadata in Smart Business.

Store files through the approved storage profile.

Protect:

- access tokens
- webhook secrets
- merchant isolation
- user privacy
- customer privacy

Credentials shall never be exposed or hardcoded.

---

## 26. WhatsApp Completion Checklist

Before completion verify:

- Product Truth respected
- webhook signatures verified
- retry and idempotency behaviour tested
- templates validated
- media flows tested
- delivery status handling verified
- credentials protected
- no channel-specific business logic introduced
- documentation updated

---

# Part 4 — OpenAI Operational Profile

## 27. Purpose and Mission

OpenAI provides reasoning, language understanding, extraction, and AI assistance.

Its mission is to support Smart Business with safe, contextual, permission-aware intelligence that follows approved Product Truth and AI behaviour governance.

OpenAI assists. It does not judge, own merchant decisions, or define Product Truth.

---

## 28. Primary Responsibilities

OpenAI may support:

- natural-language understanding
- classification
- structured extraction
- summarisation
- explanation
- recommendation
- controlled function calling
- document interpretation
- conversation assistance
- Ask CFO reasoning within approved boundaries

---

## 29. Boundaries

OpenAI shall not:

- directly access unrestricted business data
- bypass permissions
- execute destructive actions
- invent transactions or balances
- make final financial, legal, people, or governance decisions
- accuse employees or customers
- redefine Product Truth
- store permanent project truth only inside a model conversation

---

## 30. Prompt, Function, and Memory Rules

Prompts shall:

- use approved governance context
- preserve role boundaries
- identify required output structure
- distinguish fact from inference
- define uncertainty handling
- avoid hidden authority claims

Function and tool use shall:

- use explicit schemas
- validate inputs
- respect merchant and permission boundaries
- use least privilege
- require confirmation for consequential or uncertain actions
- preserve auditability

Business Memory shall remain in approved Smart Business storage, not depend solely on model conversation history.

---

## 31. Model and Performance Rules

Model selection shall consider:

- task complexity
- latency
- cost
- reliability
- language quality
- security
- context requirements

Use the least complex model that can perform the task reliably.

Do not use model size as a substitute for good architecture, clear prompts, validated tools, or controlled memory.

---

## 32. AI Safety and Completion Checklist

Before completion verify:

- AI Assistant, Not AI Judge preserved
- hallucination controls tested
- confidence handling tested
- permission checks enforced outside the prompt where required
- function calls validated
- sensitive data protected
- destructive actions blocked
- Ask CFO remains advisory and read-only
- evidence and logs available where required
- failure states are honest and recoverable

---

# Part 5 — Voice AI Operational Profile

## 33. Purpose and Mission

Voice AI allows merchants to interact naturally through speech.

Its mission is to reduce typing friction while preserving confirmation, clarity, privacy, language dignity, and human control.

Voice is an interaction method. It does not create a separate business system.

---

## 34. Primary Responsibilities

Voice capability may support:

- speech-to-text
- voice-note interpretation
- spoken confirmations
- multilingual input
- accessibility
- conversational assistance
- approved text-to-speech responses

---

## 35. Language and User Experience Rules

Voice experience shall support approved language behaviour for:

- English
- Malayalam
- Manglish

Voice interaction shall:

- remain natural and respectful
- avoid forcing formal language
- repeat or clarify uncertain financial information
- allow text fallback
- preserve the merchant's selected language where appropriate
- avoid unnecessary verbosity
- confirm consequential actions before execution

---

## 36. Security and Privacy Rules

Voice data shall:

- be processed only for the approved purpose
- remain within the correct merchant boundary
- avoid exposing sensitive financial or personal information through uncontrolled audio playback
- follow approved retention policies
- be deleted or minimized where long-term storage is unnecessary

The system shall not assume that a person speaking near the device is authorised.

Sensitive actions may require additional identity or permission confirmation.

---

## 37. Voice Completion Checklist

Before completion verify:

- transcription quality tested
- Malayalam and Manglish behaviour tested
- uncertainty clarification works
- sensitive actions require confirmation
- privacy risks considered
- text fallback available
- channel-independent business logic preserved
- no unsupported accessibility claims made

---

# Part 6 — Cloudflare R2 Operational Profile

## 38. Purpose and Mission

Cloudflare R2 provides scalable object storage where approved.

Its mission is to store business files securely and cost-effectively while keeping metadata, permissions, ownership, and business meaning inside Smart Business.

R2 stores files. Smart Business owns the file records and business context.

---

## 39. Primary Responsibilities

R2 may store:

- receipts
- invoices
- uploaded business documents
- notebook images
- exports
- generated reports
- voice files where approved
- other approved merchant-owned objects

---

## 40. Storage Architecture Rules

Store:

- file metadata in Supabase
- object content in R2

Metadata should include where relevant:

- internal object identifier
- merchant or business identifier
- owner identifier
- content type
- original filename
- object key
- created timestamp
- file status
- processing status
- retention status

Public URLs shall not be used for private merchant files.

Use signed or controlled access where appropriate.

---

## 41. Security and Permission Rules

File access shall:

- respect merchant isolation
- respect role permissions
- use least privilege
- prevent cross-business access
- avoid embedding unrestricted credentials in clients
- log sensitive access where required

Storage credentials shall remain in secure server-side configuration.

---

## 42. File Lifecycle Rules

The system shall manage:

- upload
- validation
- processing
- status tracking
- access
- retention
- replacement where approved
- deletion where authorised
- recovery where practical

Failed uploads shall not create false completed records.

Database and storage state shall be reconciled to prevent:

- duplicate objects
- orphaned objects
- missing metadata
- stale links
- records that claim successful storage when upload failed

---

## 43. R2 Completion Checklist

Before completion verify:

- merchant isolation enforced
- metadata stored correctly
- object access controlled
- signed access tested where used
- failed upload handling verified
- duplicate prevention tested
- orphan cleanup strategy defined
- lifecycle and retention documented
- credentials protected
- migration and recovery implications considered

---

# Part 7 — Shared Platform Governance

## 44. Platform Ownership Matrix

| Capability | Primary Owner | Supporting Platforms |
|---|---|---|
| Product Truth | Founder / Mission Control | All platforms read only |
| Frontend Experience | Lovable | Supabase, OpenAI, WhatsApp |
| Database and Permissions | Supabase | Lovable, OpenAI, WhatsApp |
| WhatsApp Channel | WhatsApp Business Platform | Supabase, OpenAI, R2 |
| AI Reasoning and Language | OpenAI | Supabase, WhatsApp, Lovable |
| Voice Interaction | Voice AI | OpenAI, WhatsApp, Lovable |
| Object Storage | Cloudflare R2 | Supabase, WhatsApp, Lovable |
| Mission Coordination | Mission Control | All specialist rooms |
| Founder Decisions | Founder | Mission Control supports |

No supporting platform may silently assume primary ownership.

---

## 45. Cross-Platform Interaction Rules

Cross-platform workflows shall:

- use explicit contracts
- identify ownership at every step
- preserve merchant and permission boundaries
- avoid duplicate processing
- support idempotency where required
- preserve traceability
- avoid hidden provider-specific business rules
- define failure handling
- define recovery responsibility

Example:

WhatsApp receives message

↓

Smart Business identifies user and business

↓

OpenAI interprets intent

↓

Supabase validates permissions and stores approved result

↓

R2 stores files where required

↓

WhatsApp returns confirmation

No platform may bypass Smart Business identity, permissions, or Business Memory.

---

## 46. Failure Recovery and Vendor Continuity

Each platform integration shall document:

- failure modes
- retry behaviour
- timeout behaviour
- duplicate prevention
- rollback or compensation where relevant
- fallback path where appropriate
- monitoring and alerting
- ownership of recovery

Vendor continuity principles:

- business logic shall remain inside Smart Business
- merchant data shall remain exportable
- data formats should remain portable
- identifiers should remain internal to Smart Business
- provider credentials should be replaceable
- business workflows should survive provider migration
- merchant-facing behaviour should remain consistent

---

## 47. Controlled Evolution

This framework evolves only through:

- Founder approval
- Mission Control review
- approved governance updates
- proven implementation experience
- documented security, reliability, or continuity needs

Operational learning may improve this framework but may not silently redefine Product Truth or Lighthouse principles.

---

## 48. Supersession Rule

This file is the single operational profile authority for the platforms covered here and supersedes P01 through P06 as separate operational governance files.

The original P01 through P06 source files are retired from active governance use while remaining available through repository history for traceability and historical provenance.

Founder approval is recorded in this document's metadata.

---

## 49. Final Principle

Platforms serve Smart Business.

Smart Business serves merchants.

Technology remains the tool.

Human improvement remains the purpose.

Human decision ownership remains final.

---

END OF FOUNDER APPROVED — ACTIVE GOVERNANCE