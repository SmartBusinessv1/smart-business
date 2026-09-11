# Smart Business Feature Definition — Staff / HR Assistant

**Status:** MATURE RECONCILED CONTRACT  
**Build commitment:** **ADD-ON + BUILD NOW**  
**Commercial availability:** Smart Business Ledger + Smart Business Manager add-on  
**Authority boundary:** Employee access is permission-scoped. Owner financial intelligence remains protected by default.

---

## 1. Feature Identity

Staff / HR Assistant helps small merchants manage employee records, attendance, shifts, leave and payroll-support workflows without turning Smart Business into a surveillance system or a rigid enterprise HR suite.

---

## 2. Founder Problem Statement

Local merchants often manage staff through notebooks, WhatsApp, rosters, verbal instructions and memory. Smart Business should reduce repetitive administration while preserving dignity, human context and Owner control.

---

## 3. Core Capabilities

The mature feature should support, where enabled and lawful:

- employee/staff profiles;
- roles and permission scope;
- shift/roster records;
- attendance events;
- leave/absence recording;
- payroll-support calculations and context;
- employee self-view of permitted attendance information;
- correction/context records;
- reminders/notifications relevant to staff operations.

Sensitive KYC/national-ID storage remains an unresolved Founder/legal/privacy decision and is not assumed by this contract.

---

## 4. Role and Permission Model

### Owner

Controls staff access and may view authorized HR/attendance/payroll-support data.

### Manager

May receive delegated operational staff authority, but does not automatically inherit Owner financial intelligence.

### Employee / Staff

May perform only explicitly permitted actions, such as:

- add permitted operational transactions;
- view their own attendance where permitted;
- receive assigned shift/reminder information;
- submit approved attendance/leave context.

Staff cannot see Owner profit intelligence, unrestricted analytics or Ask CFO by default.

---

## 5. Attendance

Attendance must be represented as auditable events rather than silent mutable truth.

Supported mechanisms may include approved QR/location-assisted check-in/out or other future verified methods.

### Location rule

Location is **point-in-time and purpose-limited** for attendance verification where enabled.

Smart Business must not continuously track an employee merely because attendance/location is enabled.

Exact geofence radius is an implementation decision to be validated, not historical Product Truth.

---

## 6. Roster and Document Intake

A roster may arrive through photo, PDF, Excel/CSV or other approved formats.

It must reuse Universal Document Intelligence:

**document → interpretation → preview → clarification if needed → confirmation → validated HR update**.

No separate HR-only OCR/import truth system should be created.

---

## 7. Leave, Absence and Human Context

Smart Business should record the operational event and preserve approved human context rather than silently rewriting history.

Examples:

- employee absent;
- Owner later approves leave;
- attendance event corrected with reason;
- shift changed after discussion.

The system should preserve raw event + authorized context/audit trail.

---

## 8. Payroll Support

Payroll capability is assistance, not autonomous punishment.

Smart Business may help calculate or prepare payroll-support information based on approved records and rules.

It must not:

- autonomously fine staff;
- dock wages as punishment;
- treat attendance anomalies as misconduct verdicts;
- fabricate legal/payroll authority.

Consequential payroll changes remain human-controlled and auditable.

---

## 9. AI Behaviour

AI may:

- interpret staff/shift instructions;
- summarize attendance patterns;
- prepare roster/leave/payroll-support drafts;
- flag missing/conflicting records;
- ask clarification;
- explain records neutrally.

AI must not:

- accuse an employee of fraud or misconduct from anomaly signals;
- continuously surveil employees;
- create permission by inference;
- reveal Owner intelligence to staff;
- silently modify historical attendance/payroll records.

---

## 10. Channels

Owner/Manager/Staff interactions may occur through approved channels including WhatsApp, Conversation Workspace and visual workspace surfaces, always under the same Permission Engine.

No channel may bypass role boundaries.

---

## 11. Shared Foundations

Reuse:

- Permission Engine;
- Identity foundation;
- Human Language Layer;
- Conversation Engine;
- Universal Document Intelligence;
- Reminder Engine;
- Notification foundation;
- purpose-limited Location foundation;
- audit/history foundation.

---

## 12. Privacy and Dignity

The feature must preserve:

- minimum necessary staff data;
- business isolation;
- role-scoped visibility;
- purpose-limited location use;
- auditable corrections;
- no continuous tracking;
- no automated humiliation, accusation or punishment;
- no routine Team LIPS access to employee data without legitimate support/security purpose and authorization.

---

## 13. Failure and Exception Handling

Handle at minimum:

- duplicate check-in/out;
- missing shift;
- location unavailable;
- ambiguous employee identity;
- roster conflict;
- attendance correction request;
- approved leave after an absence event;
- unauthorized staff action;
- retry/idempotency;
- payroll-support data inconsistency.

A disputed HR event should enter review/context flow rather than being silently erased.

---

## 14. Acceptance Scenarios

Future verification should prove:

- Owner creates staff profile and scoped permissions;
- staff can perform permitted action but cannot access Owner intelligence;
- point-in-time attendance location works without continuous tracking;
- roster document preview/confirm flow;
- leave/absence context preserves original event;
- attendance correction is auditable;
- staff self-view is limited to permitted own data;
- payroll-support draft requires human control for consequential outcome;
- English/Malayalam/Manglish interaction;
- cross-business isolation.

---

## 15. Non-goals / Rejected Historical Behaviour

Rejected:

- continuous employee GPS surveillance;
- automated wage punishment/fines;
- AI misconduct verdicts;
- broad employee access to Owner financial intelligence;
- destructive rewriting of attendance/payroll history;
- assumed national-ID/KYC collection without a resolved legal/privacy basis.

---

## 16. Dependencies

Requires mature Permissions/Business Isolation and purpose-limited identity/location foundations. Document-heavy workflows depend on Universal Document Intelligence.

---

## 17. Completion Gate

Staff / HR is complete only when the permission model, attendance/roster/leave/payroll-support workflows, dignity safeguards, corrections and runtime evidence pass the normal Product Mission lifecycle.
