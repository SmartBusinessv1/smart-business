# SB-P-1.12 — Founder Decision Record 09

# Reference Cost / Margin Permission Semantics

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation  
**Stage:** Stage 10 EIS Review finding-scoped Founder decision  
**Founder:** Riyas PK  
**Date:** 2026-09-30  
**Decision status:** APPROVED  
**Trigger:** T8-EIS-1 raised by the Stage 9 EIS candidate in PR #687  
**Stage 9 candidate reviewed by Mission Control:** `9a9a4f390dbf04f6eb77e4f800bbb25ca2eab701`

## 1. Founder decision

The Founder approved the following Product Truth:

> For SB-P-1.12, Reference Cost and margin permissions govern Smart Business-provided fields, calculations, reports, aggregates and derived outputs. A Manager explicitly delegated Reference Cost may still see selling price where otherwise authorized; their ability to personally calculate a number from those separately authorized visible values does not itself constitute Smart Business granting the margin permission. Smart Business must not compute, label, display, report or expose margin unless margin is separately delegated. Margin computation/display semantics remain a separate future product definition unless explicitly approved.

## 2. Interpretation

This decision clarifies Founder Record 04 F-03 without replacing its existing rules.

The following remain true:

- Reference Cost is Owner-only by default.
- Margin is Owner-only by default.
- Each may be explicitly and separately delegated to an authorized Manager.
- Delegating one does not delegate the other.
- A general product read or bounded Manager view does not itself grant either permission.
- backend/data-layer enforcement remains mandatory.

This decision adds the semantic boundary that permission controls what Smart Business itself provides, computes or exposes.

Human arithmetic performed by a person using two values they were independently authorized to see is not classified as Smart Business granting an undelegated permission.

## 3. Consequences for EIS design

The EIS shall therefore:

- allow exact Reference Cost to a Manager with the explicit Reference Cost permission even when selling price is otherwise authorized and visible;
- not treat that visibility combination alone as a margin-permission violation;
- never compute, label, display, return, report, aggregate or otherwise expose margin unless margin permission is separately present;
- not invent a margin formula;
- not invent grouped/aggregate-only margin semantics;
- not infer that exact per-product margin is approved merely because margin permission exists;
- leave margin computation/display semantics undefined until separately approved Product Truth exists.

The EIS may enforce strict response shaping for any field or output Smart Business itself identifies as margin or a margin-derived output once that product semantic is defined.

## 4. T8-EIS-1 disposition

The product conflict raised as T8-EIS-1 is resolved by this Founder decision.

This does not resolve or alter:

- ESC-1;
- `22-§20-2`;
- G-6/T4;
- legal/privacy/retention validation;
- any implementation or production evidence gate.

## 5. Governance boundary

This record changes only the semantic interpretation necessary to resolve T8-EIS-1.

It does not authorize:

- EIS acceptance or lock;
- implementation package creation;
- schema;
- SQL;
- migrations;
- application code;
- provider mutation;
- production action.

The locked Blueprint remains authoritative except for this explicitly approved Founder clarification, which must be reconciled into the EIS through Mission Control's Stage 10 process.
