# Operational Dashboard & Manager Workspace

## Feature Identity

**Availability:** Manager core for advanced operations; Ledger receives the visual surfaces appropriate to Ledger capabilities.  
**Build Commitment:** **BUILD NOW**.

## Purpose

Provide a clear visual workspace for inspection, management and review while preserving Smart Business as conversation-first rather than form-first.

## Experience Principle

The dashboard complements conversation. It must not become a separate source of truth or a traditional ERP maze.

A merchant should be able to:

- see the most important current business state;
- inspect details when needed;
- take authorized operational actions;
- move naturally between visual and conversational surfaces;
- use the native Conversation Workspace without losing context.

## Core Manager Views

The Manager workspace may include, according to current enabled capabilities and permissions:

- financial/operational summary;
- transaction history and linked documents;
- stock and supplier views;
- reorder state;
- POS/counter signals;
- closing cash review;
- customer credit awareness;
- staff/attendance where the HR add-on is active;
- order/delivery where the add-on is active;
- integrations and authorized settings;
- exports/reports;
- native Conversation Workspace.

Exact navigation/tab count is not permanent Product Truth.

## Owner / Manager / Employee Boundaries

Owner receives the full authorised business view.

Manager receives only explicitly delegated operational views and does not automatically receive Ask CFO, profit or Owner intelligence.

Employees receive only job-specific operational/self-service surfaces explicitly permitted to them.

UI hiding is not sufficient. Authorization must be enforced at the server/data boundary.

## Financial and Operational Presentation

Visualizations should help a busy merchant understand rather than impress with complexity. Where supported by real data, views may include:

- period totals and trends;
- sales vs expenses;
- cash position/closing state;
- inventory movement;
- fast/slow-moving items;
- operational alerts requiring review;
- historical comparison.

A chart or card must not imply data certainty that the underlying records do not support.

## Conversation Workspace

The native Smart Business Conversation Workspace is a first-class workspace component, not a generic search box. It shares Business Memory, permissions, AI intelligence and action foundations with WhatsApp.

## Actions and Confirmation

Consequential changes initiated from the dashboard must follow the same confirmation, audit and execution-time permission rules as equivalent conversational actions.

## Stable Testability

Stable interactive frontend elements should preserve permanent `id` and `data-testid` identifiers or equivalent approved stable testing hooks. Do not rely solely on dynamic class names.

## Error / Empty / Loading States

The workspace must distinguish:

- no data yet;
- data not available to this role;
- stale data;
- loading/in-progress;
- integration disconnected;
- genuine error.

Do not show fake metrics or placeholder business numbers as though they are real.

## Performance

Critical owner operations should feel fast and responsive, targeting the current sub-3-second experience where technically reasonable without weakening permission, security or correctness.

## Explicit Non-goals

- immutable historical four-tab UI;
- generic ERP complexity;
- duplicate data/analytics logic separate from conversational channels;
- employee access to Owner intelligence by visual-route discovery;
- fake/demo metrics in production;
- forcing one merchant's custom workflow into core navigation.

## Historical Corrections

Historical Recharts layouts, exact cards, tab numbers and legacy domain references are design/implementation history. Product truth is the clear permission-aware visual operating workspace and its connected conversation experience.

## Provenance

Reconciled from Founder-origin Sections 1, 4 and 7, planning/build restraint lessons, Source 01 Product Experience and Static Element directives, and Source 11 Manager / Conversation Workspace / Progressive Application Experience.
