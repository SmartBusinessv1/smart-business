# SMART BUSINESS MISSION CONTROL

# Instruction 1.31 — SB-P-1.11 Token-Lifecycle Parameter Resolution

**Mission ID:** SB-P-1.11

**Mission Name:** Product Catalog & Pricing

**Lifecycle Activity:** Final Pre-Implementation Token-Lifecycle Parameter Resolution

**Executing Room:** Claude Code acting in the Database Specialist and Security Architecture roles

**Mission Status:** ACTIVE AFTER HUMAN MERGE

**Authorized By:** Mission Control

---

## 1. Mission Objective

Resolve only the two remaining D-068 link-preview-token lifecycle parameters:

1. the exact server-controlled token validity period; and
2. the exact retention, minimization, and purge policy for consumed and expired token records.

This is a final documentation-only parameter-resolution mission.

It does not reopen any previously resolved database design, Product Truth, Founder Decision, command surface, phase boundary, security binding, or implementation mechanism.

---

## 2. Current Accepted State

The following matters are already resolved and must remain closed:

- stored normalized comparison columns and named composite `UNIQUE` constraints;
- product-name and category-name normalization;
- SKU and barcode normalization and null behavior;
- archived identities remaining inside the uniqueness domain;
- `business_tax_settings` singleton enforcement through `UNIQUE (business_id)`;
- `catalog_link_preview_tokens` retained-row lifecycle rather than deletion on consumption;
- token uniqueness;
- token single-use state;
- initiating-actor binding;
- same-actor confirmation;
- business binding;
- expected-state or preview-state binding;
- replay rejection;
- retained audit evidence;
- D-068 atomic preview, confirmation, and commit safeguard;
- initial Phase 1 exclusion of scheduler and merchant-facing scheduled pricing;
- Owner-only initial Phase 1;
- command-only writes;
- the locked 28-command future surface;
- `system_errors` deferral;
- deterministic exact and normalized matching only;
- all Phase 2a, Phase 2b, Phase 3, scheduler, permission-engine, and conversational-engine gates.

No item above may be reconsidered, weakened, expanded, or replaced.

---

## 3. Authorized Output

Create only:

- `communication/live/report1.31.md`

Do not modify any existing file.

---

## 4. Authorized Question A — Exact Server-Controlled Validity Period

Determine one exact validity period for a newly issued `catalog_link_preview_tokens` token.

The resolution must specify:

- one exact duration in minutes;
- that the duration is fixed and server-controlled;
- that the client cannot supply, extend, renew, or override it;
- when the validity clock begins;
- the exact validity comparison boundary;
- treatment of clock skew;
- behavior after expiry;
- whether a fresh preview is required after expiry;
- whether token renewal is prohibited;
- locked-source traceability;
- security and usability rationale;
- whether a Founder decision is required.

### 4.1 Evaluation standard

Evaluate candidate durations using:

- sufficient time for a merchant to read and confirm a preview;
- minimal replay and stale-state exposure;
- WhatsApp-first and mobile workflow realities;
- same-session usability;
- human dignity and low-pressure confirmation;
- protection against accidental confirmation of an old preview;
- simplicity of explanation and verification;
- no dependence on Lovable, browser state, or client clocks.

Do not produce a range. Choose one exact duration.

### 4.2 Required disposition

Conclude with exactly:

```text
RESOLVED — TOKEN VALIDITY PERIOD ESTABLISHED
```

or, only if repository or locked-source conflict makes a safe choice impossible:

```text
BLOCKED — FOUNDER OR MISSION CONTROL DECISION REQUIRED
```

---

## 5. Authorized Question B — Retention, Minimization, and Purge Policy

Determine one exact lifecycle policy for consumed and expired token rows.

The resolution must distinguish:

1. active unconsumed tokens;
2. consumed tokens;
3. expired unconsumed tokens;
4. rejected or stale confirmation attempts;
5. the token secret or bearer value;
6. durable audit evidence;
7. operational cleanup responsibility.

The policy must specify:

- one exact retention period for consumed rows;
- one exact retention period for expired unconsumed rows;
- whether the raw usable token value is retained, irreversibly hashed, redacted, or nulled after consumption or expiry;
- the exact point at which the raw token becomes unusable;
- the minimum durable audit fields preserved after minimization or purge;
- whether rejected attempts create or update audit evidence;
- how replay investigation remains possible without retaining a usable token secret;
- whether audit evidence belongs in the token row, `catalog_audit_events`, or both conceptually;
- the purge trigger and responsible future mechanism;
- behavior when the purge mechanism is not yet implemented;
- business-isolation and actor-privacy requirements;
- locked-source traceability;
- security, privacy, storage, and auditability rationale;
- whether a Founder decision is required.

### 5.1 Mandatory audit evidence

At minimum, preserve durable evidence sufficient to establish:

- business identity;
- token-record or correlation identity;
- initiating actor;
- consuming actor, when consumption occurred;
- preview or expected-state identity or digest;
- issue time;
- expiry time;
- consumption time, when applicable;
- final lifecycle outcome;
- rejection or stale-state reason, when applicable;
- command correlation or idempotency reference, when applicable.

Do not retain more personal or sensitive data than is needed for auditability and replay investigation.

### 5.2 Mandatory safety boundary

The raw token value must not remain usable after consumption or expiry.

The report must explicitly distinguish:

```text
AUDIT RETENTION
```

from:

```text
TOKEN USABILITY
```

Retaining audit evidence must never reactivate or preserve the usability of the bearer token.

### 5.3 Purge mechanism boundary

This mission may define a future purge responsibility conceptually, but it may not:

- design a scheduler implementation;
- create a worker;
- create SQL;
- create a migration;
- create a function;
- create a cron job;
- authorize `pg_cron` or `pg_net`;
- authorize an Edge Function;
- authorize infrastructure or deployment.

If cleanup requires a future mechanism, name the future authority required without designing or implementing it.

### 5.4 Required disposition

Conclude with exactly:

```text
RESOLVED — TOKEN RETENTION AND PURGE POLICY ESTABLISHED
```

or, only if a safe policy cannot be fixed without changing Product Truth:

```text
BLOCKED — FOUNDER PRODUCT DECISION REQUIRED
```

---

## 6. Required Parameter Matrix

Include exactly this matrix:

| Parameter | Exact Value or Policy | Server-Controlled Rule | Security Rationale | Usability / Human Rationale | Locked-Source Traceability | Final Disposition |
|---|---|---|---|---|---|---|

The matrix must contain rows for:

- validity duration;
- validity start point;
- expiry boundary;
- renewal behavior;
- consumed-row retention;
- expired-row retention;
- raw-token treatment after consumption;
- raw-token treatment after expiry;
- durable audit evidence;
- rejected-attempt evidence;
- purge trigger;
- future cleanup authority.

---

## 7. Required Lifecycle Timeline

Provide a concise lifecycle timeline using these states:

```text
ISSUED
ACTIVE
CONSUMED
EXPIRED
MINIMIZED
PURGE-ELIGIBLE
PURGED OR DURABLE-AUDIT-ONLY
```

For each transition, identify:

- triggering event;
- allowed actor or server process;
- token usability after the transition;
- audit evidence retained;
- rejection behavior for later replay.

This must remain conceptual documentation, not executable state-machine code.

---

## 8. Evidence Rules

Use, in order:

1. locked Smart Business sources;
2. Founder Decisions D-001 through D-068;
3. accepted SB-P-1.11 reports and Mission Control dispositions;
4. existing repository security and audit precedents;
5. clearly labeled specialist inference.

Do not silently convert inference into locked Product Truth.

Do not use external web research unless the repository evidence is insufficient to evaluate a database or security fact. If external research becomes necessary, stop and report the exact insufficiency instead of browsing under this mission.

Do not ask Lovable any question.

---

## 9. Explicit Prohibitions

Do not:

- reopen DBR-001 through DBR-005;
- modify `report1.29.md` or `report1.30.md`;
- modify any locked document;
- modify any prior instruction or report;
- create executable SQL;
- create migrations;
- create schemas, tables, columns, generated columns, constraints, or indexes;
- create RLS policies;
- create RPCs, functions, triggers, workers, or Edge Functions;
- create roles or grants;
- create application code or tests;
- create a scheduler design;
- activate `pg_cron` or `pg_net`;
- create a Founder Lovable Brief;
- create an implementation authorization;
- use Lovable Plan Mode;
- use Lovable Build Mode;
- consume Lovable credits;
- publish or deploy;
- change Product Truth;
- create or modify a Founder Decision;
- change governance;
- expand beyond the two authorized parameters.

---

## 10. Final Readiness Conclusion

Conclude the report with exactly one:

```text
TOKEN-LIFECYCLE PARAMETERS RESOLVED — PHASE 1 READINESS MAY PROCEED TO MISSION CONTROL REVIEW
```

```text
TOKEN-LIFECYCLE PARAMETERS PARTIALLY RESOLVED — NAMED DECISION REMAINS
```

```text
TOKEN-LIFECYCLE PARAMETERS BLOCKED — FOUNDER DECISION REQUIRED
```

Do not claim that implementation is authorized.

---

## 11. Authority Status

```text
FOUNDER LOVABLE BRIEF: NOT AUTHORIZED
PASTE-INTO-LOVABLE AUTHORITY: NONE
LOVABLE PLAN MODE: PROHIBITED
LOVABLE BUILD MODE: PROHIBITED
IMPLEMENTATION AUTHORITY: NONE
```

---

## 12. Branch, Quality, and Review Requirements

- synchronize from the latest `origin/main` using fetch, prune, and fast-forward only;
- use a new protected mission branch;
- create only `communication/live/report1.31.md`;
- run the repository Markdown repair, lint, and validation gates;
- record the synchronized base SHA, branch name, substantive commit SHA, PR number, and exact changed-file list;
- open a pull request for human review;
- do not approve or merge your own pull request.

---

## 13. Completion Report Requirements

`report1.31.md` must confirm:

- both parameters investigated;
- one exact validity duration selected or a precise blocker recorded;
- one exact retention-and-purge policy selected or a precise blocker recorded;
- raw-token usability and audit retention distinguished;
- resolved database design not reopened;
- no existing file modified;
- no implementation artifact created;
- no Lovable mode used and no Lovable credits consumed;
- no Product Truth or Founder Decision changed;
- Founder Lovable Brief remains unauthorized;
- paste authority remains none;
- implementation authority remains none.
