# Smart Business Conversation Workspace & Channel Independence

## Feature Identity

**Feature Name:** Smart Business Conversation Workspace  
**Product Type:** Core shared conversational channel  
**Availability:** Ledger + Manager  
**Build Commitment:** **BUILD NOW**  
**Founder Decision:** The web application must provide a first-class chat-style Smart Business experience that can substitute for WhatsApp when needed and may also be used by merchant choice.

## Founder Problem Statement

Smart Business cannot depend on one third-party communication channel or force an owner to remain on the phone where WhatsApp is installed. A merchant working from a laptop, tablet or desktop must be able to continue the same Smart Business conversation and business workflows without interruption.

## Lighthouse Principle

Technology serves the merchant. Channel choice must improve freedom and continuity without splitting the product into separate systems.

## Supported Merchant Inputs

The Conversation Workspace must support, subject to normal permissions and product rules:

- text;
- voice;
- images/photos;
- Excel;
- CSV;
- PDF;
- supported business documents.

## Supported Smart Business Outputs

The workspace must support:

- text responses;
- voice responses where the user's role, product entitlement and privacy context permit;
- useful image/media responses where applicable;
- Ask CFO conversations;
- reminder interaction;
- business confirmations and clarification prompts;
- downloadable Excel, CSV and PDF outputs.

## One Product, Multiple Channels

WhatsApp and the Conversation Workspace must share:

- business identity;
- Business Memory;
- conversation context/history where permitted;
- Permission Engine;
- Human Language Layer;
- Universal Document Intelligence;
- Ask CFO reasoning;
- confirmation/clarification rules;
- reminder/automation foundations;
- business action services;
- auditability.

They must not maintain separate ledgers, permission rules, reminder engines, document parsers or feature-specific business logic merely because the channel differs.

## Users and Permissions

### Owner

May use the full set of capabilities allowed by their subscription and business authority.

### Manager

May use only capabilities explicitly delegated by the Owner. Manager access does not automatically include Owner financial intelligence.

### Employee

May use the workspace only for specifically permitted operational actions and self-service information. Ask CFO, profit, full analytics and Owner reports remain unavailable by default.

Other roles should receive only purpose-limited interfaces where current Product Truth explicitly permits them; the Owner Conversation Workspace is not a general public portal.

## Expected User Experience

The workspace should feel like conversing with the same Smart Business assistant already known from WhatsApp, not learning a second product.

A user should be able to begin in one approved channel and continue in another without losing business identity or creating duplicate records. Channel transitions must preserve authoritative stored state and should preserve relevant conversation context within privacy/retention boundaries.

## WhatsApp Failure / Degradation Behaviour

If WhatsApp API delivery or availability fails:

- the web Conversation Workspace remains available when Smart Business itself is healthy;
- background jobs, POS/API ingestion, payment reconciliation and other channel-independent services continue where their dependencies are healthy;
- failed WhatsApp delivery is reported as a channel failure, not as failure of the underlying business action unless the action itself failed;
- queued/retry behaviour must avoid duplicate consequential actions.

## Ask CFO

Ask CFO in the workspace uses the same read-only intelligence boundary as every other channel.

Ask CFO may explain and suggest. If the user chooses a consequential action, the appropriate authorized feature service performs it under its own confirmation and permission rules.

## Documents and Files

Excel/CSV/PDF/image uploads must reuse Universal Document Intelligence:

**upload → interpret → preview → clarify where needed → confirm → validated update**.

Uncertain interpretation must not silently create business records.

## Language and Voice

English, Malayalam and Manglish are first-class. Voice should be natural, concise and privacy-aware. Sensitive Owner information should not be spoken in a context where the user's role or environment makes audio inappropriate.

## Authentication and Identity

Authentication method and Smart Business identity are separate concepts. Approved login methods may evolve, but the same authorised user must resolve to the same business identity and permissions across channels.

## Error and Exception Behaviour

Handle at minimum:

- channel outage;
- failed file upload;
- unsupported/unsafe file;
- low-confidence interpretation;
- stale session;
- permission change during conversation;
- duplicate submission;
- failed response rendering/download;
- user switching channels during an unfinished confirmation flow.

Consequential execution must revalidate current server-side authority immediately before action.

## Privacy and Trust Boundaries

- No cross-business context leakage.
- No employee escalation into Owner intelligence through the chat surface.
- Conversation history retention must follow current privacy/retention policy.
- A channel must not broaden access merely because its UI exposes a control.
- Business continuity must not become an excuse for bypassing security.

## Performance Expectations

Critical conversation interactions should target the current Smart Business sub-3-second experience where technically reasonable. Slow operations should clearly indicate progress without weakening correctness.

## Explicit Non-goals

- a separate web-only business engine;
- a generic unrestricted AI chatbot;
- replacing WhatsApp as a product decision;
- duplicating feature logic by channel;
- offline-without-internet operation unless separately approved;
- public customer/supplier access to Owner intelligence.

## Historical Corrections / Superseded Behaviour

Superseded:

- treating WhatsApp as the only usable Smart Business interface;
- separate channel-specific business logic;
- assuming a third-party messaging outage should stop all business-system operation.

Historical carrier-SMS fallback concepts remain implementation history, not a current required product channel.

## Provenance

Reconciled from Founder-origin Section 7 Q90, cross-feature anti-duplication evidence, planning/project-room extraction, current Founder direction and Source 11 Conversation First / Channel Independence truth.

## Unresolved Founder Questions

None for the existence, build commitment or first-class status of this capability. Exact UI navigation placement and implementation technology are product/engineering design decisions under current governance.
