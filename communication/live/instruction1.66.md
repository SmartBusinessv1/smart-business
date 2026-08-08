# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-ID-1 — OWNER IDENTITY & BUSINESS CONTINUITY ASSESSMENT

**Mission ID:** SB-P-1.11-ID-1

**Mission Name:** Owner Identity & Business Continuity Assessment

**Mission Status:** ACTIVE

**Authorized By:** Mission Control

**Classification:** BUILD NOW — release-blocking continuity work

---

## 1. Mission Objective

Resolve the release-blocking identity discontinuity discovered during `SB-P-1.11-CP-1` before Founder preview can continue.

The controlled-preview application is bound to canonical production Supabase, while the original Founder-owned business workspace and its original email-based identity remain in the legacy Lovable Cloud backend.

This mission shall establish the exact continuity requirements and produce the smallest safe, implementation-ready migration plan before any production identity or business write occurs.

This is not a feature mission.

This is not a general migration mission.

This is not permission to recreate users or businesses manually.

---

## 2. Locked Environments

Canonical production Supabase:

`gysgzasfcjvtrgaigfyn`

Dedicated test Supabase:

`drravyyauixltoihzmwo`

Legacy Lovable project:

`64c2b9b1-2461-4045-9acc-19e2658b8ca2`

Legacy Lovable Cloud backend:

`wwgqnshcgbukqczqblsm`

The Founder has manually verified in the legacy Lovable Cloud UI that:

- the original email-based Founder identity exists in the legacy Auth store;
- a separate Google-authenticated identity also exists there;
- the legacy `businesses` table contains two distinct businesses owned separately by those two identities;
- the Founder-owned legacy business maps to the original email-based identity;
- the original email-based Founder identity is absent from canonical production Auth.

This mission shall independently re-verify these facts where tooling permits.

---

## 3. Release Impact

`SB-P-1.11-CP-1 — Controlled Preview & Founder Acceptance` remains paused at:

`AWAITING FOUNDER ACCEPTANCE`

Founder acceptance cannot proceed truthfully until a valid Founder Owner identity and corresponding business workspace exist in the canonical production environment.

Public publish, deploy, and domain cutover remain on HOLD.

---

## 4. Authorized Scope

This mission is authorized to perform read-only investigation and migration planning only.

It shall determine:

1. the full legacy business row owned by the original Founder identity;
2. every legacy record that references that business directly or indirectly;
3. whether any consequential merchant data exists under that business;
4. the complete canonical production state for Auth, `businesses`, and dependent tables;
5. whether the legacy Auth UUID can and should be preserved in canonical production;
6. if UUID preservation is not appropriate, the safest new canonical Auth identity strategy;
7. the exact ownership remapping required for the business and dependent records;
8. whether the legacy business row itself should be migrated, recreated, or intentionally left behind;
9. whether the second legacy business/account has any relationship to the Founder preview requirement or must remain out of scope;
10. the minimum reversible production-write sequence required for continuity.

---

## 5. Mandatory Read-Only Inventory

### 5.1 Legacy backend

Inspect the legacy Lovable Cloud backend read-only.

For the Founder-owned legacy business, capture the complete business row and identify every dependent row across all available tables.

At minimum inspect:

- `businesses`
- `transactions`
- `transaction_correction_events`
- `inventory_items`
- `inventory_movements`
- `inventory_movement_idempotency_keys`
- any other legacy table actually present that references the business or owner identity

Do not assume a table is empty without checking.

Do not mutate legacy data.

### 5.2 Canonical production

Inspect production Supabase `gysgzasfcjvtrgaigfyn` read-only.

Confirm:

- Auth state for the Founder identity and the second known legacy identity;
- business rows and ownership;
- dependent rows;
- whether any production business already claims the Founder identity or equivalent business identity;
- whether introducing the continuity record would collide with existing uniqueness, foreign-key, RLS, or command architecture.

No production write is authorized.

### 5.3 Dedicated test project

Inspect `drravyyauixltoihzmwo` only as needed to determine whether the proposed continuity procedure can be safely rehearsed later.

Do not repurpose the test project as production identity storage.

---

## 6. Identity Strategy Decision

The report must explicitly compare these strategies and select one.

### Strategy A — Preserve legacy Auth UUID

Assess whether canonical Supabase Auth can safely and supportably establish the original legacy Founder Auth UID.

Do not recommend direct Auth-table manipulation unless it is officially supported, operationally safe, and compatible with the project architecture.

### Strategy B — New canonical Auth UUID + controlled ownership remap

If preserving the legacy Auth UUID is unsupported or unnecessarily risky, define how a new canonical production Auth user will be established and how ownership will be remapped without ambiguity.

The plan must preserve:

- Founder ownership;
- business isolation;
- RLS correctness;
- auditability;
- no accidental second active owner for the same migrated business;
- no broken foreign-key relationships;
- no hidden dependence on the legacy backend.

### Strategy C — Use the already-existing canonical Google identity

Assess whether using the already-existing canonical Google identity as the Founder Owner would preserve product truth and historical ownership.

Do not choose this strategy merely because that user already exists in production.

Historical ownership evidence must control the decision.

---

## 7. Business Continuity Decision

For the Founder-owned legacy business, determine whether continuity requires:

- migrating the exact legacy business identity;
- recreating only the minimum business identity required for preview;
- migrating dependent operational data;
- or intentionally starting a clean canonical business while retaining legacy data as historical-only.

The decision must be evidence-based.

Do not migrate stale/demo/test data merely because it exists.

Do not discard meaningful merchant data merely for convenience.

Classify each legacy dataset as:

- `MIGRATE NOW`
- `RETAIN LEGACY ONLY`
- `RECREATE MINIMALLY`
- `DO NOT MIGRATE`
- `REQUIRES FOUNDER DECISION`

---

## 8. Required Migration Plan

Produce an implementation-ready plan containing:

1. exact canonical identity to establish;
2. expected Auth provider/login method;
3. expected new or preserved Auth UID strategy;
4. exact business row action;
5. exact ownership mapping;
6. exact dependent data actions by table;
7. test-project rehearsal steps where technically possible;
8. fresh production preflight queries/checks;
9. ordered production write steps;
10. rollback conditions and rollback steps;
11. post-write read-only verification;
12. sign-in verification path;
13. Founder preview resumption criteria.

The plan must minimize production writes and technical debt.

---

## 9. Security Requirements

The plan must preserve:

- one clear Owner identity per business;
- business-scoped RLS;
- command-only mutation architecture where applicable;
- no browser service-role usage;
- no direct exposure of privileged credentials;
- no cross-business ownership reassignment;
- no implicit transfer of the second legacy business;
- no weakening of existing catalog/security policies.

Any proposed exceptional administrative write must be explicitly identified as a one-time migration operation and justified.

---

## 10. Hard Boundaries

Do not:

- create a production Auth user;
- delete or alter any Auth user;
- insert/update/delete a production business;
- alter legacy Lovable Cloud data;
- alter RLS;
- alter function ownership;
- create a new public RPC;
- create a twentieth Catalog command;
- modify Catalog UX;
- change dependencies;
- connect Lovable to GitHub;
- enable Lovable Cloud on the canonical project;
- switch the canonical backend;
- publish;
- deploy;
- change `smartbusiness.teamlips.com` binding;
- fold a broader data-migration program into this mission.

If a required fact cannot be established read-only, STOP and document the evidence gap rather than guessing.

---

## 11. Required Deliverable

Create:

`communication/live/report1.72.md`

Title:

`SB-P-1.11-ID-1 — Owner Identity & Business Continuity Assessment`

The report must include:

- verified legacy identity mapping;
- verified legacy business mapping;
- complete legacy dependent-data inventory for the Founder-owned business;
- canonical production identity/business inventory;
- Strategy A/B/C comparison;
- selected identity strategy;
- business continuity classification by dataset;
- exact proposed production-write plan;
- rollback plan;
- security review;
- explicit statement that no production write occurred;
- final verdict.

Allowed verdicts:

- `READY FOR CONTROLLED CONTINUITY EXECUTION`
- `READY WITH FOUNDER DECISION REQUIRED`
- `STOPPED — EVIDENCE GAP`
- `FAIL`

---

## 12. Completion Discipline

After the report is complete:

1. run Markdown/repository quality gates;
2. open one completion PR containing `report1.72.md` plus only strictly necessary evidence artifacts;
3. summarize the selected continuity strategy and exact production-write scope proposed;
4. stop;
5. do not self-merge.

A `READY FOR CONTROLLED CONTINUITY EXECUTION` verdict does not itself authorize production writes.

A separate Mission Control execution authorization is required before creating or remapping any canonical production Owner identity or business record.

---

## 13. Next Logical Step

Execute this assessment immediately because it is the current release-blocking Build Now item. Once `report1.72.md` is reviewed, Mission Control shall authorize the smallest controlled continuity execution required to resume `SB-P-1.11-CP-1` Founder acceptance.