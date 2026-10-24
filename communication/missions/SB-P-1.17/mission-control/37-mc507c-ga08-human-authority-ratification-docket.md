# MC-507C — GA-08 Permission Representation Acceptance: Human-Governance Ratification Docket

**Status:** DRAFT — NOT AUTHORIZED; pending accountable human acceptance, independent scope review, Founder human merge, and Mission Control post-merge verification.
**Mission:** SB-P-1.17, Stage 10; Source 18 v1.2.
**Prepared under:** Founder MC-507 direction, MC-502, and MC-507B verification.
**Baseline:** `main@64d5a6e78361bffd4652bb8dbfc05759c8347fcf`.
**Purpose:** Carry the already-reviewed GA-08 selection to human-governed authority without impersonating the unavailable historical SB-P-1.12 Mission Control conversation.

## 1. Decision evidence and authority limit

- SB-P-1.12 EIS: `docs/phase-1-mission-blueprint/implementation/SB-P-1.12-EIS.md`; blob `c444f7509477d0e8b997af538440d93bf2ca4d72`; `EIS-KER-03/04/08/09`, `EIS-CNF-02`, `EIS-PPM-02/03/04`, `EIS-EXT-01`.
- Locked SB-P-1.17 Blueprint: `docs/phase-1-mission-blueprint/completed/SB-P-1.17.md`; blob `bc4615f84959a79e6b242f622aae928901fbe959`; Founder `17:FPDR-1` and EQ17-01.
- Current SB-P-1.17 EIS: `docs/phase-1-mission-blueprint/implementation/SB-P-1.17-EIS.md`; blob `cbb089fe77fc53aa0adbbaedd8236af9faa532c0`; `EIS17-AUTH-02/03`.
- MC-502: `communication/missions/SB-P-1.17/mission-control/36-mc502-consolidated-gate-a-technical-disposition-and-bounded-eis-correction-authorization.md`; blob `4f3288b701ddb88396759b0ffc7fc9e9393cc04e`; Tier 2 `AUTH-02` is conditional on permissions-owner written acceptance.
- Founder-supplied GA-08 Security/Identity room response dated before this docket states `DECISION: ACCEPT` and proposes normalized server-owned scoped grant rows. That **room assertion is technical decision evidence**; the room's appointment as accountable SB-P-1.12 contract owner was not independently established from canonical governance records. This docket does not silently promote the response into an existing human approval.
- SB-P-1.12 historical Mission Control conversation is unavailable; its approved canonical contracts remain intact. No new AI conversation inherits its upstream approval power.

## 2. Exact proposed technical representation (no new Product Truth)

**Candidate:** `delegated_grant -> business_id -> scope_type -> object_id` with server-owned normalized scoped grant rows. Allowed operational scope dimensions: `item`, `supplier`, `counter`, restricted to the grant's business and specific capability.

Enforce one qualifying grant for each required action/object predicate, with no stitching together partial grants into broader authority. Capability 2's optional Owner-set value ceiling belongs to its qualifying grant; verify at preview and consequential commit. Changes, expiry and revocation participate in `EIS-KER-09` epoch handling and `EIS-CNF-02` commit-time reauthorization. Preserve capability 5 and standing-rule creation as Owner-only. No Manager operational grant implies `catalog.cost.read`, `catalog.cost.write`, `catalog.margin.read`, Ask CFO or Owner financial projections. Employee own-attendance access remains separately permitted and own-record only. No new principal, grant class or RLS privilege is introduced.

**Proposed disposition:** Approve this as the faithful Phase 1 *representation* of already approved scope constraints under the locked SB-P-1.12 kernel and `17:FPDR-1`; not an upstream kernel amendment and not a new Founder Product Truth choice. This is a proposal pending attribution and recorded human authorization.

## 3. Human-governed acceptance required — NOT YET GIVEN IN THIS RECORD

Before the proposed representation becomes effective as the GA-08 accountable-owner decision, an authorized human decision maker must record:
1. their identity, current accountable source-contract authority or explicit Founder delegation, and its canonical source;
2. `ACCEPT`, `REJECT` or `ESCALATE` for the exact §2 representation;
3. SB-P-1.17 operational concurrence, with separate accountable provenance where needed;
4. whether the choice stays within locked SB-P-1.12 normative meaning (no upstream amendment), and T1–T8 screening;
5. the exact permitted correction boundary and retained constraints.

**Approval outcome:** PENDING. This draft PR is a review vehicle, not an attestation by its author that all items above have been satisfied. A Founder human merge alone cannot fabricate a missing source-domain decision; reviewers should provide the required authority evidence or record a bounded Founder-governance ratification under Source 18 before merge.

## 4. Conditional next EIS-only correction instruction — NOT EFFECTIVE YET

**Trigger:** Canonical human-merged acceptance record with verified authority and SB-P-1.17 concurrence, followed by Mission Control post-merge verification.

Only after that trigger, Mission Control may issue a *separate*, precise EIS-only correction instruction against the then-current main blob to replace the `EIS17-AUTH-02` EQ17-01 encoding sentence with the accepted normalized-row representation and necessary non-union, ceiling, commit-time/revocation and protected-finance boundaries.

Do not alter `EIS17-AUTH-03`, upstream SB-P-1.12 EIS, locked Blueprint/FCTM, capabilities, grants, RLS, SQL or implementation. Retain open holds and all existing independent security tests and owner protections. Require exact diff and SHA, independent SA-01 security review, Founder human merge and Mission Control post-merge verification. Do not close EQ17-01 solely on PR preparation.

## 5. Parallel lanes and STOP

GA-02 `POS-02/HOLD-15`, GA-04 `TXN-03/HOLD-17`, GA-05 `TXN-06/07/HOLD-18`, GA-06 `CC-03/04/06/HOLD-19/23` and residual Blueprint T8-03 retain independent evidence and authorization conditions. This proposal neither blocks ready rows nor permits their unapproved editing.

**STOP FOR HUMAN SOURCE-AUTHORITY ACCEPTANCE, INDEPENDENT GOVERNANCE REVIEW, FOUNDER HUMAN MERGE AND MC POST-MERGE VERIFICATION.** No EIS edit, self-merge, hold closure, Stage 11 or implementation authority.
