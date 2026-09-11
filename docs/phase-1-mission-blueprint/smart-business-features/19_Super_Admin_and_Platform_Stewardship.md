# Smart Business Feature Definition — Super Admin & Platform Stewardship

**Status:** MATURE RECONCILED CONTRACT — FULL HYDRATION PASS  
**Build commitment:** **BUILD NOW within approved internal scope**  
**Commercial availability:** Internal Team LIPS platform operations capability  
**Authority boundary:** Super Admin stewards platform health, security, support and commercial operations. It is not a merchant-business-owner role and does not grant routine access to merchant private business intelligence.

---

## 1. Feature Identity

Super Admin is the hidden/internal operations plane for Team LIPS to safely run Smart Business as a SaaS platform.

It supports platform stewardship such as:

- health/error visibility;
- quarantine/security operations;
- backup/storage oversight;
- support ticket operations;
- onboarding/growth control;
- subscription/entitlement operations;
- AI usage/quality/cost monitoring;
- operational analytics;
- provider/integration health;
- controlled release/onboarding state where approved.

It must be privacy-bounded and auditable.

---

## 2. Founder Problem Statement

A real SaaS product cannot be operated safely without an internal view of:

- system failures;
- support demand;
- data-processing health;
- subscription/account state;
- AI/provider cost and quality;
- backup/storage posture;
- onboarding load;
- release/incident conditions.

But giving platform operators broad routine access to merchant sales, profit, customer debt or private records would violate the Lighthouse trust model.

The challenge is therefore **operational visibility without casual merchant surveillance**.

---

## 3. Lighthouse Principles

- Merchant data belongs to the merchant.
- Platform stewardship is not merchant decision authority.
- Least privilege.
- Purpose-limited access.
- Every privileged path should be auditable.
- Aggregate/health telemetry by default; merchant-content access only when justified.
- Support investigation requires a real support/security purpose.
- Do not hide broad master-key access behind a friendly admin UI.

---

## 4. Hidden/Internal Route

The approved internal route is:

`/super-admin`

It must remain hidden/internal and protected by explicit authorization.

The route existing alone does not mean the feature is implemented.

---

## 5. Platform Health

Super Admin may expose system-level health such as:

- frontend/backend availability;
- API/edge/server-function failures;
- database/storage health;
- queue/scheduler/job failures;
- integration/provider status;
- latency/error trends;
- parser/import failures;
- WhatsApp delivery health;
- payment/billing integration health;
- backup/restore status.

Health views should avoid displaying merchant private content when metadata/aggregate state is sufficient.

---

## 6. Error Registry / Quarantine

Platform operators should be able to understand and act on operational failures through a controlled error/quarantine view.

Useful information may include:

- error category;
- affected component;
- first/last occurrence;
- counts/trend;
- business/user reference where operationally required;
- sanitized context;
- current owner/assignee;
- resolution status;
- related evidence/logs.

Raw sensitive payloads should not be displayed by default merely because they are available in logs.

---

## 7. Support Operations

Support tickets should integrate with Super Admin for:

- queue/status;
- issue category;
- merchant/account reference;
- troubleshooting steps;
- permitted temporary diagnostic access;
- resolution history.

Merchant-specific content access must follow current Support framework:

- unresolved/account-specific need;
- mutual agreement/authorized support purpose where applicable;
- module-scoped least privilege;
- time/purpose bounds;
- auditability;
- access revoked when purpose ends.

A ticket does not grant unrestricted merchant-data access.

---

## 8. Merchant / Account Administration

Super Admin may support approved operational administration such as:

- account/business lookup by safe identifiers;
- subscription/entitlement state;
- onboarding/provisioning state;
- account status;
- support/security flags;
- reactivation/recovery actions where authorized.

Platform operators must not impersonate the merchant or change business facts merely for convenience.

---

## 9. Subscription and Entitlement Operations

Approved platform users may manage or investigate:

- plan/add-on entitlement state;
- billing-provider reconciliation;
- payment failure state;
- administrative corrections with audit;
- lifecycle issues.

Commercial admin actions must remain separate from merchant financial records.

---

## 10. Onboarding / Growth Control

Historical Founder intent included controlled cohort growth and `open / waitlist / closed` style platform gating.

Current product truth preserves the **capability for controlled onboarding/release**, while exact historical 250-merchant cap/status strings are implementation history unless separately reaffirmed.

Super Admin may therefore support approved controls for:

- onboarding open/paused/closed state;
- waitlist/queue where current growth plan uses it;
- pilot/cohort limits;
- release readiness signals.

These controls must not silently redefine product scope or pricing.

---

## 11. AI Operations / Quality / Cost

Super Admin may expose privacy-respecting platform telemetry such as:

- model/provider usage;
- token/compute cost;
- failure rates;
- latency;
- fallback usage;
- confidence/clarification metrics;
- AI quality indicators;
- abuse/fair-usage signals where governed.

Prefer aggregate/system telemetry. Do not turn AI observability into routine reading of merchant conversations/business intelligence.

---

## 12. Product / Adoption Analytics

Appropriate aggregate/platform metrics may include:

- active merchants;
- lifecycle transitions;
- feature adoption;
- onboarding conversion;
- support volume;
- error rates;
- storage growth;
- AI usage/cost;
- performance;
- reliability;
- trial/paid conversion if a trial policy exists.

Metrics must respect privacy and should not expose individual merchant intelligence unless operationally necessary and authorized.

---

## 13. Backup / Storage / Recovery

Platform stewardship may include visibility/control for:

- backup status;
- restore readiness;
- storage capacity/growth;
- retention jobs;
- archival/deletion jobs;
- failed data-maintenance processes.

Recovery tools must not become unrestricted browsing interfaces.

---

## 14. Privileged Access Model

Super Admin access should be role/capability-scoped.

Possible internal capabilities may be separated, for example:

- platform health;
- support operations;
- billing/account operations;
- security incident response;
- deployment/release operations.

A single broad permanent master role should not be the default operational model.

Privileged actions require strong authentication and audit appropriate to risk.

---

## 15. Merchant-content Access Boundary

By default, Super Admin should see operational metadata rather than merchant-content detail.

If a legitimate support/security purpose requires merchant-specific content:

1. identify the purpose;
2. verify authority/consent/process required by governance;
3. scope access to the minimum module/data/time;
4. record privileged access;
5. perform the support/security task;
6. revoke/end access when the purpose ends.

Routine browsing of merchant sales/profit/credit/customer records is rejected.

---

## 16. Security and Incident Response

Super Admin may help with:

- suspicious platform activity;
- compromised integration/provider state;
- quarantine/recovery;
- privileged-session review;
- incident evidence;
- emergency disabling of a narrow unsafe path.

Security intervention should be narrow whenever possible. One incident does not justify global unrelated merchant disruption.

---

## 17. Auditability

Privileged actions should preserve, as applicable:

- internal actor;
- role/capability;
- target business/account/component;
- action;
- purpose/reason;
- time;
- result;
- elevated-access grant/revocation;
- related ticket/incident/change reference.

Audit must be protected from routine tampering.

---

## 18. Notifications / Escalations

Platform alerts should prioritize meaningful operational risk rather than noise.

Examples:

- repeated provider failure;
- backup failure;
- security incident;
- billing integration degradation;
- queue growth;
- critical latency/error spike.

The internal notification system should support ownership/acknowledgement where useful.

---

## 19. Error and Exception Behavior

Handle:

- admin authorization failure;
- partial telemetry outage;
- stale metrics;
- provider outage;
- failed privileged action;
- conflicting billing state;
- failed backup/restore;
- access-grant expiry;
- support ticket without sufficient authorization;
- audit write failure.

Privileged uncertainty must fail safely.

---

## 20. Shared Foundations to Reuse

Reuse:

- internal authentication/authorization;
- audit/security logging;
- subscription/entitlement services;
- Support Automation/ticketing;
- platform telemetry;
- Notification foundation;
- onboarding/lifecycle controls;
- backup/storage systems.

Super Admin should not duplicate merchant-domain business logic.

---

## 21. Explicit Non-goals

- merchant business-owner mode;
- routine Founder/Team LIPS browsing of merchant sales/profit/customer debt;
- permanent unrestricted service-role/master-key operations;
- silent support impersonation;
- AI-generated merchant decisions;
- using private merchant data for unrelated monetization.

---

## 22. Acceptance Scenarios

A future Blueprint/EIS must verify at least:

1. Unauthorized user cannot access `/super-admin`.
2. Internal role sees only assigned platform capabilities.
3. Platform health can be monitored without merchant-content exposure by default.
4. Support ticket does not grant unrestricted data access.
5. Purpose-limited temporary access is auditable and revocable.
6. Subscription/admin correction records actor/reason/result.
7. AI usage/cost metrics are available without routine merchant conversation reading.
8. Backup/storage failure is visible and actionable.
9. Security incident can disable a narrow path without unnecessary global shutdown.
10. Privileged action audit cannot be bypassed through ordinary UI.
11. Controlled onboarding state does not hardcode old 250-merchant rule unless separately authorized.

---

## 23. Historical Corrections / Superseded Behavior

Preserved:

- strong internal platform operations cockpit;
- controlled onboarding/growth capability;
- health, support, subscription, AI quality/cost and backup stewardship.

Superseded:

- routine broad merchant-data browsing;
- unrestricted permanent service-role access as normal operations;
- Super Admin acting as merchant decision-maker.

Historical 250-merchant cap and exact status strings remain provenance unless reaffirmed.

---

## 24. Provenance and Hydration Coverage

Reconciled from Founder-origin Section 6 and Section 7; Ground Zero platform-control history; planning/project-room operations history; Final Feature Reconciliation Register §27 and §§28–31; Source 06 support/privacy principles and current security governance.

**Hydration result:** current approved Super Admin/platform-stewardship behaviors and privacy boundaries are represented here, while historical broad-access assumptions are explicitly rejected.

---

## 25. Completion Gate

Complete only when internal authorization, health/telemetry, support/billing/onboarding operations, purpose-limited merchant access, security response, backups, privileged audit and runtime acceptance are proven end-to-end.
