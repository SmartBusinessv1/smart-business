# SMART BUSINESS MISSION CONTROL — MC-150

# SB-P-1.12 — T8-EIS-1 Founder Decision Disposition

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation  
**Date:** 2026-09-30  
**Stage:** Stage 10 — EIS Review  
**Founder decision:** Founder Decision Record 09  
**Status:** DRAFT — EFFECTIVE ONLY AFTER HUMAN MERGE AND MISSION CONTROL POST-MERGE VERIFICATION

## 1. Finding

PR #687 at reviewed head `9a9a4f390dbf04f6eb77e4f800bbb25ca2eab701` validly raised T8-EIS-1.

The candidate also introduced an unapproved margin-only aggregate behavior. That behavior is not supported by locked Product Truth and must be removed.

## 2. Founder decision disposition

Founder Decision Record 09 resolves T8-EIS-1.

Mission Control interpretation:

- separate Reference Cost and margin permissions remain intact;
- exact delegated Reference Cost may coexist with otherwise-authorized selling price;
- human arithmetic on independently authorized values is not Smart Business permission leakage;
- Smart Business may not itself compute or expose margin without margin permission;
- no margin formula or display semantics are approved by this decision;
- grouped/aggregate-only margin behavior is not approved and must be removed from the EIS.

## 3. Stage 10 effect

PR #687 remains unmerged.

The Stage 10 review proceeds through a finding-scoped correction.

No whole-EIS restart is required.

After the correction:

- Mission Control will re-review the exact changed finding;
- independent Security specialist review will examine the corrected EIS, including ESC-1, authority/isolation, denial durability and the Reference Cost/margin boundary;
- Stage 10 acceptance remains separate from Stage 11 EIS lock.

## 4. Holds unchanged

- R-2: CLOSED / SATISFIED.
- ESC-1: OPEN T8.
- `22-§20-2`: BLOCKED / IN SCOPE.
- G-6/T4: UNVERIFIED.
- professional legal/privacy/retention validation: deferred.
- no implementation package.
- no implementation.
- no schema, SQL, migration, provider or production authority.
