# Smart Business Feature Definition Library

## Purpose

This folder preserves detailed, durable feature intent for Smart Business so future SB-P missions, Claude Code, Lovable, Supabase, AI/WhatsApp specialists, testers, and Mission Control do not have to reconstruct the product from scattered chats or compressed summaries.

It exists because a high-level Product Truth statement may correctly say **what** a feature is while still omitting enough workflow detail that a builder can implement a technically valid but materially incomplete product.

The feature library closes that gap.

---

## Authority Boundary

These feature files are **Founder-feature elaboration and Product Blueprint inputs**.

They:

- preserve current Founder direction and recovered Founder product intent;
- expand approved feature behavior in implementation-ready product language;
- provide durable input to future Product Blueprints and EIS work;
- prevent AI or implementation tools from silently simplifying approved capabilities;
- do not independently supersede the Lighthouse Constitution, Source 01, Source 11, or other active governance.

If a feature file conflicts with current canonical Product Truth, the conflict must be surfaced and reconciled through Founder/Mission Control before implementation.

A lower-level builder must never resolve such a conflict by silently dropping feature behavior.

---

# Founder Build Commitment Rule

The Founder has clarified the following operating distinction:

## Build Commitment

A Founder-invented capability that remains approved and aligned with current Smart Business is intended to be built.

Historical assistant labels such as:

- MVP-only;
- after pilot;
- future;
- later;
- too much for V1;
- defer for simplicity;

must not silently demote the capability unless the Founder/current authoritative Product Truth explicitly confirms that deferral.

## Commercial Packaging

`Add-on` describes how a merchant obtains the capability.

It does **not** automatically mean `Build Later`.

A capability may therefore be:

> **Build Now + Add-on**

## Implementation Sequencing

Technical dependencies may change build order without changing feature commitment.

Example:

A feature may wait for a shared Permission Engine or Location Foundation before implementation, while remaining fully committed for the current product build.

## Security Blockers

Security, integrity, privacy, or production-safety findings may block an unsafe implementation path.

They must not be translated into an unapproved Product Truth decision that the feature itself should not exist.

Required language when blocked:

- Product commitment: unchanged / approved.
- Blocked step: exact implementation step.
- Reason: exact verified dependency or risk.
- Recovery: minimum safe correction.
- Unrelated safe work: continue.

---

# Feature File Standard

Every mature feature file should contain, where applicable:

1. Feature Identity
2. Founder Problem Statement
3. Lighthouse Principle
4. Build Commitment
5. Commercial Availability
6. Users Involved
7. Permission Boundaries
8. Complete User Journeys
9. WhatsApp Experience
10. Dashboard / App Experience
11. AI Behavior
12. Business Memory / Data Requirements
13. Shared Foundations to Reuse
14. Integrations
15. Confirmation Rules
16. Error and Exception Behavior
17. Privacy and Trust Boundaries
18. Performance Expectations
19. Acceptance Scenarios
20. Dependencies
21. Explicit Non-goals
22. Historical Corrections / Superseded Classifications
23. Provenance
24. Unresolved Founder Questions, if any

Feature files should describe **product behavior**, not prematurely hardcode implementation technology where the architecture can remain flexible.

---

# NotebookLM Recovery Status

NotebookLM feature recovery has now begun.

The Founder-uploaded `notebook LM briefing.txt` is treated as a **seed map**, not as the complete NotebookLM evidence corpus.

Feature files marked:

> **NOTEBOOKLM SEED — DEEP EXTRACTION REQUIRED**

preserve confirmed capability direction but are deliberately **not implementation-ready**. They must be deepened through the NotebookLM Q&A extraction process before Blueprint/EIS work uses them as complete feature contracts.

The durable NotebookLM question bank is maintained at:

`communication/missions/SB-DOC-PHASE1-HISTORY-1.0/founder/notebooklm/NotebookLM_Extraction_Question_Bank_v1.md`

Seed extraction record:

`communication/missions/SB-DOC-PHASE1-HISTORY-1.0/founder/notebooklm/NotebookLM_Briefing_Seed_Extraction_01.md`

---

# Feature Completion Principle

A feature is not complete because a screen exists.

A feature is complete only when every required layer is accounted for:

- Product behavior;
- UI;
- backend/data;
- permissions/RLS;
- AI/intelligence;
- channel behavior;
- scheduler/background jobs where applicable;
- integrations;
- failure handling;
- security;
- performance;
- runtime verification;
- acceptance evidence.

---

# Initial Feature Register

The following feature families are currently known and will receive dedicated files as historical planning and NotebookLM recovery continues.

| Feature | Commercial position | Build commitment | Feature file status |
|---|---|---|---|
| Ledger / Business Memory | Ledger + Manager core | BUILD NOW | **NotebookLM seed created — deep extraction required** |
| WhatsApp Intelligence | Core conversation channel capability | BUILD NOW | Pending detailed recovery |
| Ask CFO | Ledger + Manager core | BUILD NOW | **Created — planning-depth record; NotebookLM enrichment pending** |
| Smart Reminder Assistant | Ledger + Manager core | BUILD NOW | Pending detailed recovery |
| Daily Intelligence Rhythm | Ledger + Manager core | BUILD NOW | **NotebookLM seed created — deep extraction required** |
| Universal Document Intelligence / Receipt Intelligence | Core cross-feature capability | BUILD NOW | **NotebookLM seed created — deep extraction required** |
| Human Language Layer | Core cross-feature capability | BUILD NOW | Pending detailed recovery |
| Stock / Supplier / Reorder Intelligence | Manager core | BUILD NOW | **NotebookLM seed created — deep extraction required** |
| Smart Stock Assistant | Ledger add-on | BUILD NOW | Covered provisionally in Stock seed; deeper packaging/workflow recovery required |
| Staff / HR Assistant | Ledger + Manager add-on | BUILD NOW | **NotebookLM seed created — deep extraction required** |
| Compliance Shield | Ledger + Manager add-on | BUILD NOW | Pending detailed recovery |
| Smart Voice Assistant Plus | Ledger + Manager add-on | BUILD NOW | Pending detailed recovery |
| Smart Order & Delivery Assistant | Ledger + Manager add-on | **BUILD NOW — before first 10 pilot clients** | **Created — planning-depth record; NotebookLM enrichment pending** |
| Support Automation | Core support foundation | BUILD NOW | **NotebookLM seed created — deep extraction required** |
| Payment / Subscription lifecycle | Platform/core commercial capability | BUILD NOW | Pending detailed recovery |
| Payment Verification Intelligence | Ledger + Manager core | BUILD NOW | Pending detailed recovery |
| Smart Credit Awareness | Ledger + Manager core | BUILD NOW | Pending detailed recovery |
| POS Connection & Intelligence | Manager core / integration layer | BUILD NOW | Pending detailed recovery |
| Operational Dashboard / Manager Risk Intelligence | Manager core | BUILD NOW | Pending detailed recovery |
| Receipt Cabinet | Ledger + Manager core | BUILD NOW | Covered provisionally in Document/Receipt seed; deep retrieval workflow required |
| Super Admin Cockpit | Founder/platform operations | BUILD NOW within approved current scope | Pending detailed recovery |

Additional feature records will be added as NotebookLM extraction recovers them.

---

# Use in Future SB-P Missions

For a feature mission, the recommended Product Definition input becomes:

**Current Source 11 + relevant mature feature file + verified repository state + unresolved Founder questions only.**

A `NOTEBOOKLM SEED` file is not yet a mature feature file and must not be mistaken for a complete implementation contract.

The feature file should reduce repeated discovery, not bypass Product Governance.

A future Product Blueprint should cite the relevant feature file and explicitly list any differences, refinements, or unresolved conflicts.

Claude Code's EIS then converts the locked product intent into engineering detail.

---

# Anti-Drift Rule

No future AI or specialist should remove, postpone, or simplify a behavior merely because:

- it is difficult;
- it crosses frontend and backend;
- it requires an integration;
- it is an add-on;
- it was once called future by an older assistant;
- the current mission has a narrow technical focus.

If a behavior is not in the current mission, record it as **still committed / not in this mission**, not as rejected or deferred unless that decision is actually authorized.

---

## Final Principle

**Protect the feature. Gate the implementation.**

Build commitment is product truth.

Build order is program management.

Security governs how safely the feature is delivered.

None of those should silently rewrite the others.