# SMART BUSINESS MISSION CONTROL — MC-182

# SB-P-1.12 — Founder Continuity Decision Disposition and Canonicalization

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation  
**Date:** 2026-10-02  
**Owner:** Mission Control  
**Status:** DRAFT — EFFECTIVE ONLY AFTER HUMAN MERGE TO CANONICAL `main` AND POST-MERGE VERIFICATION  
**Input:** `communication/live/report1.44.md`  
**Baseline:** `main@0786ae8196334b2e9e98ccd92e686ef4a890d255`  
**Implementation Authorization:** WITHHELD  
**Candidate migration mission:** `SB-MIG-1.4` — NON-EXECUTABLE

## 1. Purpose

MC-181 required Founder decisions FD-C1 through FD-C7 before continuity activation authority could be considered. The Founder has now supplied all seven decisions. This record preserves their disposition without converting a Founder decision into implementation authority.

## 2. Canonicalization input

The Founder response is captured in:

- `communication/live/report1.44.md`

The exact Founder wording is authoritative for the decision content. No secret, credential, MFA seed, recovery code, API key or exact sensitive physical address is recorded.

## 3. Independent Mission Control disposition

### FD-C1 — site-independent continuity storage

**Disposition: ACCEPT — DECISION SUFFICIENT.**

The selected failure-domain model satisfies MC-181's decision requirement: one encrypted, multi-generation recovery copy may be held on normally disconnected external storage in a securely controlled off-site location physically separate from the Founder’s primary work location.

This does not activate backup creation, synchronization, encryption-key handling or restore operations.

### FD-C2 — independent secondary Git provider

**Disposition: ACCEPT — DECISION SUFFICIENT.**

GitLab.com is approved as the independent secondary provider. The continuity repository must remain private, downstream and non-canonical while GitHub remains canonical. Its authentication and recovery path must not depend on the affected GitHub identity.

No GitLab account, repository, token, remote or synchronization operation is authorized by this decision alone.

### FD-C3 — Linux parity host

**Disposition: ACCEPT — DECISION SUFFICIENT.**

WSL2 with Ubuntu on existing Team LIPS-controlled hardware is approved as the Linux parity class for corrected Local Governed Assurance validation.

No WSL2/Ubuntu installation, package installation, LGA execution or assurance substitution is authorized by this decision alone.

### FD-C4 — second human Supabase Owner candidate

**Disposition: FOUNDER DECISION RECORDED — CONTROL REMAINS OPEN / DEFERRED.**

The Founder has explicitly selected `not selected yet`. The second-human Owner continuity control is therefore not complete and no person is authorized for invitation or role change.

The Founder additionally stated:

> we will seriously consider this once we start getting active subscribers after phase 1 build is complete

Mission Control records that as the Founder’s timing intent. It is not a claim that the continuity control is already satisfied, and it does not authorize any Supabase membership or role mutation.

### FD-C5 — Supabase Support escalation

**Disposition: ACCEPT — ENQUIRY AUTHORITY CONFIRMED, MUTATION AUTHORITY NOT GRANTED.**

The Founder approves a narrow Supabase Support enquiry for dashboard/account recovery, reduced dependency on the affected GitHub-linked login path, and the supported future second-Owner process.

Any membership, authentication, MFA, key, project or production mutation remains outside this authority.

### FD-C6 — secrets recovery mechanism

**Disposition: ACCEPT — MECHANISM SELECTED, ACTIVATION NOT YET AUTHORIZED.**

1Password Teams Starter Pack is the selected organizational password-manager / secret-recovery mechanism. Secrets and recovery material must not enter Git or repository communication. Founder recovery material is to remain independent from normal working devices without recording its exact storage location in Git.

Credential migration, secret rotation, provider mutation and establishment of a second recovery-capable human owner remain separately gated.

### FD-C7 — mailbox/domain recovery ownership

**Disposition: ACCEPT — NARROW READ-ONLY EVIDENCE CHECK AUTHORIZED IN PRINCIPLE.**

The current state is treated as unknown until verified. A narrow evidence check may determine whether Team LIPS email and domain/DNS administration already have independent recovery paths beyond the Founder’s normal device and the affected GitHub identity.

No credential, MFA, DNS, registrar, mailbox or provider mutation is authorized.

## 4. MC-181 Founder-decision gate

FD-C1 through FD-C7 are sufficiently answered for Mission Control to continue the continuity sequence defined by MC-181.

This does **not** mean every continuity control is complete:

- FD-C4 / the second-human Supabase Owner control remains open and deferred;
- FD-C7 requires evidence;
- FD-C5 requires the approved support enquiry;
- FD-C1, FD-C2, FD-C3 and FD-C6 identify approved models or providers but are not yet activated.

## 5. Next sequencing decision

MC-181 §8 remains controlling.

After this MC-182 record and `report1.44.md` are human-merged to canonical `main` and Mission Control verifies the exact merge state, the next internal work package should be issued as `communication/live/instruction1.45.md`.

That work package must be narrowly limited to **MC-181 §8 step 1**:

- local bare Git continuity mirror;
- encrypted, multi-generation Git bundle recovery copies;
- one normally disconnected site-independent copy under FD-C1;
- required integrity evidence and rollback/stop conditions.

It must **not** create or seed the GitLab secondary remote yet; MC-181 §8 step 2 follows only after step 1 is completed and dispositioned.

No `instruction1.45.md` is issued by this draft record before canonicalization.

## 6. Preserved mission boundary

Unchanged:

- Implementation Authorization: WITHHELD;
- `SB-MIG-1.4`: NON-EXECUTABLE;
- EV-01: OPEN;
- EV-02: PARTIALLY EVIDENCED;
- SQL/migration authoring: NOT AUTHORIZED;
- migration execution: NOT AUTHORIZED;
- application implementation: NOT AUTHORIZED;
- runtime activation: NOT AUTHORIZED;
- test-fixture creation: NOT AUTHORIZED;
- production mutation: NOT AUTHORIZED.

The future continuity work package is operational-resilience scope only and does not grant Smart Business product implementation authority.

## 7. Merge gate

This record has no authority until:

1. the PR containing MC-182, `report1.44.md` and the required durable mission-index updates is human-merged;
2. Mission Control verifies the resulting canonical `main` SHA and exact file state.

Only after both conditions may Mission Control issue the sequential `instruction1.45.md` work package.

**FOUNDER CONTINUITY DECISIONS DISPOSITIONED — STOP FOR HUMAN MERGE AND POST-MERGE VERIFICATION**
