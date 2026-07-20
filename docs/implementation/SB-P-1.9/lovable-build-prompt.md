Document: Lovable Build Prompt

Version: 1.0

Status: REFINEMENT REQUIRED

Created By: Claude

Reviewed By: —

Approval Date: —

Mission: SB-P-1.9

# SB-P-1.9 — Merchant Workflow Refinement — Lovable Build Prompt

## 1. Mission Context

Smart Business merchants need clearer transaction timing, a trustworthy way to correct a transaction without losing its identity, and a way to recover account access. This mission refines these three existing workflows only. It does not change the surrounding product, architecture, or authentication design.

## 2. Source Documents

Implementation must follow only:

- `docs/implementation/SB-P-1.9/scope.md` (Approved Scope)
- `docs/implementation/SB-P-1.9/engineering-contract.md` (Approved Engineering Contract)

No additional interpretation is permitted. Do not add, infer, or expand requirements beyond what these documents state.

## 3. Existing Behaviour to Preserve

Preserve existing behaviour, architecture, security, routing, permissions, APIs, and product structure except for the changes explicitly authorized by this mission.

This includes, without limitation:

- Existing authentication
- Existing dashboard
- Existing transaction model
- Existing Supabase architecture
- Existing Row Level Security
- Existing business isolation
- Existing routing
- Existing permissions
- Existing APIs wherever practical

Where any ambiguity exists, preserve existing behaviour rather than introducing new behaviour.

## 4. Required Implementation

### A. Transaction Timeline

Implement:

- Date and time display for each transaction in the timeline.
- Local business timezone.
- 12-hour format with AM/PM.

Example:

```text
19 Jul 2026 • 6:30 PM
```

Do not redesign the timeline UI.

### B. Transaction Correction

Implement:

- Owner-only correction of an existing transaction.
- Update the existing transaction record; do not delete and recreate it.
- Preserve the transaction ID.
- Preserve referential integrity for all data associated with the transaction.
- Update dependent dashboard and reporting calculations to reflect the corrected transaction.
- Record audit metadata for every successful correction: `edited_at`, `edited_by`, `original_values`, `updated_values`, `edit_reason` (when provided), `notification_status`, and `notification_sent_at` (when the notification is successfully sent).
- Generate a transaction correction event after the correction is recorded.
- Trigger the owner WhatsApp notification from that transaction correction event.

Do not implement:

- Transaction deletion
- Undo
- Approval workflow
- Employee editing
- Employee-permission changes
- Audit viewer
- Bulk editing
- Notification settings
- Email notifications
- Push notifications
- MFA
- OTP login
- Authentication redesign

### C. Forgot Password

Implement the complete Supabase password recovery flow:

- Display the `Forgot Password?` link on the authentication page.
- Request password recovery through Supabase.
- Use the secure Supabase recovery-link flow.
- Allow the user to set a new password through that flow.
- Return the user to the existing authentication experience.
- Allow sign-in with the new password.

The existing authentication architecture and sign-in flow must remain unchanged except for this approved recovery capability.

Do not add:

- MFA
- OTP login
- Phone authentication
- Custom authentication
- Authentication redesign

## 5. Implementation Constraints

Do not:

- Redesign architecture
- Redesign authentication
- Redesign the database
- Redesign APIs
- Redesign routing
- Redesign notifications
- Modify business isolation
- Modify Row Level Security
- Introduce future features

## 6. Definition of Done

Implementation is complete only when:

- All engineering requirements above are implemented.
- Existing behaviour is preserved.
- No regressions are introduced.
- No excluded features are implemented.

## 7. Deliverable

Implement only the approved scope. No additional functionality is authorized.
