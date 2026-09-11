# Compliance Shield

## Feature Identity

**Product Type:** Add-on  
**Availability:** Ledger + Manager  
**Build Commitment:** **BUILD NOW**  
**Shared Foundations:** Reminder Engine, Universal Document Intelligence, Notification, Business Memory and Permissions.

## Founder Problem Statement

Licences, renewals and statutory/business deadlines often remain in paper files or the owner's memory. Missing a date can create avoidable stress, fines or disruption. Smart Business should help the merchant remember and organize those responsibilities without pretending to be a government authority or lawyer.

## Supported Records

Where relevant to the merchant, Compliance Shield may track:

- FSSAI dates;
- Panchayat/Municipality trade-licence dates;
- Fire Safety renewals;
- commercial vehicle fitness/insurance renewals;
- other approved business licences, certificates and deadlines;
- associated uploaded documents and notes.

The set should remain extensible rather than hard-coded permanently to a historical enum.

## Document Flow

Compliance documents must reuse Universal Document Intelligence:

**photo/PDF/document → interpret → show extracted dates/details → clarify uncertainty → user confirms → validated compliance record/reminder**.

A low-confidence OCR date must never silently become a trusted statutory deadline.

## Reminder Behaviour

Compliance Shield uses the shared Reminder Engine. It must not create a separate compliance scheduler.

The system may progressively increase visibility as a deadline approaches and provide actions such as done, snooze or reschedule according to the context.

Historical 60/30/7/1-day timing is useful provenance, not an immutable current cadence.

## Users and Permissions

Owner has full access. Manager may receive delegated compliance permissions. Employees should see or update only specific compliance tasks/documents where explicitly permitted and should not receive unrelated owner information.

## AI Behaviour

AI may:

- extract recorded dates and document facts;
- explain what the stored record says;
- remind the merchant;
- identify an approaching deadline;
- retrieve the associated document;
- suggest that the owner verify or act.

AI must not:

- claim the business is officially compliant;
- act as legal counsel;
- certify documents;
- invent statutory requirements or penalty figures;
- file legal appeals or government submissions unless a future separately governed integration explicitly authorizes a bounded action.

## Legal/Information Boundary

Any current legal requirement or penalty information shown to a merchant must be sourced/verified appropriately for the time and jurisdiction. Historical V2.2 penalty numbers are not permanent Product Truth.

## Completion and History

Marking a reminder `done` should preserve the historical reminder and, where appropriate, allow the merchant to attach/update evidence of renewal. Completion should not delete the prior document/date history needed for future understanding.

## Error and Exception Behaviour

Handle:

- unreadable document;
- conflicting dates;
- expired document uploaded after the fact;
- missing document;
- reminder delivery failure;
- owner changes recorded deadline;
- duplicated document/reminder;
- permission denial;
- external legal information unavailable/stale.

The specific compliance item may be blocked for clarification while unrelated business operation continues.

## Privacy

Compliance documents may contain sensitive business information. Access must remain business- and permission-scoped and use the common document-storage security model.

## Explicit Non-goals

- government reporting platform;
- legal certification;
- guaranteed zero missed compliance;
- duplicate OCR/scheduler/notification engines;
- fear-heavy marketing based on unverified legal penalties.

## Historical Corrections

Historical fixed cadence, exact statutory penalty amounts, old storage lifecycle and provider-specific cron mechanics are implementation/history evidence. The durable feature is compliant-document memory + verified dates + useful progressive reminders.

## Provenance

Reconciled from Founder-origin Section 6 and Section 7, Source 01 reminder/human-assistant principles, Source 11 Compliance Shield, and current shared-foundation/anti-duplication rules.
