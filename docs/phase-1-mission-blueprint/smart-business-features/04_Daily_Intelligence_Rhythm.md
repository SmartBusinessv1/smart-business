# Smart Business Feature Definition — Daily Intelligence Rhythm

**Status:** MATURE RECONCILED CONTRACT  
**Build commitment:** **BUILD NOW**  
**Commercial availability:** Smart Business Ledger + Smart Business Manager core  
**Authority boundary:** Scheduled clarity only. Daily Intelligence informs; humans decide.

---

## 1. Feature Identity

Daily Intelligence is the proactive scheduled clarity layer of Smart Business.

It turns authorized Business Memory into concise, timely business awareness so the Owner does not have to remember every question or repeatedly open dashboards.

It is not a generic notification feed and not an autonomous management authority.

---

## 2. Current Founder-Approved Rhythm

The current schedule is:

- **7:00 AM — Morning Business Briefing**
- **10:30 AM — Business Pulse Check**
- **10:00 PM — Night Closing Intelligence**

Historical 6:00 AM / 9:15 AM variants are provenance only and must not be rebuilt as current truth.

Business timezone controls delivery.

---

## 3. Morning Business Briefing

The morning briefing should prepare the Owner for the day using available authorized facts.

Possible content, depending on enabled features and real data, includes:

- previous-day sales/purchases and important carry-forward context;
- outstanding customer/supplier credit requiring awareness;
- reminders due today;
- low-stock/reorder concerns;
- compliance/renewal deadlines;
- staffing/attendance items where Staff/HR is enabled;
- order/delivery commitments;
- unresolved exceptions requiring human attention.

It must not fabricate a section merely because the template contains it.

---

## 4. Business Pulse Check

The 10:30 AM pulse is a short operational check, not a second full morning report.

It may surface meaningful changes such as:

- sales/purchase activity since opening;
- unusual but factual operational signals;
- stock or order issues;
- reminders becoming urgent;
- payment/credit exceptions;
- Manager POS/counter signals where authorized.

No change is itself valid information; the system should avoid noise when nothing useful changed.

---

## 5. Night Closing Intelligence

The 10:00 PM closing view should help the Owner understand the day and what carries forward.

Depending on available data, it may include:

- sales/purchase summary;
- cash/payment awareness;
- credit and repayment movement;
- stock/reorder issues;
- unresolved orders/deliveries;
- reminders not completed;
- operational exceptions;
- tomorrow-facing items.

For Manager, closing-cash/POS operational depth may be richer when those capabilities are enabled.

---

## 6. Source-of-Truth Rule

Daily Intelligence must consume existing shared foundations rather than maintain separate business truth.

Primary sources can include:

- Ledger / Business Memory;
- Smart Credit Awareness;
- Payment Verification;
- Stock/Supplier/Reorder;
- POS/Counter Intelligence;
- Smart Reminder Engine;
- Staff/HR;
- Smart Order & Delivery;
- Compliance Shield;
- Universal Document Intelligence status;
- approved support/platform exceptions where user-relevant.

---

## 7. Roles and Permissions

### Owner

Receives full authorized Owner-level Daily Intelligence.

### Manager

Receives only information delegated for operational management. Manager does not automatically inherit Owner profit intelligence or Ask CFO access.

### Employee / Staff

Must not receive Owner Daily Intelligence by default. Staff may receive only explicitly permitted task/attendance/reminder information through the relevant feature.

Daily Intelligence must never become a shortcut around the Permission Engine.

---

## 8. Channel Behaviour

Daily Intelligence may be delivered through approved channels including:

- WhatsApp;
- Smart Business Conversation Workspace;
- dashboard/workspace surfaces where useful.

All channels must display the same underlying business facts and permission boundary.

WhatsApp failure must not stop Daily Intelligence computation or make the information unavailable through the web app.

---

## 9. Tone and Attention Design

Daily Intelligence should be:

- concise;
- calm;
- factual;
- prioritized;
- easy to scan;
- respectful of merchant attention.

It should not use fear-heavy language, gamified anxiety, accusation or artificial urgency.

Where no material action is required, say so simply.

---

## 10. Fact / Estimate / Signal Boundaries

The system must distinguish:

- confirmed facts;
- estimates;
- patterns;
- operational signals;
- missing or stale information.

Examples:

- `₹12,500 sales recorded today` is a fact if supported by Ledger data.
- `Sales are lower than your recent Tuesday average` is a pattern/analysis.
- `Possible stock risk` is not proof of a stockout.

---

## 11. Action Continuation

Daily Intelligence may offer user-selected next actions such as:

- open the relevant record;
- ask Ask CFO for explanation;
- create/snooze a reminder;
- review a payment match;
- review reorder suggestion;
- open an order/delivery exception.

Daily Intelligence itself does not execute consequential business actions without the normal permission and confirmation/delegation path.

---

## 12. Missing Data and Partial Feature Availability

If a source feature is not enabled or data is insufficient, Daily Intelligence must not invent content.

It may:

- omit the section;
- state that no reliable data is available;
- suggest the smallest useful next step.

One unavailable source must not block unrelated sections.

---

## 13. Failure and Delivery Handling

The feature must handle:

- delayed scheduler execution;
- duplicate job invocation;
- message delivery failure;
- WhatsApp outage;
- timezone changes;
- stale source data;
- partial upstream service failure;
- user notification preference changes.

Daily jobs must be idempotent enough to avoid duplicate merchant noise.

---

## 14. Human Language Layer

Daily Intelligence should support English, Malayalam and Manglish according to user preference and context.

Language should sound natural for Kerala merchants rather than like literal translation of financial software jargon.

---

## 15. Privacy and Dignity

Daily Intelligence must not:

- expose Owner financial intelligence to unauthorized staff;
- accuse employees/customers from anomaly signals;
- expose sensitive HR/customer data beyond role need;
- infer wrongdoing from missing or inconsistent data.

Operational risk should be framed as a review opportunity, not a verdict.

---

## 16. Acceptance Scenarios

Future Product Mission verification should prove:

- 7:00 AM briefing in business timezone;
- 10:30 AM pulse without unnecessary duplicate content;
- 10:00 PM closing summary;
- correct handling of no-data/partial-data states;
- no duplicate notifications on retry;
- WhatsApp delivery failure with web-app continuity;
- Owner vs Manager permission differences;
- Ask CFO/reminder continuation without bypassing authority;
- English/Malayalam/Manglish rendering;
- factual totals matching source systems;
- neutral, non-accusatory handling of operational signals.

---

## 17. Non-goals / Rejected Historical Behaviour

This contract does not authorize:

- old 06:00 / 09:15 schedules as current truth;
- continuous real-time surveillance disguised as intelligence;
- staff access to Owner intelligence by default;
- automatic business decisions based on a briefing;
- fake certainty when source data is incomplete;
- notification volume for its own sake.

---

## 18. Dependencies

Daily Intelligence depends on:

- Business Memory / Ledger;
- Permission Engine;
- Notification/Conversation foundation;
- scheduling infrastructure;
- Human Language Layer;
- whichever feature data sources are enabled.

It should extend gracefully as additional product families become operational.

---

## 19. Completion Gate

Daily Intelligence is complete only when the three current scheduled experiences, permission rules, source integrity, channel resilience and acceptance scenarios have been implemented and independently verified.
