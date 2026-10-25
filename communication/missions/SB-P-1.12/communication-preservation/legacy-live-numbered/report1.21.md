# SB-P-1.12 — Targeted Security Review of R-2 §33 Stage 2 / Stage 7 Candidate

**Report:** `communication/live/report1.21.md`
**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation
**Review authority:** MC-137 / `communication/live/instruction1.21.md`
**Reviewer:** Security & Permissions Architecture — existing MC-33-appointed specialist room
**Work package:** `SB-P-1.12-WP-R2-S33-SECURITY-REVIEW`
**Review type:** Targeted documentary / security-feasibility review only
**Status:** SUBMITTED FOR MISSION CONTROL DISPOSITION — NO MERGE OR IMPLEMENTATION AUTHORITY

## 1. Exact target and evidence verified

| Item | Exact reviewed identity |
|---|---|
| Canonical `main` used for this review/report branch | `cb7318c82369ea24232b5df0a5551dd7b007a45b` |
| PR | `#679` |
| PR state at review | OPEN / DRAFT / UNMERGED / MERGEABLE |
| Exact PR head reviewed | `193ebce8152389b33150e8b75543acd2c1234552` |
| PR base | `62514a23f946e0bba42b8494d2290817eec0d7ae` |
| Stage 2 obligation-inventory blob | `5a2ef63c21f4898263444e94390e5ab06306051d` |
| Stage 7 engineering-review blob | `617fadfe19a8a6657ec40cfacb4fbf8ecc04e1e3` |
| Blueprint v0.7 blob | `a9607bf3e9f7d1f025c4ad7abe73c2ac6c3b7fd6` |
| MC-136 completion-report blob | `a07f8d466cbe41fdd237e60efb810894372b6b99` |
| Live handover blob | `24aae4099bbe9556e126324620da885639cac057` |
| Canonical FCTM blob | `1650ff95b2fbdd63e1b0f60d8135da14a7a9d259` |
| Canonical Contract 22 blob | `61e1bb91970be410e9daf1d3b80875c35f29db04` |
| Accepted targeted Security report | `communication/live/report1.19.md`, blob `4665cb73472247a65433ac9e9da2594b60ea9700` |

Exact-head CI at `193ebce8152389b33150e8b75543acd2c1234552` was independently re-read:

- Team LIPS Markdown Quality Gate #2117 — **SUCCESS**
- Team LIPS Application Build Assurance #501 — **SUCCESS**

No drift was found in the PR head, candidate blobs or canonical source blobs named by MC-137.

PR #679 changes exactly the five MC-136-authorized paths. It does not edit the FCTM, Contract 22, Founder records, specialist Security reports, schema, SQL, migrations or application runtime.

---

## 2. Executive Security disposition

# SECURITY ACCEPTABLE FOR MISSION CONTROL DISPOSITION

The MC-136 candidate is security-conservative and materially faithful within the targeted review scope.

Independent conclusions:

1. The Stage 2 Contract 22 §33 source accounting is materially sound: 43 source pointers are represented by 39 FCTM rows with all four representation differences explicitly accounted for, no missing §33 obligation identified and no orphan §33 FCTM row identified.
2. The proposed Stage 7 result for the 39 new §33 rows — **3 FEASIBLE / 36 CONDITIONAL / 0 HELD / 0 BLOCKED** — is acceptable as a **feasibility classification**, provided the explicitly named ESC-1, historical-durability, legal/privacy/retention, cross-mission, execution-boundary and provider-evidence dependencies remain controlling.
3. No §33 row needs to be changed to row-level `HELD` or `BLOCKED` in this candidate. Several rows have durability or demonstration conclusions that remain held under ESC-1 and `22-§20-2`; that does not require changing their feasibility classification from `CONDITIONAL`.
4. The combined **179 FEASIBLE / 87 CONDITIONAL / 0 HELD / 1 BLOCKED** and **227 PENDING / 40 N/R** totals are acceptable.
5. The previous 228 Stage 7 register findings are substantively unchanged. I independently compared the 228 pre-§33 register lines at the PR base with the candidate: **228 vs 228, byte-identical, zero row-line differences**.
6. The newly surfaced `transactions.creator_id → auth.users ON DELETE CASCADE` path is independently confirmed in repository migrations, and the dependent `transaction_correction_events.transaction_id → transactions ON DELETE CASCADE` path is independently confirmed.
7. MC-137's classification of that path as an **additional technical manifestation of existing ESC-1** is security-sound. It does not require a separate Product Truth escalation on the evidence reviewed.
8. The exact delta introduces no new material security regression and does not justify weakening any previous Security hold.

R-2 remains OPEN. ESC-1 remains OPEN T8. This report does not merge-authorize PR #679 and creates no Stage 8, Blueprint lock, EIS, implementation, migration, deletion-runtime or production authority.

---

## 3. Stage 2 Contract 22 §33 source-accounting finding

### SEC-137-01 — §33 source inventory and FCTM representation

**Disposition: ACCEPT**

I independently re-counted Contract 22 §33 from canonical source text.

The §33 source structure yields **43 source pointers**:

| §33 source area | Pointer count |
|---|---:|
| §33.1 — two substantive paragraphs | 2 |
| §33.2 — seven numbered eligibility conditions + closing non-proof rule | 8 |
| §33.3 — three cross-mission paragraphs | 3 |
| §33.4 — four substantive paragraphs | 4 |
| §33.5 — five prohibitions + closing attribution paragraph | 6 |
| §33.6 — three governed-deletion/proof paragraphs | 3 |
| §33.7 — six record-class bullets + two closing rules | 8 |
| §33.8 — nine numbered acceptance items | 9 |
| **Total** | **43** |

The canonical FCTM represents §33 in exactly **39 rows**, `22-§33-1` through `22-§33-39`.

The four disclosed representation differences are materially valid:

1. **§33.3 ¶1–¶2:** two source pointers are mission-allocation statements and are recorded with §33.3 ¶3 in `22-§33-11` rather than treated as two additional product obligations: **−2**.
2. **§33.4 ¶3:** one source paragraph is split into two independently testable requirements — minimum necessary attribution and non-authorizing attribution: **+1**.
3. **§33.5 bullet 4 + closing paragraph:** both restate the non-authorizing-attribution rule already represented by `22-§33-15`: **−2**.
4. **§33.6 ¶1:** restates the governed-path condition already represented by `22-§33-9`: **−1**.

Net: `43 - 2 + 1 - 2 - 1 = 39`.

I identified no §33 source pointer without a representation and no §33 FCTM row without a source basis.

The current Stage 2 figures are therefore acceptable:

- Contract 22: **155 source pointers / 151 FCTM rows**;
- mission total: **414 source pointers / 412 FCTM rows**;
- §33: **43 source pointers / 39 FCTM rows**.

The existing Contract 17 +2 representation split remains separately explained and is not changed by this review.

**Security impact:** no missing identity-deletion, transfer-isolation, history, attribution, proof or cascade obligation was found in the §33 delta.

---

## 4. Stage 7 taxonomy applied to the 39 §33 rows

The candidate uses the existing Stage 7 meaning of the taxonomy:

- `FEASIBLE` is a documentary buildability assessment, not proof of implementation, runtime safety, production state or Security acceptance.
- `CONDITIONAL` is appropriate where buildability remains supportable but a named dependency, unresolved security design, evidence package or external determination must be satisfied.
- A held conclusion inside a row does not automatically require row-level `HELD`.
- `BLOCKED` is reserved where the row itself is blocked by the controlling T8 condition; the existing `22-§20-2` remains the explicit blocked durability row.

That distinction is important for the §33 rows whose eventual demonstration cannot succeed while ESC-1 remains unresolved.

### SEC-137-02 — Three FEASIBLE §33 rows

**Rows:** `22-§33-10`, `22-§33-16`, `22-§33-29`
**Candidate:** 3 FEASIBLE
**Disposition: ACCEPT**

- `22-§33-10`: negative rule that request/cancellation/pause/scheduled deletion/hidden state/support ticket is not eligibility proof.
- `22-§33-16`: negative rule that no retention period is inferred from business-lifecycle windows.
- `22-§33-29`: negative rule that no universal legal-retention duration is created.

These are appropriately classified FEASIBLE because they are independently enforceable/verifiable prohibitions and do not claim the positive deletion path is safe or implemented.

`22-§33-16` and `22-§33-29` are reasonably marked independent-review `N/R`; `22-§33-10` remains `PENDING` because its eligibility-proof semantics participate directly in the deletion security boundary.

No correction required.

---

## 5. Grouped Security findings for the 36 CONDITIONAL rows

### SEC-137-03 — Positive deletion and eligibility-state rows

**Rows:** `22-§33-1`, `-3`–`-7`, `-9`, `-11`, `-31`–`-35`
**Disposition: ACCEPT AS CONDITIONAL**

These rows correctly preserve:

- one governed deletion path rather than Auth deletion as an uncontrolled primitive;
- authoritative multi-business ownership checks;
- zero remaining membership;
- no incomplete transfer;
- the two final-ownership exit forms already accepted under SEC-128-02;
- cross-mission evidence where applicable;
- execution-time revalidation rather than request-time-only eligibility;
- obligation-disposition evidence;
- durable recording/audit expectations.

Dependencies on E1, SEC-S7-02, SEC-S7-05, Founder Record 07, SB-P-1.19 evidence, provisional legal/commercial inputs and ESC-1 are explicit.

No row is presently infeasible. None is implementation-proven.

No row-level HELD or BLOCKED correction is required.

### SEC-137-04 — History separation, retained-record and attribution rows

**Rows:** `22-§33-2`, `-8`, `-12`–`-15`, `-17`–`-21`, `-24`, `-28`, `-36`–`-38`
**Disposition: ACCEPT AS CONDITIONAL WITH RETAINED DURABILITY HOLDS**

These rows are where the newly confirmed transaction cascade matters most.

The candidate correctly does **not** claim that required history survives current Auth-user deletion. Instead it states that:

- retained records must be separable from active identity;
- history cannot be shown to survive Auth-user deletion as the DDL stands;
- transactions and correction events are part of the affected financial/history surface;
- historical attribution must remain non-authorizing;
- deletion proof must survive independently of the deleted active identity;
- final acceptance requires DB-level before/after history evidence.

The durability or demonstration conclusion of these rows remains held by existing ESC-1 / `22-§20-2` conditions.

That does **not** require these rows themselves to become `BLOCKED` because Stage 7 is assessing whether the approved requirement is technically buildable, not whether the current schema already satisfies it. A separately governed remediation can in principle remove the unsafe dependency; this review neither selects nor authorizes one.

No row-level status correction required.

### SEC-137-05 — Direct-delete / cascade prohibition rows

**Rows:** `22-§33-20`, `22-§33-22`, `22-§33-39`
**Disposition: ACCEPT AS CONDITIONAL**

The candidate explicitly recognizes both existing uncontrolled deletion classes:

- Owner/API and `businesses.owner_id → auth.users ON DELETE CASCADE`;
- `transactions.creator_id → auth.users ON DELETE CASCADE`, followed by dependent correction-event deletion.

The requirement itself is a prohibition: a compliant implementation must not rely on those paths.

The current repository violating or threatening that invariant is a material ESC-1 reason to hold implementation reliance. It does not make the prohibition technically infeasible and therefore does not require a new row-level `BLOCKED` classification.

`22-§33-39` correctly requires source-complete cascade testing before acceptance.

No correction required.

### SEC-137-06 — Legal/privacy/retention classification rows

**Rows:** `22-§33-7`, `-12`–`-14`, `-16`, `-21`, `-23`–`-30`, `-31`, `-35`, `-38` as applicable
**Disposition: ACCEPT**

The candidate preserves Founder Record 06's boundary:

- Phase One research may support provisional build/source-accounting progress;
- external professional validation is deferred, not cancelled;
- no final retention schedule or legal advice is created;
- provider/backups and jurisdiction-specific outcomes remain unresolved where stated.

No universal retention period is inferred.

No row should be upgraded to unconditional feasibility on the basis of provisional legal evidence; the candidate does not do so.

---

## 6. 39-row totals

### SEC-137-07 — Candidate totals

**Disposition: ACCEPT**

The proposed §33 totals are acceptable:

| Classification | Count |
|---|---:|
| FEASIBLE | 3 |
| CONDITIONAL | 36 |
| HELD | 0 |
| BLOCKED | 0 |
| Independent review PENDING | 37 |
| Independent review N/R | 2 |

### Specific HOLD / BLOCK determination

I do **not** recommend changing any §33 row to row-level `HELD` or `BLOCKED`.

The important distinction is:

> Several §33 rows have **demonstration/durability conclusions held** until ESC-1, `22-§20-2` and related evidence dependencies are resolved; their **engineering feasibility classification** can still correctly remain CONDITIONAL.

This matches the established treatment of neighboring historical-integrity rows.

---

## 7. Combined 267-row Stage 7 accounting

### SEC-137-08 — Combined totals

**Disposition: ACCEPT**

The candidate combined totals are internally consistent:

| Classification | Prior 228 | New §33 | Combined 267 |
|---|---:|---:|---:|
| FEASIBLE | 176 | 3 | 179 |
| CONDITIONAL | 51 | 36 | 87 |
| HELD | 0 | 0 | 0 |
| BLOCKED | 1 | 0 | 1 |
| PENDING | 190 | 37 | 227 |
| N/R | 38 | 2 | 40 |

The sole row-level BLOCKED finding remains:

`22-§20-2 — BLOCKED / IN SCOPE — ESC-1 OPEN T8`.

No §33 delta justifies weakening it.

---

## 8. Previous 228 Stage 7 findings

### SEC-137-09 — Prior finding integrity

**Disposition: ACCEPT — SUBSTANTIVELY UNCHANGED**

I independently compared the Stage 7 register row lines from:

- PR #679 base `62514a23f946e0bba42b8494d2290817eec0d7ae`; and
- PR #679 candidate head `193ebce8152389b33150e8b75543acd2c1234552`.

Result:

- prior register rows in base: **228**;
- same prior rows in candidate: **228**;
- exact row-line differences: **0**;
- candidate additional §33 rows: **39**.

Therefore no prior 228 feasibility status, finding, gate text or independent-review classification changed in the register.

The new cascade evidence strengthens the factual basis for the already-held durability concerns but does not require changing any prior row classification.

Two prior Security findings should be understood with expanded evidence, not changed disposition:

- **SEC-S7-01 / ESC-1:** the Auth-user deletion risk now has an additional transaction-history manifestation.
- **SEC-S7-08 / neighboring durability:** the reason for retaining durability holds is stronger, but the existing conditional/blocked statuses remain appropriate.

All other prior favorable Security findings remain unchanged.

---

## 9. Independent verification of the transaction-history cascade

### SEC-137-10 — Repository DDL evidence

**Disposition: VERIFIED AS REPOSITORY FACT**

I independently read the exact migration files on canonical repository state.

### Transactions → Auth users

Migration:

`supabase/migrations/20260719102137_55a1dac6-b26a-47e6-aed3-305b9b20636b.sql`
blob `b79ad8e79f0a13d72ae63ef6a8debe25643ee22d`

defines:

`creator_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE`.

The duplicate/alternate transaction migration:

`supabase/migrations/20260719140000_f24b4d69-127e-4547-9fff-8ed9f31cc8fe.sql`
blob `3cbdcde6662dc0b99268e2ff41c9604b498cce48`

contains the same FK declaration.

A repository search for `REFERENCES auth.users` in `supabase/migrations/**` returned only:

- `businesses.owner_id`; and
- `transactions.creator_id` in the two transaction-creation files.

This is repository evidence only; it does not establish which duplicate migration is applied in current production.

### Transaction correction events → Transactions

Migration:

`supabase/migrations/20260720142204_3786b8a1-e72a-4ae4-88b3-837b76ce1bf9.sql`
blob `62f250f47c3af70f7ef69a3193a675a4cc02a275`

defines:

`transaction_id uuid NOT NULL REFERENCES public.transactions(id) ON DELETE CASCADE`.

Therefore, from repository DDL semantics:

> deletion of an Auth user **can initiate** deletion of transactions whose `creator_id` is that user's Auth ID; deletion of such a transaction can in turn initiate deletion of its dependent `transaction_correction_events`.

This wording intentionally says **can initiate**, not “is proven to complete,” because transaction completion depends on the effective deployed schema, data state, constraints and triggers.

No SQL was executed and no production deletion was observed.

---

## 10. Transferred-business consequence

### SEC-137-11 — Former creator in a transferred business

**Disposition: MATERIAL ESC-1 CONSEQUENCE CONFIRMED**

The newly confirmed path is security-significant specifically because `creator_id` is historical actor data, not current business ownership.

After a valid business transfer:

- current ownership may point to the new Owner;
- the former Owner's historical transaction rows may still carry the former Owner's Auth ID in `creator_id`.

Deleting the former Owner's Auth identity can therefore initiate deletion of transaction history in a business that now belongs to another person, and correction events may follow those transaction deletions.

That is directly contrary to the already-approved requirements that:

- transferred-business history survives;
- personal-identity deletion does not destroy independently retained business/history records;
- historical attribution does not imply current authority;
- uncontrolled Auth-user cascades are not relied upon.

The candidate captures this consequence in E16 and the relevant §33 Stage 7 rows without claiming runtime proof.

---

## 11. MC-137 ESC-1 classification

### SEC-137-12 — Additional manifestation or new T8?

**Disposition: MC-137 CLASSIFICATION ACCEPTED**

I concur with Mission Control that the `transactions.creator_id` cascade is an **additional concrete technical manifestation of the existing ESC-1 open T8**, not a materially distinct Product Truth escalation.

Reasons:

1. **Same trigger class:** uncontrolled deletion of an `auth.users` identity.
2. **Same prohibited effect class:** cascade loss of business/history records that must survive independently of active identity.
3. **Same approved Product Truth already covers it:** Founder Record 05 ESC1-6/ESC1-7 and Contract 22 §33 already prohibit identity deletion from destroying transferred-business/history records.
4. **Same existing security gate:** ESC-1 already holds Auth-user cascade safety and historical durability.
5. **No new user-facing policy choice is required:** the approved outcome is already clear; the missing work is technical security design and later evidence.

This finding **broadens the known technical evidence surface of ESC-1**. It does not close or downgrade ESC-1.

No new Founder decision is required on the evidence reviewed.

---

## 12. Blueprint E16

### SEC-137-13 — E16 scope and wording

**Disposition: ACCEPT**

Blueprint E16 is appropriately scoped.

It:

- labels overall §33 feasibility CONDITIONAL;
- does not select a deletion mechanism;
- requires execution-time eligibility recheck;
- preserves cross-mission deletion/transfer evidence boundaries;
- explicitly identifies the transaction cascade as a repository observation;
- states that nothing was executed;
- preserves G-6/T4 production `UNVERIFIED`;
- preserves the provisional legal/privacy/retention boundary;
- states that earlier durability findings were already held/blocked.

One governance sentence in E16 reflects the time of MC-136 preparation — that Claude Code left classification to Mission Control. MC-137 has now supplied that classification, and this Security review independently agrees with it. No finding-scoped PR #679 correction is necessary merely to rewrite that historical preparation statement; Mission Control's canonical classification and this report control the review disposition.

---

## 13. New material security regression check

**Result: NONE IDENTIFIED**

PR #679 is documentary only and does not modify schema or runtime.

Its Stage 7 findings do not weaken:

- transferred-business survival;
- former-Owner denial;
- business isolation;
- execution-time revalidation;
- historical attribution;
- history durability;
- deletion-proof requirements;
- direct-delete prohibition;
- Auth-user cascade prohibition;
- legal/privacy/retention boundaries;
- SB-P-1.12 / SB-P-1.19 evidence boundaries.

The newly identified DDL path is an existing repository risk, not a regression introduced by PR #679.

---

## 14. R-2 recommendation

### SEC-137-14 — Narrow R-2 source-coverage/security-review gate

**Recommendation: DOCUMENTARY SECURITY CONDITION SATISFIED FOR MISSION CONTROL DISPOSITION**

From the Security & Permissions Architecture perspective, the MC-136 candidate supplies the targeted Stage 2 §33 source accounting and the targeted 39-row Stage 7 feasibility findings without weakening the governing security boundaries.

Therefore the **independent Security review condition required by MC-136 for the narrow R-2 source-coverage gate is satisfied documentary-wise**, subject to Mission Control's exact-candidate disposition, canonicalization and post-merge verification.

This room does **not** close R-2.

Residual ESC-1, legal/professional-validation, runtime, provider and production holds remain separate from that narrow source-coverage recommendation.

---

## 15. Continuing holds and evidence limitations

The following remain effective:

- **R-2:** OPEN.
- **ESC-1:** OPEN T8, including:
  - Owner business API `DELETE`;
  - `businesses.owner_id → auth.users ON DELETE CASCADE`;
  - `transactions.creator_id → auth.users ON DELETE CASCADE`;
  - dependent `transaction_correction_events → transactions ON DELETE CASCADE` consequence.
- **`22-§20-2`:** BLOCKED / IN SCOPE.
- Related authority, financial and audit-history durability conclusions: HELD.
- Founder Record 06 / MC-117 legal/privacy/retention evidence: provisional for Phase One; professional validation deferred, not cancelled.
- G-6/T4 production: UNVERIFIED.
- Provider / backup / PITR facts: unresolved where identified.
- No current runtime proof that identity deletion safely preserves all retained records.
- No current evidence that deployed production constraints, grants and triggers exactly match repository migrations.
- No Stage 8 / Blueprint lock / EIS / implementation / schema / SQL / migration / personal-identity-deletion runtime / production authority.

Passing CI is documentary/build assurance only and does not constitute runtime Security evidence.

---

## 16. Final Security classification

# SECURITY ACCEPTABLE FOR MISSION CONTROL DISPOSITION

No finding-scoped correction to PR #679 is required by this targeted Security review.

Accepted documentary conclusions:

- Stage 2 §33 source accounting: **ACCEPT**.
- 39-row Stage 7 feasibility split `3 / 36 / 0 / 0`: **ACCEPT**.
- Combined `179 / 87 / 0 / 1` and `227 / 40` totals: **ACCEPT**.
- Prior 228 findings unchanged: **VERIFIED**.
- Transaction creator/correction-event cascade: **INDEPENDENTLY CONFIRMED AS REPOSITORY DDL EVIDENCE**.
- MC-137 ESC-1 classification: **ACCEPT**.
- New material security regression: **NONE IDENTIFIED**.
- Narrow R-2 documentary Security review condition: **SATISFIED FOR MISSION CONTROL DISPOSITION**.

This report does **not** state that PR #679 is merge-authorized. Mission Control alone dispositions this report and the candidate.

**R-2 OPEN — ESC-1 OPEN T8 — `22-§20-2` BLOCKED / IN SCOPE — G-6/T4 UNVERIFIED — NO STAGE 8 / BLUEPRINT LOCK / EIS / IMPLEMENTATION / SCHEMA / SQL / MIGRATION / IDENTITY-DELETION RUNTIME / PRODUCTION AUTHORITY.**

**STOP FOR MISSION CONTROL DISPOSITION.**
