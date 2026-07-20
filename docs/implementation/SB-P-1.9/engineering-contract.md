Document: Engineering Contract

Version: 1.0

Status: REFINEMENT REQUIRED

Created By: Codex

Reviewed By: —

Approval Date: —

Mission: SB-P-1.9

# SB-P-1.9 — Merchant Workflow Refinement Engineering Contract

## 1. Engineering Objective

Implement the approved merchant workflow refinements for transaction timestamp visibility, owner transaction correction, and password recovery while preserving existing security, data integrity, calculations, permissions, and authentication behaviour.

## 2. Scope Reference

This contract implements only the approved scope defined in `docs/implementation/SB-P-1.9/scope.md`. No requirement in this contract may expand or override that scope. Where ambiguity exists, existing behaviour must be preserved.

## 3. Engineering Requirements

### A. Transaction Timeline

- Display each transaction's date and time in the transaction timeline.
- Use the existing transaction timestamp where available.
- Present the timestamp using the local business timezone.
- Format the date as `DD MMM YYYY`.
- Format the time using the 12-hour clock with AM/PM.
- Produce a combined value consistent with `19 Jul 2026 • 6:30 PM`.

### B. Transaction Correction

- Permit the business owner to correct an existing transaction.
- Update the existing transaction rather than delete and recreate it.
- Preserve the transaction identity and existing transaction ID.
- Preserve referential integrity for data associated with the transaction.
- Ensure derived dashboard calculations reflect the corrected transaction.
- Record the following minimum audit metadata for every successful correction:
  - `edited_at`
  - `edited_by`
  - `original_values`
  - `updated_values`
  - `edit_reason`, when provided
  - `notification_status`
  - `notification_sent_at`, when the notification is successfully sent
- Generate a transaction correction event after the correction is recorded.
- Trigger the owner WhatsApp notification from the transaction correction event.
- Preserve existing APIs wherever practical.
- Do not permit employee transaction editing as part of this workflow.

### C. Forgot Password

- Include `Forgot Password?` on the authentication page.
- Use Supabase password recovery.
- Preserve the existing authentication flow.
- Do not redesign authentication.

## 4. Data Integrity Requirements

- Preserve business isolation for all transaction reads and corrections.
- Preserve Row Level Security.
- Preserve existing transaction IDs during correction.
- Preserve existing owner permissions.
- Preserve existing reporting and dashboard calculations, with corrected transaction values reflected accurately.
- Preserve authentication security and existing APIs wherever practical.
- Introduce no security, Row Level Security, or business isolation regressions.

## 5. Explicitly Not Included

- Transaction deletion
- Undo
- Approval workflow
- Employee editing
- Employee permissions
- Audit viewer
- Bulk editing
- Notification settings
- Email notifications
- Push notifications
- MFA
- OTP login
- Authentication redesign

## 6. Engineering Acceptance Criteria

- A transaction timeline entry displays its date and time in the form `19 Jul 2026 • 6:30 PM`, using the local business timezone and a 12-hour clock with AM/PM.
- A business owner can correct an existing transaction without changing its transaction ID.
- A correction updates the existing transaction without a delete-and-recreate operation.
- References associated with a corrected transaction remain intact.
- Dashboard and reporting calculations reflect the corrected transaction accurately.
- Every successful transaction correction records `edited_at`, `edited_by`, `original_values`, `updated_values`, and `notification_status`.
- When an edit reason is provided, the successful transaction correction records it as `edit_reason`; its absence does not prevent a correction because it is optional.
- When the owner WhatsApp notification is successfully sent, the correction audit metadata records `notification_sent_at`.
- A transaction correction event is generated for each completed correction.
- The transaction correction event triggers an owner WhatsApp notification.
- `Forgot Password?` is available on the authentication page, and the user can request password recovery.
- Supabase initiates the secure recovery-link flow for the password recovery request.
- The user can set a new password through the recovery flow.
- The user can sign in using the new password after completing recovery.
- The previous password no longer authenticates after the new password is set.
- Existing authentication behaviour remains operational outside the added password recovery entry point.
- Verification demonstrates no regression in business isolation, Row Level Security, security controls, existing owner permissions, or existing transaction IDs.
- No capability listed in the explicitly not included section is introduced.

## 7. Deliverables

- Transaction timeline enhancement meeting the timestamp requirements in this contract.
- Owner transaction correction workflow meeting the identity, integrity, calculation, audit, event, and WhatsApp notification requirements in this contract.
- Supabase password recovery entry point integrated with the existing authentication flow.
- Verification evidence for the engineering acceptance criteria.
