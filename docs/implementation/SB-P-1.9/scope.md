Document: Scope

Version: 1.0

Status: PENDING REVIEW

Created By: Codex

Reviewed By: —

Approval Date: —

Mission: SB-P-1.9

# SB-P-1.9 — Merchant Workflow Refinement

## 1. Mission

- **Mission ID:** SB-P-1.9
- **Mission Name:** Merchant Workflow Refinement
- **Purpose:** Refine essential merchant workflows so business owners can understand transaction timing, correct transaction records without losing their identity, and recover access to their accounts.

## 2. Why This Mission Exists

Merchants need clearer transaction information, a trustworthy way to correct mistakes, and a straightforward way to regain account access. These refinements improve everyday usability while preserving the behavior and safeguards merchants already rely on.

## 3. Features Included

This mission includes only the following features.

### A. Transaction Timeline Enhancement

- Display the transaction date.
- Display the transaction time.
- Use 12-hour time format.
- Display AM/PM.

Example:

```text
19 Jul 2026 • 6:30 PM
```

### B. Transaction Correction

The business owner can correct an existing transaction.

The correction shall:

- Preserve the transaction identity.
- Update the dashboard correctly.
- Generate audit metadata.
- Generate an owner WhatsApp notification.

This is a correction workflow, not a delete-and-recreate workflow.

### C. Forgot Password

The authentication page shall include:

```text
Forgot Password?
```

Password recovery shall use Supabase password recovery.

## 4. Out of Scope

The following are outside this mission:

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

## 5. Existing Behaviour That Must Not Change

The mission must preserve:

- Business isolation
- Row Level Security
- Authentication
- Existing dashboard calculations
- Existing transaction IDs
- Existing APIs wherever practical
- Existing owner permissions

If ambiguity exists, existing behaviour shall be preserved.

## 6. Success Definition

The mission is complete only if:

- ✓ Timeline displays the date and 12-hour time.
- ✓ Owner can correct transactions.
- ✓ Audit data is recorded.
- ✓ WhatsApp notification is generated.
- ✓ Forgot Password works.
- ✓ Dashboard calculations remain correct.
- ✓ No security regressions are introduced.
- ✓ No Row Level Security regressions are introduced.
- ✓ No business isolation regressions are introduced.

## 7. Deliverables

This mission will later produce:

- `implementation-contract.md`
- `lovable-build-prompt.md`
- `verification-checklist.md`
- `completion-report.md`

These documents are not part of this scope document and are not to be created at this stage.
