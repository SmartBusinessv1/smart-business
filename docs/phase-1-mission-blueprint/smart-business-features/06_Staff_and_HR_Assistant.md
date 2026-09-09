# Smart Business Feature Definition — Staff / HR Assistant

**Status:** NOTEBOOKLM SEED — DEEP EXTRACTION REQUIRED  
**Build commitment:** BUILD NOW  
**Commercial availability:** Ledger + Manager add-on  
**Authority boundary:** Founder-feature elaboration / Product Blueprint input. Not yet implementation-ready.

---

## 1. Feature Identity

Staff / HR Assistant helps small businesses manage workforce records, attendance, shifts, leave and payroll support without turning the Owner into an HR software operator.

It must preserve employee dignity, Owner authority and permission-scoped access.

---

## 2. Seed Capabilities

NotebookLM briefing directly supports:

- staff profiles and records;
- QR attendance;
- geofence verification;
- shifts;
- duty rosters;
- photo/handwritten roster updates through Universal Document Intelligence;
- leave tracking;
- payroll support;
- employee role-based access.

Current Product Truth also supports attendance correction requests and Owner/Manager-controlled corrections.

---

## 3. Attendance Principle

Attendance records facts.

Smart Business must not automatically judge an employee from a timestamp alone.

Human business context may explain why a raw event differs from the approved attendance state.

The history must preserve both the original event and the approved context/correction rather than silently rewriting the past.

---

## 4. Employee Permission Seed

Employees may, when permitted:

- mark attendance;
- view their own attendance;
- request correction;
- interact with assigned operational information.

Employees must not receive Owner financial intelligence merely because they participate in HR workflows.

---

## 5. Duty Roster Seed Flow

The NotebookLM briefing explicitly supports photo-based duty roster updates.

Expected high-level flow:

**Owner/approved Manager uploads roster photo → system interprets → preview → confirmation → shift records update.**

The deeper extraction must establish conflicts, missing staff, overlapping shifts, changed schedules, notifications and correction behaviour.

---

## 6. Location / Geofence Seed

QR attendance may use geofence verification to confirm that attendance marking occurs at an approved location.

Location use must remain limited to the approved attendance purpose and should not become uncontrolled employee tracking.

---

## 7. Payroll Seed

The briefing confirms payroll support but does not yet provide enough detail for calculation rules.

This is intentionally not expanded beyond the evidence currently available.

NotebookLM must recover inputs, approval, corrections, employee visibility, overtime/leave interaction and reporting before engineering.

---

## 8. Unresolved Deep-Extraction Questions

NotebookLM must still establish:

- staff profile fields;
- role and permission configuration;
- QR generation/rotation expectations;
- geofence radius and exceptions;
- check-in/check-out and shift rules;
- late/early/missing attendance behaviour;
- correction-request lifecycle;
- human-context override history;
- duty roster conflict handling;
- leave types and approvals;
- overtime handling;
- payroll calculation/support depth;
- employee notifications;
- Manager vs Owner approval scope;
- exports and reports;
- privacy/retention of location data.

See NotebookLM question bank Questions 52–57.

---

## 9. Completion Gate

This file protects the feature family and known boundaries.

It must not be converted into an EIS until the detailed NotebookLM workforce answers are recovered and reconciled with current Product Truth.
