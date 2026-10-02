# SMART BUSINESS MISSION CONTROL — MC-185

# SB-P-1.12 — Founder Source-Continuity Prerequisite and Parallelization Disposition

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation  
**Date:** 2026-10-02  
**Owner:** Mission Control  
**Status:** DRAFT — EFFECTIVE ONLY AFTER HUMAN MERGE TO CANONICAL `main` AND POST-MERGE VERIFICATION  
**Input:** `communication/live/report1.46.md`  
**Baseline:** `main@548b3330feecc4c9fcc3a78f8ec0e9189cc77ac8`  
**Implementation Authorization:** WITHHELD for Smart Business product implementation  
**Candidate migration mission:** `SB-MIG-1.4` — NON-EXECUTABLE

## 1. Purpose

MC-184 requested Founder decisions on encryption class and media availability. The Founder resolved both and then issued an additional execution-direction correction: unavailable hardware must not become a global blocker for independent continuity controls.

This record accepts that correction and replaces the prior strict-linear interpretation of MC-181 §8 with dependency-based parallel continuity tracks.

No continuity requirement is waived.

## 2. Founder prerequisite disposition

### SC-P1 — encryption class

**ACCEPT — DECISION SUFFICIENT.**

Approved class:

- hardware-encrypted external storage;
- unlock material controlled by the Founder or another explicitly authorized human custodian;
- unlock material excluded from Git and repository communication.

### SC-P2 — external media availability

**ACCEPT — PHYSICAL/OFFLINE TRACK PROCUREMENT BLOCKER CONFIRMED.**

Two suitable hardware-encrypted external storage devices must first be obtained.

This blocks the physical/offline source-recovery track only. It does not block independent tracks whose execution does not technically depend on those devices.

## 3. Binding physical/offline controls

Unchanged:

- no unencrypted internal-disk exemption;
- the continuity mirror must reside on verified encrypted storage;
- any PIN/passphrase/unlock secret is entered and retained by a human, never an AI actor;
- no secret value, recovery material or exact private physical address enters Git;
- the physical/offline track cannot be marked complete until the Founder confirms that the site-independent copy is normally disconnected and held in the approved separate-location class.

The physical/offline track remains mandatory Build Now work and must resume promptly when the required hardware becomes available.

## 4. Sequencing correction — dependency-based parallel continuity

MC-181 §8 remains authoritative for the required continuity outcomes, but its numbered order is no longer interpreted as a universal hard dependency chain.

Mission Control adopts four parallel tracks:

### Track A — Physical/offline source recovery

- verified encrypted local continuity mirror;
- encrypted multi-generation Git bundles;
- normally disconnected site-independent copy under FD-C1;
- first restore drill after the governed backup artifacts exist.

**Current state:** BLOCKED on hardware procurement. Mandatory; not cancelled or downgraded.

### Track B — Provider-independent source hosting

- private GitLab.com downstream continuity repository;
- authentication and recovery independent of the affected GitHub identity;
- GitHub remains canonical;
- seed and verify from exact canonical Git history;
- no force push, prune, mirror push or co-equal canonical history;
- secondary-ahead or non-fast-forward state is an incident.

**Current state:** MAY PROCEED under separately scoped MC-186 authority after this PR is human-merged and post-merge verified.

### Track C — Assurance resilience

- WSL2/Ubuntu parity environment;
- corrected Local Governed Assurance implementation/validation;
- independent LGA review;
- route-B / EV-01 disposition.

**Current state:** may be authorized independently later where its own prerequisites are satisfied. Not authorized by MC-185 alone.

### Track D — Administrative recovery

- Supabase Support enquiry and access-recovery evidence;
- FD-C7 mailbox/domain/DNS read-only evidence check;
- separately authorized 1Password activation/recovery-mechanism work;
- second-human Supabase Owner later when FD-C4 is resolved.

**Current state:** each subtask requires its own scoped authority. Not authorized by MC-185 alone.

## 5. Dependency rule

A blocked track blocks only tasks that technically or governance-depend on it.

Examples:

- the first offline restore drill depends on governed backup artifacts and therefore waits for Track A artifacts;
- GitLab continuity does not depend on external backup hardware and may proceed independently;
- independent LGA review depends on an LGA run;
- Supabase Owner mutation depends on provider/dashboard recovery and separate mutation authority.

Parallel execution must not be used to claim a blocked control complete.

## 6. Exact next action

Founder has directed Mission Control to start with Track B while Track A hardware is being obtained.

Therefore the next sequential communication is:

`communication/live/instruction1.47.md`

under MC-186, limited to creation and verification of the independent GitLab.com continuity repository.

When the two hardware-encrypted devices become available, Founder should inform Mission Control. Track A may then resume through a separately scoped retry instruction without waiting for Tracks B–D to finish.

## 7. Preserved mission boundary

Unchanged:

- Implementation Authorization: WITHHELD;
- `SB-MIG-1.4`: NON-EXECUTABLE;
- EV-01: OPEN;
- EV-02: PARTIALLY EVIDENCED;
- FD-C4 second-human Supabase Owner: OPEN / DEFERRED;
- SQL/migration authoring: NOT AUTHORIZED;
- migration execution: NOT AUTHORIZED;
- application implementation: NOT AUTHORIZED;
- runtime activation: NOT AUTHORIZED;
- test-fixture creation: NOT AUTHORIZED;
- production mutation: NOT AUTHORIZED.

**FOUNDER SOURCE-CONTINUITY PREREQUISITES AND PARALLEL EXECUTION MODEL DISPOSITIONED — STOP FOR HUMAN MERGE AND POST-MERGE VERIFICATION**
