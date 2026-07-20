Document: Verification Checklist

Version: 1.1

Status: APPROVED

Created By: Codex

Reviewed By: Mission Control

Approval Date: 2026-07-21

Mission: SB-P-1.9

# SB-P-1.9 — Merchant Workflow Refinement Verification Checklist

## 1. Verification Objective

This checklist verifies the completed SB-P-1.9 implementation only against the approved scope, Engineering Contract, and Lovable Build Prompt. Any behaviour not authorized by those documents is outside the accepted implementation.

## 2. Preconditions

- [ ] The latest SB-P-1.9 implementation is deployed.
- [ ] Database migrations, if any, completed successfully.
- [ ] The Founder can sign in.
- [ ] An existing Smart Business workspace is accessible.
- [ ] Existing production data remains available.

## 3. Feature Verification

### A. Transaction Timeline

- [ ] Each transaction displays its transaction date.
- [ ] Each transaction displays its transaction time.
- [ ] The displayed date and time use the local business timezone.
- [ ] The displayed time uses the 12-hour format with AM/PM.
- [ ] A transaction occurring at the example date and time is displayed as `19 Jul 2026 • 6:30 PM`.
- [ ] Existing timeline behaviour remains unchanged apart from the approved date and time display.

### B. Transaction Correction

- [ ] The business owner can correct an existing transaction.
- [ ] A non-owner employee cannot edit an existing transaction.
- [ ] The correction updates the existing transaction instead of deleting and recreating it.
- [ ] The transaction ID is identical before and after the correction.
- [ ] Dashboard calculations reflect the corrected transaction values.
- [ ] Reports reflect the corrected transaction values.
- [ ] Every successful correction records `edited_at`.
- [ ] Every successful correction records `edited_by`.
- [ ] Every successful correction records `original_values`.
- [ ] Every successful correction records `updated_values`.
- [ ] A provided correction reason is recorded as `edit_reason`.
- [ ] A correction succeeds when `edit_reason` is not provided.
- [ ] Every successful correction records `notification_status`.
- [ ] A successfully sent owner WhatsApp notification records `notification_sent_at`.
- [ ] A transaction correction event is created after the correction is recorded.
- [ ] The transaction correction event triggers the owner WhatsApp notification.
- [ ] Existing data relationships associated with the corrected transaction remain intact.

### Phase 4A — Transaction Correction Confirmation Dialog

#### Confirmation Dialog

- [ ] A confirmation dialog appears after the owner clicks **Save Correction** and before the correction is committed.
- [ ] The dialog title is `Confirm Transaction Correction`.
- [ ] The dialog message matches the approved wording:

  ```text
  This correction will be recorded in the audit history.

  If owner notifications are enabled, the correction will also be reported to the business owner.

  Do you want to continue?
  ```

- [ ] The dialog displays the **Yes, Save Correction** button.
- [ ] The dialog displays the **Cancel** button.

#### Cancel Verification

- [ ] **Cancel** closes the confirmation dialog.
- [ ] **Cancel** returns the owner to the correction form.
- [ ] Every entered field retains exactly the value present before the dialog opened.
- [ ] **Cancel** does not save the transaction correction.
- [ ] **Cancel** creates no audit record.
- [ ] **Cancel** generates no transaction correction event.
- [ ] **Cancel** invokes no notification pipeline.

#### Confirmation Verification

- [ ] **Yes, Save Correction** completes the existing approved transaction correction workflow.
- [ ] The transaction ID is identical before and after the confirmed correction.
- [ ] The confirmed correction records the approved audit metadata.
- [ ] The confirmed correction generates the approved transaction correction event.
- [ ] The confirmed correction invokes the existing backend notification pipeline exactly as previously implemented where that pipeline is available.

#### Regression Verification

- [ ] Dashboard calculations remain correct after the Phase 4A enhancement.
- [ ] Existing transaction timeline behaviour remains unchanged.
- [ ] Existing authentication behaviour remains unchanged.
- [ ] Row Level Security remains enforced.
- [ ] Business isolation remains enforced.
- [ ] Existing correction permissions remain unchanged.
- [ ] Existing APIs remain operational.

### C. Forgot Password

- [ ] `Forgot Password?` is visible on the authentication page.
- [ ] The user can request password recovery.
- [ ] Supabase initiates the secure recovery-link flow.
- [ ] The Supabase recovery link functions.
- [ ] The user can set a new password through the recovery flow.
- [ ] The user can sign in using the new password.
- [ ] The previous password no longer authenticates after the new password is set.
- [ ] Existing authentication continues to function outside the approved recovery capability.

## 4. Regression Verification

- [ ] Authentication is unchanged except for the approved password recovery capability.
- [ ] The dashboard is unchanged except for the changes explicitly approved under SB-P-1.9.
- [ ] Existing permissions remain unchanged.
- [ ] Row Level Security remains enforced.
- [ ] A user cannot access data belonging to another business.
- [ ] Existing APIs remain operational.
- [ ] Existing routes remain operational and no route has been changed by this mission.
- [ ] No UI regression is present outside the approved transaction timeline and authentication-page changes.

## 5. Exclusion Verification

Confirm that none of the following were introduced:

- [ ] No transaction deletion capability was introduced.
- [ ] No undo capability was introduced.
- [ ] No approval workflow was introduced.
- [ ] No employee editing capability was introduced.
- [ ] No employee-permission changes were introduced.
- [ ] No audit viewer was introduced.
- [ ] No bulk editing capability was introduced.
- [ ] No notification settings were introduced.
- [ ] No email notifications were introduced.
- [ ] No push notifications were introduced.
- [ ] No MFA capability was introduced.
- [ ] No OTP login capability was introduced.
- [ ] No authentication redesign was introduced.

## 6. Verification Result

| Item | Result |
| --- | --- |
| Transaction Timeline | ☐ PASS ☐ FAIL |
| Transaction Correction | ☐ PASS ☐ FAIL |
| Phase 4A Confirmation Dialog | ☐ PASS ☐ FAIL |
| Forgot Password | ☐ PASS ☐ FAIL |
| Regression Verification | ☐ PASS ☐ FAIL |
| Exclusion Verification | ☐ PASS ☐ FAIL |

## 7. Mission Completion Criteria

SB-P-1.9 is considered implementation-complete only when:

- [ ] Every checklist item passes.
- [ ] No regression is observed.
- [ ] No excluded feature exists.
- [ ] The Founder accepts the implementation.
- [ ] Mission Control approves completion.
