# Permissions, Business Isolation & Role Authority

## Feature Identity

**Product Type:** Core shared security/product foundation  
**Build Commitment:** **BUILD NOW**  
**Applies To:** Every Smart Business channel, screen, API, AI flow, background job and integration.

## Purpose

Protect merchant privacy and human authority while allowing useful delegation. Permission truth must live at authoritative server/data boundaries rather than depending on hidden buttons, route names or AI prompt obedience alone.

## User Authority Model

### Owner

Highest authority within the merchant business. May access Owner intelligence, approve changes, manage users/subscriptions, export business data and delegate bounded permissions.

### Manager

Delegated business role. Receives only permissions granted by Owner/current policy. Manager does not automatically inherit Ask CFO, profit, broad analytics or Owner-only controls.

### Employee

Operational user. May perform explicitly permitted actions such as:

- add permitted transactions;
- upload permitted receipts/documents;
- record attendance;
- view own attendance;
- request corrections;
- participate in assigned stock/order/delivery workflows where permitted.

Employee cannot access Owner financial intelligence by default.

### Supplier

Communication participant only for approved supplier/procurement workflows. No dashboard/business-intelligence access.

### Customer

Business participant for their own order/status/receipt interactions. No merchant dashboard, Ask CFO, other-customer data or business intelligence.

### Delivery Staff

Operational employee/delegate with only delivery-task information required for assigned work plus explicitly permitted self-service information.

## Multi-Tenant Business Isolation

Every business record and operation must resolve to the correct merchant/business boundary. No user, AI flow, API or background process may cross that boundary merely because it can technically query the data.

Database/RLS/server authorization must enforce isolation where applicable.

## Channel Independence

Permissions must be consistent across:

- WhatsApp;
- Conversation Workspace;
- dashboard;
- APIs/POS;
- document imports;
- reminders/automations;
- AI/Ask CFO;
- support/admin tooling.

Switching channel or authentication method must not increase authority.

## Preview and Execution Authority

For consequential operations:

1. derive actor and business identity from trusted server state;
2. verify permission before preview;
3. bind any confirmation token/state to the exact reviewed action, target and expected state;
4. revalidate permission immediately before execution;
5. preserve actor/authority provenance in audit history.

Permission at preview time is not permanent authority.

## Owner-Delegated Authority

Owner may delegate bounded business permissions or standing automation rules. Delegation must be explicit, scoped, revocable and auditable.

AI does not create permission. Tool access does not create permission. A historical approval does not automatically create current authority for a different action.

## Data Visibility

Sensitive fields may require structurally different response shapes rather than merely returning protected values as null/hidden UI fields.

Owner-only or cost-sensitive information should be physically omitted from unauthorized response contracts where appropriate.

## Normal Permission Denial vs Security Event

A user asking for information they are not permitted to access should receive a respectful permission denial. It is not automatically a security/quarantine event.

Actual abuse, bypass attempts or unsafe payloads may use the security/quarantine path.

## Support / Super Admin

Platform operators do not inherit merchant Owner authority. Account-specific support access must be purpose-limited, authorized, least-privilege and auditable.

## Error and Exception Behaviour

Handle:

- revoked permission mid-session;
- duplicate/stale confirmation;
- role changed after preview;
- cross-business identifier mismatch;
- invalid delegation;
- expired temporary support access;
- unauthorized API/token use;
- UI showing a control the backend rejects.

The correct response is a safe denial/recovery path, not a silent downgrade or data leak.

## Explicit Non-goals

- UI-only authorization;
- employee access to Owner intelligence by default;
- technical service-role capability treated as business permission;
- broad permanent Super Admin merchant-data access;
- dynamic schema deletion/addition as entitlement enforcement;
- channel-specific permission engines.

## Historical Corrections

Ground Zero's rigid `write-only employee` model evolves into useful permission-scoped self-service while keeping Owner intelligence protected. Broad service bypasses and ordinary denial-as-security-violation patterns are superseded.

## Provenance

Reconciled from Founder-origin Sections 1, 5 and 7; Source 05 role-based AI permissions; Source 06 employee/support privacy; Source 11 User Authority Model; Supabase/security lessons on RLS/effective privileges; and Mission Control authority doctrine.
