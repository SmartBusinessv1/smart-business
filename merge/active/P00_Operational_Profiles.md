# P00_Operational_Profiles

## Metadata

- **Merge ID:** M003_Operational_Profiles
- **Status:** MERGED DRAFT — SELF-CONTAINED REVISION
- **Authority:** Founder and Mission Control
- **Primary Operational Authority:** Source 17 — Smart Business AI Development Operating Manual
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

Source 17 — Smart Business AI Development Operating Manual

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
- Smart Business AI Development Operating Manual
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

Its mission is to improve merchant clarity, capability, and peace of mind while preserving human ownership of decisions.

OpenAI provides intelligence. Smart Business owns the product. Humans own the decisions.

---

## 28. Primary Responsibilities

OpenAI may support:

- natural language understanding
- structured information extraction
- conversation management
- business insights
- Ask CFO
- document understanding
- voice interaction orchestration
- multilingual support
- function calling

Ask CFO is a clarity feature, not an authority.

---

## 29. Boundaries

OpenAI shall not:

- redefine Product Truth
- make financial decisions for merchants
- bypass permissions
- permanently store business records as the system of record
- invent facts
- replace human judgement
- embed hidden business logic in prompts
- claim actions succeeded without verified tool results

AI assists. Humans decide.

---

## 30. Prompt, Function Calling, and Memory Standards

Prompts shall:

- define the objective
- include relevant context
- specify constraints
- request structured outputs where useful
- minimize ambiguity
- avoid unnecessary complexity

Use function or tool calling for:

- database operations
- business actions
- integrations
- calculations
- workflow execution

Business Memory belongs to Smart Business.

OpenAI may use provided context but does not become the permanent system of record.

---

## 31. Model Selection and Security

Choose the smallest capable model that satisfies:

- quality
- latency
- reliability
- cost efficiency

Protect:

- API keys
- merchant information
- customer privacy
- confidential business data

No secret may be exposed in prompts, logs, client code, or user-visible output.

---

## 32. OpenAI Completion Checklist

Before completion verify:

- Product Truth respected
- human decision ownership preserved
- uncertainty handled explicitly
- structured outputs validated
- function calls verified
- no hallucinated facts
- no simulated actions
- permissions respected
- documentation updated where required

---

# Part 5 — Voice AI Operational Profile

## 33. Purpose and Mission

Voice AI enables natural voice interaction.

Its mission is to provide fast, natural, trustworthy voice experiences that improve accessibility and ease of use while preserving clarity, dignity, and peace of mind.

Voice AI makes Smart Business easier to use. Humans remain in control of every important decision.

---

## 34. Primary Responsibilities

Voice AI may support:

- speech synthesis
- speech recognition integration
- voice conversations
- voice guidance
- voice confirmations
- voice accessibility
- multilingual voice interaction
- hands-free business workflows

---

## 35. Boundaries and Channel Role

Voice AI shall not:

- redefine Product Truth
- replace text workflows
- bypass permissions
- make business decisions
- permanently store business records
- invent information
- expose sensitive information by voice

Voice is another interaction channel.

It complements existing workflows and shall not create a separate business logic path.

---

## 36. Language and Experience Standards

Support:

- English
- Malayalam
- Manglish
- future approved languages

Speech shall be natural, respectful, and easy to understand.

Voice experiences shall support:

- fast response
- natural pacing
- clear pronunciation
- interruptible conversations
- confirmation before critical actions
- error recovery
- repetition of critical information before execution

Voice shall improve accessibility without reducing text-based functionality.

---

## 37. Voice Security and Completion Checklist

Protect:

- voice recordings
- merchant privacy
- customer privacy
- access credentials

Before completion verify:

- Product Truth respected
- voice quality verified
- multilingual behaviour tested
- critical confirmations implemented
- accessibility considered
- sensitive information is not exposed unnecessarily
- error recovery tested
- documentation updated

---

# Part 6 — Cloudflare R2 Operational Profile

## 38. Purpose and Mission

Cloudflare R2 provides secure, scalable object storage for business assets.

Its mission is to provide reliable, secure, and cost-effective storage for merchant documents and media while integrating with Smart Business.

Cloudflare R2 safeguards Smart Business files. Smart Business remains the system of record.

---

## 39. Primary Responsibilities

Cloudflare R2 may store:

- receipt images
- invoice PDFs
- business documents
- product images
- audio files
- export files
- future approved media

---

## 40. Boundaries

Cloudflare R2 shall not:

- store business metadata as the system of record
- implement business rules
- manage application permissions
- redefine Product Truth
- replace the database

Metadata belongs in Smart Business.

Files belong in object storage.

---

## 41. Storage, Security, and Integration Rules

Maintain:

- organized bucket structure
- predictable object naming
- version-aware uploads where required
- secure access
- lifecycle management
- traceability

Protect:

- merchant documents
- customer files
- signed URLs
- access credentials
- bucket permissions

Private objects shall not be exposed publicly unless explicitly approved.

Integrate with:

- Supabase metadata
- WhatsApp media flows
- AI document processing
- export services

Avoid duplicate uploads, orphaned files, broken references, and untraceable deletion.

---

## 42. File Management and Completion Checklist

Support approved operations for:

- upload
- download
- replace
- archive
- delete when permitted

Before completion verify:

- Product Truth respected
- metadata linked correctly
- storage secured
- signed URLs verified
- duplicate uploads avoided
- orphan handling addressed
- file references preserved
- lifecycle behaviour tested
- documentation updated

---

# Part 7 — Cross-Platform Coordination

## 43. Ownership Matrix

The following ownership boundaries apply:

- **Lovable:** frontend experience
- **Supabase:** backend data, identity, permissions, and secure services
- **WhatsApp:** conversation transport and delivery
- **OpenAI:** reasoning and language intelligence
- **Voice AI:** voice interaction layer
- **Cloudflare R2:** object storage
- **Smart Business:** Product Truth, business logic, Business Memory, permissions, workflow ownership, and merchant experience
- **Mission Control:** coordination, authority routing, acceptance control, and escalation
- **Founder:** final governance and release authority

No provider may absorb the ownership of another layer without explicit governance approval.

---

## 44. End-to-End Interaction Rules

A typical approved flow may be:

User Channel

↓

Identity and Permission Check

↓

Business Logic

↓

AI Assistance where required

↓

Database or Tool Action

↓

Storage Action where required

↓

Confirmed Result

↓

User Response

Each action shall remain traceable to the responsible platform.

Critical actions require confirmation and verified execution results.

---

## 45. Failure and Recovery Rules

Each platform integration shall define:

- expected failure modes
- safe retry behaviour
- idempotency where applicable
- user-visible error handling
- logging and traceability
- rollback or recovery path
- service degradation behaviour
- escalation conditions

A provider outage shall not silently corrupt merchant data or create duplicate business actions.

Channel failure shall not redefine business state.

---

## 46. Vendor Continuity

Smart Business shall avoid unnecessary provider lock-in.

Provider-specific adapters should remain separable from core business logic.

Where practical:

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

After Founder approval, this file becomes the single operational profile authority for the platforms covered here and supersedes P01 through P06 as separate operational governance files.

The original P01 through P06 source files may then be retired from active governance use while remaining available through repository history.

Until Founder approval is recorded, this file remains a merged draft.

---

## 49. Final Principle

Platforms serve Smart Business.

Smart Business serves merchants.

Technology remains the tool.

Human improvement remains the purpose.

Human decision ownership remains final.

---

END OF MERGED DRAFT
