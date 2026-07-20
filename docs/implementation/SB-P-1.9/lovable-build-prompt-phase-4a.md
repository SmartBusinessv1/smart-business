Document: Lovable Build Prompt – Phase 4A

Version: 1.0

Status: PENDING REVIEW

Created By: Claude

Reviewed By: —

Approval Date: —

Mission: SB-P-1.9

# SB-P-1.9 — Merchant Workflow Refinement — Lovable Build Prompt — Phase 4A

## Audience

This document is a supplemental implementation prompt for the approved SB-P-1.9 mission. It does not replace the approved `lovable-build-prompt.md`. It supplements the approved implementation with one additional usability refinement that remains within the approved scope of SB-P-1.9.

## Source of Truth

The implementation must remain consistent with:

- `docs/implementation/SB-P-1.9/scope.md`
- `docs/implementation/SB-P-1.9/engineering-contract.md`
- `docs/implementation/SB-P-1.9/lovable-build-prompt.md`
- `docs/implementation/SB-P-1.9/verification-checklist.md`

Do not introduce new scope. Do not reinterpret approved requirements. Where ambiguity exists, preserve existing behaviour.

## Objective

Add a confirmation step immediately before an approved transaction correction is committed. This is a usability enhancement only. It does not change the approved correction workflow.

## Scope

This document supplements the approved Lovable Build Prompt. All instructions in the original prompt remain in force unless explicitly extended here.

## Required Behaviour

When the owner clicks:

```text
Save Correction
```

do **not** immediately commit the correction. Display a confirmation dialog first.

### Dialog Title

```text
Confirm Transaction Correction
```

### Dialog Message

```text
This correction will be recorded in the audit history.

If owner notifications are enabled, the correction will also be reported to the business owner.

Do you want to continue?
```

### Buttons

Primary

```text
Yes, Save Correction
```

Secondary

```text
Cancel
```

## Behaviour

### Cancel

When Cancel is selected:

- Close the dialog.
- Return to the correction form.
- Preserve every field exactly as entered.
- Do not save the transaction.
- Do not generate audit metadata.
- Do not generate a transaction correction event.
- Do not invoke the notification pipeline.

### Yes, Save Correction

When confirmation is accepted:

Proceed through the already approved SB-P-1.9 correction workflow without modification. Continue to:

- preserve transaction ID;
- preserve referential integrity;
- record approved audit metadata;
- generate the approved transaction correction event;
- invoke the existing backend notification pipeline where implemented.

Do not introduce any additional workflow.

## Preserve Existing Behaviour

Do not modify:

- transaction ordering;
- transaction timeline;
- dashboard calculations;
- correction permissions;
- audit model;
- transaction model;
- database schema;
- Supabase architecture;
- authentication;
- Row Level Security;
- business isolation;
- APIs;
- backend notification architecture.

## Explicitly Not Authorized

Do not introduce:

- Approval workflow
- Multi-step approvals
- Secondary confirmation screens
- Delete confirmation
- Undo
- Employee approval
- Notification settings
- Email notifications
- Push notifications
- MFA
- OTP login
- Authentication redesign
- UI redesign beyond this confirmation dialog

## Definition of Done

Implementation is complete only when:

- The confirmation dialog appears before every transaction correction.
- Cancel performs no save.
- All entered values remain unchanged after Cancel.
- Confirm completes the existing approved correction workflow.
- Existing audit behaviour remains unchanged.
- Existing event generation remains unchanged.
- Existing notification behaviour remains unchanged.
- No regression is introduced.

## Deliverable

This prompt authorizes only the confirmation dialog enhancement. No additional functionality is authorized.
