# SB-GOV-COMPARE-1.0

## Project Source vs Active Governance Replacement Audit

Mission ID: SB-GOV-COMPARE-1.0
Status: Audit complete — Mission Control and Founder review required
Audit date: 2026-07-30
Repository: SmartBusinessv1/smart-business
Branch reviewed: `main`
Commit reviewed: `e8be958c5fccf4bad78022ed3ada8290fbf5f106`

## 1. Executive Decision

**Primary conclusion: Decision C — Conditional Replacement After Material Repairs.**

The consolidated active set is directionally stronger and, at the level of
governance substance, preserves the material content of the 25 project-source
files. Seven direct successors are byte-for-byte copies. Four other direct
successors differ only by Markdown presentation. The combined Source 12, Source
17, and P00 documents retain the principal implementation, acceptance, pilot,
AI-operations, continuity, recovery, and platform-boundary provisions and add
useful operational controls.

The active set is nevertheless **not currently a safe independent
replacement**. Its authority state is internally contradictory:

- `README.md` says Source 12, Source 17, and P00 are approved merged
  frameworks and directs current work to them
  (`merge/active/README.md:108-116`).
- Source 12 is a merged draft designed to supersede Sources 12-14 only after
  Founder approval (`merge/active/12_Product_Execution_and_Release_Framework.md:3-13`,
  `:1333-1341`).
- Source 17 requires Founder review and explicitly says it shall not replace
  approved sources until explicit approval
  (`merge/active/17_AI_Operations_Manual.md:3-12`, `:1314-1322`).
- P00 remains a merged draft until Founder approval
  (`merge/active/P00_Operational_Profiles.md:3-15`, `:953-959`).
- Founder-approved Source 15 already treats consolidated Source 12 as an
  approved governing source (`merge/active/15_Governance_Mission_Control_Activation_Template.md:27-30`,
  `:63-72`).

That conflict affects authority, mission inheritance, release governance, and
the retirement status of approved originals. It must be resolved by recorded
Founder approval or by restoring the approved original authorities to the
active chain. Until then, the 25 project-source files must remain protected.

## 2. Audit Scope

### Source Set A — Original Project Source

Directory: `Project Source file/`

- 25 Markdown files
- Added by commit
  `e8be958c5fccf4bad78022ed3ada8290fbf5f106`
- Treated as the pre-consolidation reference set

### Source Set B — Consolidated Active Governance

Directory: `merge/active/`

- 17 governance Markdown files
- 1 supporting `README.md`
- 18 files reviewed

### Total review scope

- 43 files
- No source file omitted
- No active file omitted
- No governance file modified

## 3. Repository State Verified

At audit start:

```text
Branch: main
HEAD: e8be958c5fccf4bad78022ed3ada8290fbf5f106
Tracking: main...origin/main
Working tree: clean
Project-source Markdown count: 25
Active Markdown count: 18 (17 governance + README)
Unreadable files: 0
```

The project-source directory matched the exact set introduced by the reviewed
commit. The active directory contained the expected set. No stop condition was
triggered.

## 4. Methodology

The audit used:

1. Repository inventory and commit verification.
2. Exact byte comparison for direct source-successor pairs.
3. Word-level diffs for changed direct successors.
4. Heading and section inventories across both sets.
5. Provision searches for mandatory product, route, security, AI, release,
   customer, brand, continuity, and authority controls.
6. Manual line review of every consolidated source, its source inputs,
   metadata, authority chain, supersession clause, and README representation.
7. Conservative classification: uncertain approval or dependency state was
   not classified as preserved operational authority.

Direct comparison established:

- Sources 03, 04, 05, 06, 07, 08, and 10 are byte-for-byte identical to their
  active successors.
- Sources 00 and 01 preserve identical wording; active copies lack the heading
  markers present in the project-source copies.
- Source 02 differs by removal of unnecessary Markdown escapes, not governance
  wording.
- Sources 09, 11, and 15 change references to the consolidated Source 12.
- Source 16A differs only in escaped underscores and terminal formatting.
- Sources 12-14, 17-18, and P01-P06 were reviewed against their combined
  replacements section by section and provision by provision.

## 5. Primary Findings

### 5.1 Substantive coverage is strong

No material Lighthouse principle, locked route, product boundary, merchant
permission rule, security boundary, AI-human authority rule, customer
experience rule, or brand constraint was found absent from the active set.

### 5.2 Consolidation improves operational discipline

Active Source 12 adds a coherent implementation-to-release lifecycle,
environment separation, evidence traceability, rollback expectations, release
blocking conditions, post-release checks, and explicit Founder authorization
(`merge/active/12_Product_Execution_and_Release_Framework.md:53-91`,
`:535-561`, `:1215-1292`).

Active Source 17 adds capability classes, permission controls, connector and
repository governance, auditability, reversibility, recovery, and uncertainty
escalation (`merge/active/17_AI_Operations_Manual.md:76-215`, `:255-482`,
`:1168-1269`).

P00 adds shared platform governance, an ownership matrix, cross-platform
interaction rules, failure recovery, and vendor continuity
(`merge/active/P00_Operational_Profiles.md:87-198`, `:844-949`).

### 5.3 Approval state prevents replacement

The strongest new consolidated documents are still self-declared drafts.
README and approved Source 15 treat them as active approved authorities. The
active set therefore cannot tell a future room which authority is binding
without external knowledge.

### 5.4 Roadmap references are operationally stale

The Roadmap authority chain now names consolidated Source 12
(`merge/active/09_Master_Roadmap_Command.md:13-27`), but its feature workflow
still instructs rooms to check the retired Implementation Blueprint,
Acceptance Matrix, and Pilot Readiness Audit
(`merge/active/09_Master_Roadmap_Command.md:45-109`, `:350-370`).

### 5.5 A named constitutional dependency is absent

Source 17 places a “Smart Business Constitution” in its authority chain and
mandatory reading (`merge/active/17_AI_Operations_Manual.md:32-70`,
`:526-544`). Source 16A says it guides that Constitution
(`merge/active/16A_Smart_Business_Constitution_Design_Principles.md:31-45`).
No Smart Business Constitution file exists in either reviewed directory.

## 6. Governance Coverage Summary

| Mandatory area | Result | Evidence and assessment |
|---|---|---|
| Lighthouse principles | Fully Preserved | Human service, technology as tool, earned value, trust, leadership, and future stewardship remain in active Source 00 (`00:7-23`, `:43-52`, `:75-96`, `:158-198`). |
| Dignity, clarity, peace of mind | Preserved and Strengthened | Sources 00, 01, 06, 07, and 08 retain these promises (`00:11-16`, `:61-73`; `01:18-31`, `:289-299`; `06:28-43`; `07:35-57`; `08:68-95`). |
| Existing user habits | Fully Preserved | Notebook respect remains explicit (`01:80-89`; `07:35-57`, `:552-576`). |
| Product purpose and target | Fully Preserved | Kerala brick-and-mortar merchant focus remains (`01:33-59`, `:91-107`; `11:21-33`). |
| WhatsApp, text, voice, photo | Fully Preserved | Source 01 and specialist frameworks preserve multimodal, WhatsApp-first operation (`01:109-124`; `04:109-130`; `11:513-551`). |
| Ask CFO boundaries | Fully Preserved | Owner-only/read-only clarity and no destructive actions remain (`01:201-212`; `04:302-321`; `05:222-238`; `11:275-301`). |
| Employee permissions | Preserved and Strengthened | Employee limits and owner-intelligence protection are explicit (`11:61-78`, `:209-216`, `:745-779`). |
| POS boundary | Fully Preserved | Standard bridge allowed; custom core modification rejected; extension layer used (`02:630-646`; `P00:467-484`; `README:92-93`). |
| Locked routing | Fully Preserved | Domains and all required public, footer, internal, and deprecated routes remain (`01:126-152`; `README:82-87`; `P00:269-299`). |
| Supabase and multi-tenancy | Fully Preserved | Supabase, tenant privacy, tables, RLS, and ownership remain (`01:183-199`; `02:18-60`, `:1024-1046`; `P00:319-439`). |
| Security and business-alert separation | Fully Preserved | Security quarantine and business observations remain separate (`01:184-199`; `02:648-710`). |
| Storage and data ownership | Preserved and Strengthened | Metadata/file separation, signed URLs, and merchant ownership remain (`01:273-280`; `02:1114-1134`; `P00:407-423`, `:746-838`). |
| AI Assistant, Not AI Judge | Preserved and Strengthened | Direct specialist source is identical; Source 17 adds capability/authority and uncertainty controls (`05:29-51`; `17:78-93`, `:201-215`, `:453-482`). |
| Hallucination and confidence | Fully Preserved | Low-confidence clarification and no invention remain (`05:77-98`; `17:467-482`; `P00:638-650`). |
| Employee-related AI language | Fully Preserved | No accusation and human context remain (`05:258-290`; `06:275-318`). |
| Execution, acceptance, pilot | Preserved and Strengthened | Active Source 12 retains all three source roles and adds a single controlled lifecycle (`12:17-49`, `:569-861`, `:863-1228`). |
| Release, rollback, evidence | Preserved and Strengthened | Explicit release blocks, rollback, post-release validation, and Founder approval are added (`12:1230-1315`). |
| Mission Control boundaries | Preserved and Strengthened | Mission authorization, inheritance, evidence, risk, and handover remain (`15:39-223`; `17:653-798`). |
| Customer support and escalation | Fully Preserved | FAQ-first support, privacy, sensitive topics, and escalation remain in exact successor Source 06 (`06:28-83`, `:371-386`). |
| Onboarding and conversion | Fully Preserved | `/start`, controlled batches, dignity, trust, language, and first-day experience remain in exact Source 07 successor (`07:35-104`, `:142-405`, `:536-579`). |
| Brand and growth | Fully Preserved | Positioning, truthful product limits, Kerala trust, privacy, and controlled growth remain in exact Source 08 successor (`08:68-136`, `:223-311`, `:381-457`). |
| Continuity and handover | Preserved and Strengthened | Source 18 content appears in Source 17 Parts D-E; recovery is added in Part F (`17:894-1269`). |
| Repository-first governance | Preserved and Strengthened | Source 17 adds repository communication, Git responsibility, evidence, and recovery (`17:800-892`, `:1205-1216`). |

## 7. 25-File Replacement Matrix

| Original File | Original Purpose | Proposed Active Replacement | Coverage Status | Content Preserved | Content Strengthened | Content Reduced or Lost | Conflicts | Historical Value | Recommended Action | Confidence | Evidence |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `00_Lighthouse_Constitution (2).md` | Lighthouse purpose, human service, trust, leadership, creation | `00_Lighthouse_Constitution.md` | Fully Preserved | Every governance word and sequence | None substantive | Active Markdown heading markers are absent | None substantive | Constitutional provenance and formatted source | Repair active headings; archive original permanently | High | Original `:1-220`; active `:1-220`; word diff shows marker-only change |
| `01_Smart_Business_Master_System_Manifesto (1).md` | Organization identity, product mission, routes, AI, architecture, pricing, trust | `01_Smart_Business_Master_System_Manifesto.md` | Fully Preserved | Every governance word and section | None substantive | Active Markdown heading markers are absent | None substantive | Product-decision provenance and locked-route evidence | Repair active headings; archive original permanently | High | Original `:1-299`; active `:1-299`; marker-only word diff |
| `02_Supabase_Architecture_Framework.md` | Supabase schema, RLS, storage, automation, alerts, POS | `02_Supabase_Architecture_Framework.md` | Preserved and Strengthened | All schema, privacy, RLS, lifecycle, and POS provisions | Intended headings/lists render more clearly | No wording loss found | None | Architecture provenance and schema rationale | Replace after active authority approval; archive original | High | Original `:18-1241`; active `:18-1240`; word diff is escape removal |
| `03_Lovable_Build_Framework (1).md` | Frontend, routes, dashboard, permissions, static IDs | `03_Lovable_Build_Framework.md` | Fully Preserved | Entire file | None | None | None | Exact approved frontend baseline | Replace; retain historical commit | High | Byte-for-byte comparison; active `:14-294` |
| `04_API_WhatsApp_OpenAI_Framework.md` | Webhooks, identity, multimodal input, permissions, Ask CFO, escalation | `04_API_WhatsApp_OpenAI_Framework.md` | Fully Preserved | Entire file | None | None | None | Exact channel/API baseline | Replace; retain historical commit | High | Byte-for-byte comparison; active `:13-385` |
| `05_AI_Behaviour_and_Model_Training_Framework.md` | AI behaviour, confidence, voice, role limits, human context | `05_AI_Behaviour_and_Model_Training_Framework.md` | Fully Preserved | Entire file | Source 17 adds operational AI controls | None | None | Exact product-facing AI-behaviour baseline | Retain active alongside approved Source 17 | High | Byte-for-byte comparison; active `:13-338` |
| `06_Support_and_Customer_Experience_Framework_UPDATED (1).md` | Support, merchant dignity, privacy, FAQ, escalation | `06_Support_and_Customer_Experience_Framework.md` | Fully Preserved | Entire file | None | None | None | Customer-care and trust evidence | Replace; retain historical commit | High | Byte-for-byte comparison; active `:13-416` |
| `07_Conversion_Onboarding_Framework (1).md` | `/start`, conversion, quiz, language, trust, activation | `07_Conversion_Onboarding_Framework.md` | Fully Preserved | Entire file | None | None | None | Onboarding decision history | Replace; retain historical commit | High | Byte-for-byte comparison; active `:14-595` |
| `08_Smart_Business_Brand_and_Growth_Framework_PATCHED (3).md` | Brand, positioning, language, privacy, Kerala trust, growth | `08_Smart_Business_Brand_and_Growth_Framework.md` | Fully Preserved | Entire file | None | None | None | Brand provenance and market rationale | Replace; retain historical commit | High | Byte-for-byte comparison; active `:13-471` |
| `09_Master_Roadmap_Command_v3 (2).md` | Execution phases, gates, evidence, specialist routing | `09_Master_Roadmap_Command.md` | Partially Preserved | All roadmap provisions and V3 patches | Authority chain points to combined Source 12 | Operational steps still cite old 12/13/14 names | Version says v2 while content ends V3 | Execution history and phase rationale | Repair active references/version; archive original | High | Original `:13-31`, `:49-109`, `:705-722`; active `:13-27`, `:45-109`, `:350-370`, `:475-718` |
| `10_Smart_Business_Environment_Activation_Manual_UPDATED (1).md` | External environment activation and role separation | `10_Smart_Business_Environment_Activation_Manual.md` | Fully Preserved | Entire file | None | None | None | Environment-activation evidence | Replace; retain historical commit | High | Byte-for-byte comparison; active `:1-336` |
| `11_Smart_Business_Product_Truth_Map_v2.1 (2).md` | Product authority, roles, features, permissions, boundaries | `11_Smart_Business_Product_Truth_Map.md` | Preserved and Strengthened | Product provisions and boundaries | References unified Source 12 | No substantive loss found | Depends operationally on unapproved Source 12 | Product-truth provenance and Founder decisions | Retain active; do not retire original until Source 12 approved | High | Original `:1-956`; active `:1-956`; word diff changes Source 12 references only |
| `12_Smart_Business_Feature_Implementation_Blueprint_v2.1 (2).md` | Implementation architecture and builder routing | `12_Product_Execution_and_Release_Framework.md` Part 1 | Preserved and Strengthened | Conversation, channel independence, auth, stewardship, continuity, scalability | Security, environments, rollback, evidence | No material provision found missing | Replacement conditional on Founder approval | Founder Review Edition and implementation provenance | Founder approve combined Source 12; archive original afterward | High | Original `:5-197`; active `:93-567`, `:1333-1341` |
| `13_Smart_Business_Feature_Acceptance_Matrix_v2.1 (2).md` | Feature completion and acceptance controls | `12_Product_Execution_and_Release_Framework.md` Part 2 | Preserved and Strengthened | Performance, language, documents, export, daily intelligence, HR, support, security, subscription, conversation | Traceability and acceptance-failure workflow | No material provision found missing | Replacement conditional on Founder approval | Acceptance-history evidence | Founder approve combined Source 12; archive original afterward | High | Original `:3-348`; active `:569-861`, `:1333-1341` |
| `14_Smart_Business_Pilot_Readiness_Audit_v2.1 (2).md` | Pilot gate, audits, Founder testing | `12_Product_Execution_and_Release_Framework.md` Parts 3-4 | Preserved and Strengthened | Pilot unlock, workflow audits, security, performance, Founder testing | Release authorization, blocking, rollback, post-release validation | No material provision found missing | Replacement conditional on Founder approval | Pilot-approval provenance | Founder approve combined Source 12; archive original afterward | High | Original `:5-155`; active `:863-1373` |
| `15_Governance_Mission_Control_Activation_Template_v2.1_COMPLETE (1).md` | Mission authorization, inheritance, evidence, handover | `15_Governance_Mission_Control_Activation_Template.md` | Changed | Mission template and controls preserved | Three old source references consolidated | None if Source 12 is approved | Active Founder-approved file calls draft Source 12 approved | Approval and mission-control provenance | Repair authority timing/reference after Founder decision | High | Original `:27-72`; active `:27-72`, `:225-250` |
| `16A_Smart_Business_Constitution_Design_Principles (2).md` | Constitutional design and evolution | `16A_Smart_Business_Constitution_Design_Principles.md` | Fully Preserved | Entire substantive content | Cleaner filename rendering | No content loss | References absent Smart Business Constitution | Constitutional rationale must remain archived | Retain active; resolve missing Constitution dependency | High | Original `:1-241`; active `:1-242` |
| `17_Smart_Business_AI_Development_Operating_Manual (2).md` | AI development rules and Mission Control relationship | `17_AI_Operations_Manual.md` Part B | Preserved and Strengthened | AI role, loading, build, testing, security, completion | Capability, connector, repository, audit, recovery governance | No material provision found missing | Combined replacement remains draft | Founder-approved operational-source provenance | Retain original as binding until Founder approves Source 17 | High | Original `:3-430`; active `:513-798`, `:1314-1322` |
| `18_Smart_Business_Project_Continuity_and_Handover_Framework (1).md` | Handover, state, risk, assumptions, continuity | `17_AI_Operations_Manual.md` Parts D-F | Preserved and Strengthened | Handover triggers/package, decisions, state, risk, context | Explicit continuity and recovery sequences | No material provision found missing | Combined replacement remains draft | Founder-approved continuity provenance | Retain original as binding until Founder approves Source 17 | High | Original `:3-228`; active `:894-1269`, `:1314-1322` |
| `P01_Lovable_Operational_Profile (2).md` | Lovable responsibilities, UI, routes, PWA | `P00_Operational_Profiles.md` Part 1 | Consolidated Correctly | UI, boundaries, routes, completion controls | Shared governance and cross-platform ownership | Repetition removed; no material loss found | P00 remains draft | Founder-approved platform-profile provenance | Retain original until P00 approval | High | Original `:3-210`; active `:200-317`, `:953-959` |
| `P02_Supabase_Operational_Profile (1).md` | Database, auth, RLS, storage, migration, performance | `P00_Operational_Profiles.md` Part 2 | Consolidated Correctly | Database, RLS, migration, performance, completion | Cross-platform and recovery controls | Repetition removed; no material loss found | P00 remains draft | Founder-approved backend-profile provenance | Retain original until P00 approval | High | Original `:3-250`; active `:319-439`, `:953-959` |
| `P03_WhatsApp_API_Operational_Profile (1).md` | WhatsApp, webhooks, templates, media, security | `P00_Operational_Profiles.md` Part 3 | Consolidated Correctly | Webhook, duplicate protection, templates, media, security | Channel-independence and interaction sequence | Repetition removed; no material loss found | P00 remains draft | Founder-approved channel-profile provenance | Retain original until P00 approval | High | Original `:3-206`; active `:441-544`, `:953-959` |
| `P04_OpenAI_Operational_Profile (1).md` | OpenAI prompts, functions, memory, models, security | `P00_Operational_Profiles.md` Part 4 | Consolidated Correctly | Prompt/function/memory/model/security controls | Shared AI rules and evidence controls | Repetition removed; no material loss found | P00 depends on draft Source 17 | Founder-approved model-profile provenance | Retain original until P00 and Source 17 approval | High | Original `:3-243`; active `:546-652`, `:953-959` |
| `P05_Voice_AI_Operational_Profile (1).md` | Voice language, accessibility, experience, security | `P00_Operational_Profiles.md` Part 5 | Consolidated Correctly | Voice role, language, accessibility, privacy, confirmation | Cross-channel continuity | Repetition removed; no material loss found | P00 remains draft | Founder-approved voice-profile provenance | Retain original until P00 approval | High | Original `:3-226`; active `:654-744`, `:953-959` |
| `P06_Cloudflare_R2_Operational_Profile (1).md` | Object storage, security, integration, file lifecycle | `P00_Operational_Profiles.md` Part 6 | Consolidated Correctly | Storage, metadata separation, signed URLs, lifecycle, duplicate/orphan protection | Vendor continuity and ownership matrix | Repetition removed; no material loss found | P00 remains draft | Founder-approved storage-profile provenance | Retain original until P00 approval | High | Original `:3-231`; active `:746-842`, `:923-959` |

## 8. 18-File Active-Set Validation Matrix

| Active File | Sources Replaced | Governance Role | Coverage Quality | Internal Consistency | Stale References | Draft or Status Concern | Dependency on Original Files | Recommended Repair | Replacement Readiness |
|---|---|---|---|---|---|---|---|---|---|
| `00_Lighthouse_Constitution.md` | 00 | Highest Lighthouse principles | Complete | Pass substantively | None | No explicit metadata; headings absent | None for meaning | Restore Markdown heading hierarchy | Ready After Repair |
| `01_Smart_Business_Master_System_Manifesto.md` | 01 | Product/organization manifesto and locked decisions | Complete | Pass substantively | None | Headings absent | None for meaning | Restore Markdown heading hierarchy | Ready After Repair |
| `02_Supabase_Architecture_Framework.md` | 02 | Database and backend architecture | Complete | Pass | None material | No explicit approval metadata | None | Add controlled metadata only if Founder authorizes | Ready |
| `03_Lovable_Build_Framework.md` | 03 | Frontend and UX boundaries | Complete | Pass | None | No explicit approval metadata | None | None substantive | Ready |
| `04_API_WhatsApp_OpenAI_Framework.md` | 04 | Channel/API communication | Complete | Pass | None | No explicit approval metadata | None | None substantive | Ready |
| `05_AI_Behaviour_and_Model_Training_Framework.md` | 05 | Product-facing AI behaviour | Complete | Pass | None | No explicit approval metadata | None | None substantive | Ready |
| `06_Support_and_Customer_Experience_Framework.md` | 06 | Support and customer trust | Complete | Pass | None | No explicit approval metadata | None | None substantive | Ready |
| `07_Conversion_Onboarding_Framework.md` | 07 | `/start` onboarding and conversion | Complete | Pass | `/survey` appears only as deprecated route | No explicit approval metadata | None | None substantive | Ready |
| `08_Smart_Business_Brand_and_Growth_Framework.md` | 08 | Brand, positioning, language, growth | Complete | Pass | None | No explicit approval metadata | None | None substantive | Ready |
| `09_Master_Roadmap_Command.md` | 09 plus Source 12 reference update | Execution order and phase control | Partial | Findings | Old 12/13/14 operational filenames at `:69`, `:105`, `:364` | Filename/content report v2 and V3 simultaneously | Needs old sources to interpret stale workflow while Source 12 is draft | Replace stale references and establish one version | Ready After Repair |
| `10_Smart_Business_Environment_Activation_Manual.md` | 10 | External environment activation | Complete | Pass | None | No explicit approval metadata | None | None substantive | Ready |
| `11_Smart_Business_Product_Truth_Map.md` | 11 | Official product truth | Complete | Pass | None material | References combined Source 12 as execution authority | Operational dependency on draft Source 12 | Approve Source 12 or retain old 12-14 chain | Ready After Repair |
| `12_Product_Execution_and_Release_Framework.md` | 12, 13, 14 | Unified build, acceptance, pilot, release | Complete | Pass internally | Historical source names are valid provenance | Merged draft; replacement conditional on Founder approval | Yes, until approval originals remain governing evidence | Founder review, approval record, status transition | Not Ready |
| `15_Governance_Mission_Control_Activation_Template.md` | 15 | Mission activation and governance | Complete | Finding: authority timing | None beyond Source 12 replacement | Founder Approved | Relies on draft Source 12 while calling it approved | Align with actual Source 12 status | Ready After Repair |
| `16A_Smart_Business_Constitution_Design_Principles.md` | 16A | Constitutional design | Complete | Finding: missing referenced authority | “Smart Business Constitution” has no file | Founder Approved | Depends on absent Constitution | Identify/create approved Constitution or clarify intended equivalent | Ready After Repair |
| `17_AI_Operations_Manual.md` | 17, 18, AI capability draft | AI capability, development, repository, continuity, recovery | Complete | Pass internally, external authority gap | Smart Business Constitution absent | Merged draft; Founder review required | Yes: approved Sources 17 and 18 remain authoritative | Founder review, approval record, status transition | Not Ready |
| `P00_Operational_Profiles.md` | P01-P06 | Unified platform responsibilities | Complete | Finding at `:79` | Treats merged Source 12 as approved | Merged draft until Founder approval | Yes: approved P01-P06 and draft Source 17 | Approve Source 17 and P00; correct Source 12 status statement | Not Ready |
| `README.md` | Navigation only | Index, reading order, locked-decision summary | Partial | Material findings | Says current work must use draft merged sources | Incorrectly calls drafts approved | Conceals need for originals pending approval | Correct status, authority, reading order, and dependency disclosures | Not Ready |

## 9. Critical and High Findings

### Finding ID: SB-GOV-001

**Severity:** Critical
**Original File:** Sources 12-14, 17-18, P01-P06
**Original Section:** Respective source authorities and approved metadata
**Original Provision:** Existing sources remain the available pre-consolidation
authorities; Sources 17, 18, and P01-P06 explicitly state Founder-approved
status.
**Active File:** `README.md`; Sources 12, 17, P00
**Active Section:** README “Source consolidation note”; consolidated metadata
and supersession clauses
**Current Provision:** README calls the merged files approved and directs current
operations to them, while each merged file remains a draft or conditions
supersession on Founder approval.
**Classification:** Conflicting
**Why It Matters:** A future room can treat unapproved drafts as binding,
retire approved originals, and execute release or repository authority without
the required Founder decision. This directly compromises governance authority.
**Recommended Repair:** Record Founder decisions for Source 12, Source 17, and
P00 individually. Until approval, label them non-binding drafts, retain
originals in the active authority chain, and correct README.
**Founder Decision Required:** YES

Evidence:

- `merge/active/README.md:108-116`
- `merge/active/12_Product_Execution_and_Release_Framework.md:3-13`,
  `:1333-1341`
- `merge/active/17_AI_Operations_Manual.md:3-12`, `:1314-1322`
- `merge/active/P00_Operational_Profiles.md:3-15`, `:953-959`
- `Project Source file/17_Smart_Business_AI_Development_Operating_Manual (2).md:3-10`
- `Project Source file/18_Smart_Business_Project_Continuity_and_Handover_Framework (1).md:3-10`
- each P01-P06 source `:3-10`

### Finding ID: SB-GOV-002

**Severity:** High
**Original File:** `15_Governance_Mission_Control_Activation_Template_v2.1_COMPLETE (1).md`
**Original Section:** Purpose; Source Synchronization Check
**Original Provision:** Specialist missions inherit the separate implementation,
acceptance, and pilot authorities.
**Active File:** `15_Governance_Mission_Control_Activation_Template.md`
**Active Section:** Purpose; Source Synchronization Check
**Current Provision:** Founder-approved Source 15 requires the consolidated
Product Execution and Release Framework even though that framework is still a
draft.
**Classification:** Conflicting
**Why It Matters:** Mission authorization can inherit an unapproved authority
and bypass the original approved controls.
**Recommended Repair:** Either approve Source 12 first or make Source 15
conditional: use consolidated Source 12 only after recorded approval; otherwise
use Sources 12-14.
**Founder Decision Required:** YES

Evidence:

- Original `:27-72`
- Active `:27-30`, `:63-72`
- Active Source 12 `:3-13`

### Finding ID: SB-GOV-003

**Severity:** High
**Original File:** `09_Master_Roadmap_Command_v3 (2).md`
**Original Section:** Core Authority Chain; Feature Governance Rule; Pilot Gate
**Original Provision:** Operational steps name Sources 12, 13, and 14
individually.
**Active File:** `09_Master_Roadmap_Command.md`
**Active Section:** Same
**Current Provision:** Authority chain uses consolidated Source 12, while
execution steps still direct rooms to legacy filenames.
**Classification:** Conflicting
**Why It Matters:** A future room cannot know whether to use the draft combined
framework or the approved originals. The conflict affects feature
implementation, acceptance, and pilot release.
**Recommended Repair:** After the Source 12 Founder decision, replace
operational references consistently or restore the original chain.
**Founder Decision Required:** YES

Evidence:

- Active `:13-27`, `:45-109`, `:350-370`
- Original `:13-31`, `:49-109`

### Finding ID: SB-GOV-004

**Severity:** High
**Original File:** Sources 17, 18, P01-P06
**Original Section:** Metadata and authority chains
**Original Provision:** These are Founder-approved operational sources.
**Active File:** Source 17 and P00
**Active Section:** Metadata; Supersession Rule
**Current Provision:** Both combined replacements remain drafts; P00 also
depends on draft Source 17 and calls Source 12 approved at `P00:79`.
**Classification:** Unclear / Conflicting
**Why It Matters:** Operational responsibility for connectors, Git,
Supabase, WhatsApp, OpenAI, voice, and storage cannot be conclusively derived
from the proposed replacement set without the originals.
**Recommended Repair:** Founder review and approval in dependency order:
Source 12, Source 17, then P00. Preserve approved originals until each
supersession is recorded.
**Founder Decision Required:** YES

Evidence:

- Original Source 17 `:3-10`
- Original Source 18 `:3-10`
- Original P01-P06 `:3-10`
- Active Source 17 `:3-12`, `:1314-1322`
- P00 `:3-15`, `:68-81`, `:953-959`

### Finding ID: SB-GOV-005

**Severity:** High
**Original File:** Source 17 and Source 16A
**Original Section:** Authority Chain; Authority
**Original Provision:** Both refer to a Smart Business Constitution.
**Active File:** Source 17, Source 16A, README
**Active Section:** Authority Chain; Mandatory Governance Loading;
Constitutional Authority
**Current Provision:** The Smart Business Constitution is a required authority,
but no corresponding file exists in either reviewed set and README does not
identify an equivalent.
**Classification:** Missing / Unclear
**Why It Matters:** A mandatory authority cannot be loaded or audited. Future AI
rooms must guess whether Source 01, Source 11, Source 16A, or an external
document is intended.
**Recommended Repair:** Founder must identify the approved Constitution,
designate an existing file as its equivalent, or explicitly remove/defer the
dependency.
**Founder Decision Required:** YES

Evidence:

- `merge/active/17_AI_Operations_Manual.md:32-70`, `:526-544`
- `merge/active/16A_Smart_Business_Constitution_Design_Principles.md:19-45`
- `merge/active/README.md:47-48`

## 10. Medium and Low Findings

### Finding ID: SB-GOV-006

**Severity:** Medium
**Original File:** `09_Master_Roadmap_Command_v3 (2).md`
**Original Section:** Title/version; V3 patches
**Original Provision:** File name implies V3 while internal title/version says
v2 and ending says V3.
**Active File:** `09_Master_Roadmap_Command.md`
**Active Section:** Title/version; V3 Final Vision Patches
**Current Provision:** Active file still says
`09_Master_Roadmap_Command_v2.md`, `Version: v2`, and `END OF ROADMAP V3`.
**Classification:** Unclear
**Why It Matters:** Version evidence and supersession history are ambiguous.
**Recommended Repair:** Record one approved version and explain V2-to-V3
inheritance in metadata.
**Founder Decision Required:** NO, if repository history already records the
approved version; otherwise YES.

Evidence: active `:1-9`, `:475-478`, `:718`; original `:1-9`, `:722`.

### Finding ID: SB-GOV-007

**Severity:** Medium
**Original File:** All
**Original Section:** Authority relationships
**Original Provision:** Multiple files define overlapping authority chains.
**Active File:** README, Roadmap, Source 17, P00
**Active Section:** Reading order and authority chains
**Current Provision:** README order places specialist Sources 02-08 before
Roadmap, Environment, and Product Truth, while Roadmap and Source 17 express
different chains.
**Classification:** Unclear
**Why It Matters:** “Reading order” can be mistaken for authority precedence.
**Recommended Repair:** Add one canonical precedence table and distinguish
authority order from task-specific reading order.
**Founder Decision Required:** YES

Evidence:

- README `:19-54`
- Roadmap `:13-27`
- Source 17 `:32-72`
- P00 `:38-64`

### Finding ID: SB-GOV-008

**Severity:** Low
**Original File:** Sources 00 and 01
**Original Section:** All visible titles
**Original Provision:** Project-source copies contain a valid Markdown heading
hierarchy.
**Active File:** Sources 00 and 01
**Active Section:** All visible titles
**Current Provision:** Words are preserved, but headings render as plain text.
**Classification:** Partially Preserved operational usability
**Why It Matters:** Navigation and machine parsing are weaker, although meaning
is unchanged.
**Recommended Repair:** Apply the already validated heading markers from the
project-source copies without wording changes.
**Founder Decision Required:** NO

Evidence: Source 00 original/active `:1-220`; Source 01 original/active
`:1-299`.

### Finding ID: SB-GOV-009

**Severity:** Low
**Original File:** Consolidated source inputs
**Original Section:** Metadata
**Original Provision:** Approved sources have explicit status metadata in
Sources 15-18 and P01-P06.
**Active File:** Sources 00-11
**Active Section:** File headers
**Current Provision:** Many direct active files have no explicit status,
version, approval date, or supersession metadata.
**Classification:** Unclear metadata
**Why It Matters:** Repository placement is doing work that explicit governance
metadata should perform.
**Recommended Repair:** Add controlled metadata only after Founder-approved
status and precedence decisions.
**Founder Decision Required:** YES for status; NO for mechanical metadata once
the decision is recorded.

## 11. Conflicts and Stale References

### Original-set conflicts

1. Roadmap identity is internally inconsistent: v2 title/version with V3 patch
   and ending.
2. Source 17 and 16A require a Smart Business Constitution that is not present
   in the 25-file set.
3. Sources 12 and 14 are labelled Founder Review Edition but do not carry a
   uniform approval-status field, making their exact authority state less clear
   than Sources 17, 18, and P01-P06.

### Active-set conflicts

1. Draft-vs-approved contradiction for Sources 12, 17, and P00.
2. Approved Source 15 depends on draft Source 12.
3. Roadmap chain uses Source 12 but operational steps use old 12/13/14 names.
4. P00 calls Source 12 approved while Source 12 calls itself a draft.
5. Source 17 requires a missing Smart Business Constitution.
6. README’s “approved merged frameworks” claim conflicts with source metadata.

### Between-set conflicts

The active set changes authority references before the consolidated
replacements have recorded Founder approval. The substantive rules remain
compatible, but both authority chains cannot operate as written at the same
time.

### Obsolete references

- Roadmap `:69`: old Implementation Blueprint name.
- Roadmap `:105`: old Acceptance Matrix name.
- Roadmap `:364`: old Pilot Readiness Audit name.

The references inside Source 12 metadata and supersession clauses and P00
metadata are legitimate provenance, not stale operational instructions.

## 12. Missing or Weakened Provisions

### Missing authority artefact

The Smart Business Constitution is referenced but absent. This is the only
material missing authority identified.

### Weakened operational usability

- Active Sources 00 and 01 lack Markdown heading structure.
- README does not disclose which merged sources remain drafts.
- README does not distinguish binding authority order from suggested reading
  order.

### No proven substantive loss

No material product, security, AI, customer, brand, architecture, release, or
continuity provision from the 25 source files was proven missing from the active
set. Consolidated wording sometimes removes duplicated prompt templates and
“common mistakes” sections, but their operative controls remain in P00 shared
rules, platform boundaries, or completion checks. Examples include:

- feature invention and hardcoded permissions (`P00:87-112`)
- responsive/UI safeguards (`P00:245-313`)
- correct backend layer and migration controls (`P00:347-435`)
- duplicate message prevention and template rules (`P00:486-541`)
- hallucination controls (`P00:638-650`)
- voice-sensitive information controls (`P00:681-739`)
- duplicate/orphaned storage controls (`P00:788-838`)

## 13. Correctly Consolidated Areas

### Product execution

Sources 12-14 are consolidated coherently into implementation, acceptance,
pilot, and release parts. The combined file is more operationally complete than
the originals, especially for evidence, rollback, release blocking, and
post-release validation. Classification: **Preserved and Strengthened**,
subject to approval.

### AI operations and continuity

Source 17 and Source 18 content is retained in active Source 17 Parts B and D-E.
Parts A, C, and F add capability, repository, communication, and recovery
controls. Classification: **Preserved and Strengthened**, subject to approval.

### Platform profiles

P01-P06 retain platform-specific sections in P00 Parts 1-6. Shared governance is
deduplicated, while cross-platform coordination and vendor continuity are
added. Classification: **Consolidated Correctly**, subject to approval.

### Direct specialist frameworks

Sources 03-08 and 10 are exact copies. Their content is conclusively preserved.

## 14. README Assessment

**Classification: Misleading.**

### Accurate elements

- All 17 listed governance files exist.
- All link filenames are exact.
- The source index covers every active governance file.
- Locked routes, domains, target user, WhatsApp-first interaction, Ask CFO,
  employee permissions, and POS boundaries match active sources
  (`README:56-93`).
- README correctly states that it is a guide to the active source set rather
  than a standalone product specification.

### Material problems

1. It calls draft merged sources approved (`README:108-116`).
2. It tells current work to use them without disclosing conditional
   supersession.
3. It does not disclose the missing Smart Business Constitution required by
   Source 17.
4. Its reading order is not reconciled with the different authority chains in
   Roadmap, Source 17, and P00.
5. It presents draft Source 17 and draft P00 alongside approved sources without
   status labels.

README can safely guide new collaborators only after these authority and status
repairs.

## 15. Historical Archive Recommendation

No original should be deleted.

Recommended preservation:

1. Keep the complete project-source set immutable at the reviewed commit.
2. After Founder approval of replacements, remove originals from the active
   authority chain but retain them in a clearly labelled historical archive.
3. Preserve Sources 00 and 01 permanently as constitutional/product provenance.
4. Preserve Sources 12-14 as implementation, acceptance, and pilot approval
   evidence.
5. Preserve Sources 17, 18, and P01-P06 until explicit supersession is recorded;
   afterward retain them as approved predecessor evidence.
6. Preserve Source 09 versions because V2/V3 history is currently ambiguous.
7. Record checksums, source commit, approval decision, replacement mapping, and
   archive date in any future archive manifest.

Historical retention is required even where active replacement is ultimately
approved.

## 16. Required Repairs

Required before full replacement:

1. Obtain and record Founder approval or rejection for Source 12.
2. Obtain and record Founder approval or rejection for Source 17.
3. Obtain and record Founder approval or rejection for P00 after Source 17.
4. Correct README draft/approval claims and disclose conditional supersession.
5. Align Source 15 with the actual Source 12 authority state.
6. Replace Roadmap’s stale operational references after the Source 12 decision.
7. Resolve Roadmap V2/V3 metadata.
8. Identify the Smart Business Constitution or remove/clarify that dependency
   through Founder decision.
9. Establish one canonical authority precedence order and distinguish it from
   reading order.
10. Restore heading structure to active Sources 00 and 01.
11. Add explicit status/version/approval metadata to active files where
    governance authorizes it.
12. Re-run this audit’s authority/status checks before retiring originals.

## 17. Founder Decisions Required

Founder decisions are required for:

1. Whether Source 12 is approved as the binding replacement for Sources 12-14.
2. Whether Source 17 is approved as the binding replacement for Sources 17 and
   18 plus AI capability governance.
3. Whether P00 is approved as the binding replacement for P01-P06.
4. What document is the binding Smart Business Constitution.
5. What canonical authority precedence applies across README, Roadmap, Source
   17, and P00.
6. Whether Roadmap’s current approved version is V2, V3, or a V2 base with V3
   patches.

No Founder policy decision is required for heading repair, exact filename-link
repair, or replacing stale references after the governing decisions are
recorded.

## 18. Final Replacement Decision

**Decision C — Conditional Replacement After Material Repairs.**

Rationale:

- Content coverage is sufficient.
- Meaning is generally preserved.
- Consolidated controls are operationally stronger.
- Duplication reduction is largely successful.
- The active set is not presently self-sufficient because approval state,
  supersession, authority precedence, and one constitutional dependency are
  unresolved.

The 25 project-source files must not be retired, archived out of authority, or
deleted until the required Founder decisions and active-set repairs are
completed and accepted.

## 19. Recommended Repository Structure

After Founder approval:

```text
merge/
  active/
    README.md
    00_Lighthouse_Constitution.md
    01_Smart_Business_Master_System_Manifesto.md
    02_Supabase_Architecture_Framework.md
    03_Lovable_Build_Framework.md
    04_API_WhatsApp_OpenAI_Framework.md
    05_AI_Behaviour_and_Model_Training_Framework.md
    06_Support_and_Customer_Experience_Framework.md
    07_Conversion_Onboarding_Framework.md
    08_Smart_Business_Brand_and_Growth_Framework.md
    09_Master_Roadmap_Command.md
    10_Smart_Business_Environment_Activation_Manual.md
    11_Smart_Business_Product_Truth_Map.md
    12_Product_Execution_and_Release_Framework.md
    15_Governance_Mission_Control_Activation_Template.md
    16A_Smart_Business_Constitution_Design_Principles.md
    17_AI_Operations_Manual.md
    P00_Operational_Profiles.md
  archive/
    project-source-e8be958/
      README.md
      [immutable 25-file source snapshot]
```

If the Smart Business Constitution is a separate approved authority, add it to
the active set at the correct precedence position. If it is not separate,
update every authority chain to name the approved equivalent.

The archive README should record:

- reviewed source commit
- 25-file inventory
- replacement decision
- Founder approval references
- active successor mapping
- non-governing historical status
- prohibition on silent deletion

This is a recommendation only. This audit did not create or move any governance
directory.

## 20. Completion Verification

```text
Mission: SB-GOV-COMPARE-1.0
Repository: SmartBusinessv1/smart-business
Branch: main
Commit reviewed: e8be958c5fccf4bad78022ed3ada8290fbf5f106
Project-source files reviewed: 25
Active governance files reviewed: 17
README reviewed: YES
Total files deeply reviewed: 43
Original files omitted: NONE
Active files omitted: NONE
Governance files modified: NONE
Files renamed: NONE
Files deleted: NONE
Commit created: NO
Push performed: NO
Authorized audit artefact: reports/SB-GOV-COMPARE-1.0_Project_Source_vs_Active_Governance_Audit.md
Primary replacement decision: C
Founder decisions required: YES
```

The audit report is evidence for Mission Control and Founder review. It does not
approve consolidation, supersede governance, or authorize archival or deletion.
