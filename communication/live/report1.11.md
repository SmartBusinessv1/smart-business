# SB-P-1.12 — Independent Security & Permissions Architecture Review of PR #673

**Report identity:** `communication/live/report1.11.md`  
**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation  
**Review authority:** MC-128  
**Reviewing room:** Security & Permissions Architecture  
**Review type:** Independent documentary security review — READ ONLY  
**Status:** SUBMITTED FOR MISSION CONTROL DISPOSITION

---

## 1. Exact review target

I independently reviewed PR #673 and the exact candidate evidence identified by MC-128.

| Evidence | Exact reviewed value |
|---|---|
| PR | `#673 — docs(SB-P-1.12): reconcile Contract 22 §33 into FCTM and Blueprint (MC-126)` |
| PR state | OPEN / DRAFT / UNMERGED |
| **Exact reviewed head** | `11493313600fbdc45d53879c281af6309d649a3e` |
| Canonical base | `main@8fbd43462d26f7684b50607a4f6843154fef6f3b` |
| **FCTM blob** | `71f8bab58220946dc1578d95261ba6a16da8ac64` |
| **Blueprint blob** | `3d57eb9f94f2a4e3e24c1e502b3c577952bd93f5` |
| Reconciliation report blob | `96ffb507a2310c505d1430f668936a28ac16ffc1` |
| Contract 22 canonical source blob | `1a025e8d03a77fb805ef4375abc1e44204a49528` |
| Founder Record 07 blob reviewed | `327e7db10fb966b13306ce9576c404343c69affb` |

Exact-head CI independently verified:

- Team LIPS Markdown Quality Gate `#2101` — **SUCCESS**
- Team LIPS Application Build Assurance `#485` — **SUCCESS**

The PR is one commit ahead of canonical base and changes exactly the three MC-126-authorized paths:

1. `communication/missions/SB-P-1.12/claude-code/03-stage2-populated-fctm.md`
2. `docs/phase-1-mission-blueprint/active/SB-P-1.12.md`
3. `communication/missions/SB-P-1.12/claude-code/33-contract22-section33-fctm-blueprint-reconciliation-report.md`

No implementation, SQL, migration or runtime path is changed by PR #673.

---

# 2. Executive security disposition

The reconciliation is **substantially correct and security-conservative**.

Contract 22 §33 now gives the previously missing positive personal-identity-deletion requirement a numbered source anchor. The proposed 39 FCTM rows faithfully preserve the major security boundaries:

- authoritative eligibility;
- no surviving ownership;
- no remaining membership;
- no incomplete transfer;
- relevant-obligation disposition;
- surviving historical integrity;
- non-authorizing attribution;
- deliberate and auditable deletion;
- bounded deletion proof;
- explicit prohibition of uncontrolled direct deletion and Auth-user cascade deletion;
- SB-P-1.12 / SB-P-1.19 evidence separation.

The candidate also correctly **does not claim that ESC-1 is fixed**.

However, the independent review identifies **one material source/eligibility conflict that is not presently captured in the reconciliation**:

> Contract 22 §33.2 item 2 and §33.8 item 2 require governed deletion proof for the person's “final formerly owned business,” while Founder Record 05 expressly contemplates a former Owner deleting their personal identity after a valid business transfer in which the transferred business continues to operate and is no longer counted among that person's businesses.

FA-23 correctly handles a **pending** transfer, but FA-21 currently provides no completed-transfer alternative to final-business-deletion proof.

That leaves the documentary eligibility model internally ambiguous for a person whose final business leaves their ownership by **completed transfer rather than deletion**.

Because personal-identity deletion eligibility is security- and privacy-sensitive, this conflict should not be silently resolved by implementation or by interpreting one source away.

**Executive disposition: SECURITY HOLD pending one narrow source/eligibility clarification.**

All other targeted security findings are acceptable with the retained ESC-1 and durability holds described below.

---

# 3. Contract 22 §33 / FA security trace

| Security obligation | Contract 22 §33 | FCTM rows | Blueprint acceptance | Security finding |
|---|---|---|---|---|
| Positive governed identity deletion | §33.1 | `22-§33-1`, `-2`, `-30` | FA-19 | **ACCEPT WITH HOLDS** |
| No surviving owned business | §33.2 item 1 | `22-§33-3`, `-31` | FA-20 | **ACCEPT** |
| Final-business lifecycle proof | §33.2 item 2; §33.8 item 2 | `22-§33-4`, `-10`, `-11`, `-32` | FA-21 | **CORRECTION / HOLD** — completed-transfer case unresolved |
| No remaining membership | §33.2 item 3 | `22-§33-5`, `-33` | FA-22 | **ACCEPT** |
| No pending/incomplete transfer | §33.2 item 4 | `22-§33-6`, `-34` | FA-23 | **ACCEPT** |
| Relevant obligations dispositioned | §33.2 item 5; §33.4 | `22-§33-7`, `-12`, `-13`, `-35` | FA-24 | **ACCEPT WITH POLICY HOLD** |
| Required history survives | §33.2 item 6; §33.5 | `22-§33-8`, `-17`–`-20`, `-36` | FA-25 | **ACCEPT WITH ESC-1/DURABILITY HOLD** |
| Minimal, non-authorizing attribution | §33.4/§33.5 | `22-§33-14`, `-15`, `-37` | FA-26 | **ACCEPT WITH RETENTION HOLD** |
| Authorized/audited path and bounded proof | §33.2 item 7; §33.6 | `22-§33-9`, `-21`, `-38` | FA-27 | **ACCEPT WITH ESC-1 HOLD** |
| No direct/cascade deletion | §33.5/§33.6 | `22-§33-20`, `-22`, `-39` | FA-28 | **ACCEPT AS REQUIREMENT; RUNTIME HOLD** |
| Legal/retention class separation | §33.7 | `22-§33-16`, `-23`–`-30` | FA-29 | **ACCEPT WITH PROFESSIONAL-VALIDATION HOLD** |

The new §33 rows are correctly classified as `BUILD NOW / CORE-ARCH / SB-P-1.12 / IN SCOPE`; none is represented as implemented or demonstrated.

---

# 4. Identity-eligibility finding

## SEC-128-01 — Authoritative eligibility model

**Disposition: ACCEPT, except for the completed-transfer case identified in SEC-128-02.**

Contract 22 §33 and FA-20 through FA-24 correctly establish that identity eligibility cannot be inferred from:

- a deletion request;
- cancellation;
- pause;
- scheduled deletion;
- hidden status;
- a support ticket; or
- one mission's evidence alone.

The source correctly requires authoritative facts for ownership, membership, transfers and genuine remaining obligations.

FA-22 properly requires authoritative membership state to show **zero remaining authorized memberships**.

FA-23 properly treats a pending or incomplete transfer as a deletion blocker until ownership changes authoritatively.

FA-24 correctly distinguishes an obligation genuinely requiring an active identity from ordinary retained records.

### Remaining evidence

None of these conditions is runtime-demonstrated.

The eventual implementation must prove authoritative completeness across all business relationships and must not rely solely on session state, cached token claims or UI state.

### Merge effect

No merge blocker except SEC-128-02 below.

---

# 5. Completed-transfer eligibility finding

## SEC-128-02 — Final-business deletion proof versus completed transfer

**Disposition: CORRECTION REQUIRED / SECURITY HOLD**

### Exact evidence

Founder Record 05 ESC1-5/ESC1-6 establishes that after a valid transfer:

- the transferred business belongs entirely to the new Owner;
- the former Owner loses access;
- the transferred business is no longer counted among the former Owner's businesses; and
- later deletion of the former Owner's personal identity must not affect that transferred business.

Earlier canonical instruction evidence also expressly describes the scenario where Anwar transfers the Café to Fathima and **later deletes Anwar's personal identity while Fathima's Café continues operating**.

Contract 22 §33.2 currently requires **all** eligibility conditions, including:

> the person's final formerly owned business has completed its permitted governed deletion lifecycle.

Blueprint FA-21 mirrors that condition without providing a completed-transfer alternative.

FA-23 handles only a **pending/incomplete** transfer.

### Security effect

For a person whose final owned business left their ownership through a completed transfer rather than deletion, the current §33/FA mapping has no clear successful eligibility path.

This is safer than accidental deletion, but it can indefinitely retain a personal identity that Founder Record 05 contemplates may later be deleted.

The Security room should not resolve that conflict by assuming that “deleted” includes “transferred,” because Founder Record 05 expressly distinguishes transfer from deletion.

### Required narrow correction

Mission Control should obtain a source-level disposition before PR #673 merges:

**Either:**

1. clarify that §33.2 item 2 / §33.8 item 2 applies where the person's final ownership ended through the governed business-deletion lifecycle, while a completed valid transfer is instead proven through authoritative transfer completion and surviving-business isolation;

**or:**

2. record an explicit later Founder/source decision that personal-identity deletion after transfer nevertheless requires some separate final-business-deletion proof, and explain how that is consistent with Founder Record 05's transferred-business identity-deletion scenario.

The FCTM and Blueprint should then mirror that canonical disposition.

No technical mechanism is requested.

### Merge impact

**Blocks security acceptance for merge until narrowly dispositioned.**

---

# 6. Surviving-business isolation finding

## SEC-128-03 — Surviving and transferred businesses

**Disposition: ACCEPT WITH ESC-1 HOLD**

Relevant evidence:

- `22-§33-18` — identity deletion must not destroy a transferred business.
- `22-§33-20` — identity deletion must not cascade-delete another person's business or independently retained record.
- FA-25 — history and transferred businesses survive.
- FA-28 — no uncontrolled direct/cascade deletion.
- Existing FA-11 and business-isolation obligations remain related controls.

The documentary requirement is sound.

A deleted identity cannot become a deletion vector into:

- another Owner's business;
- transferred-business records;
- staff history;
- financial history;
- audit history; or
- other independently retained records.

Historical attribution does not recreate authority.

### Remaining risk

The current repository DDL still contains an Auth-user cascade relationship that is incompatible with relying on this invariant.

### Merge effect

No additional documentary correction beyond SEC-128-02.

The runtime condition remains blocked under ESC-1.

---

# 7. Direct-delete finding

## SEC-128-04 — Owner business API DELETE

**Disposition: ACCEPT AS DOCUMENTARY REQUIREMENT / ESC-1 REMAINS OPEN**

Repository evidence carried in the canonical Blueprint identifies:

- `authenticated` has `DELETE` on `businesses`;
- an Owner RLS DELETE policy allows deletion where `auth.uid() = owner_id`;
- the application UI does not expose that deletion path.

Contract 22 §33.6 and:

- `22-§33-22`;
- `22-§33-39`;
- FA-28;

correctly state that personal-identity deletion must **not rely on an uncontrolled direct-delete path**.

PR #673 does not falsely claim that this existing path has been remediated.

### Security impact

The direct business DELETE path remains incompatible with relying on governed deletion until separately designed, constrained and independently verified.

### Merge effect

Not a blocker to a purely documentary reconciliation **provided ESC-1 remains OPEN T8**.

It remains a blocker to implementation reliance, Stage 8 completeness and durability acceptance.

---

# 8. Auth-cascade finding

## SEC-128-05 — `businesses.owner_id → auth.users ON DELETE CASCADE`

**Disposition: ACCEPT AS DOCUMENTARY REQUIREMENT / ESC-1 REMAINS OPEN**

Repository evidence remains:

`businesses.owner_id` references `auth.users(id) ON DELETE CASCADE`.

Therefore deleting an Auth identity can initiate business deletion independently of the intended governed business-lifecycle path.

Contract 22 §33 now explicitly prohibits reliance on such an authentication-cascade path.

Relevant rows and acceptance:

- `22-§33-20`
- `22-§33-22`
- `22-§33-39`
- FA-25
- FA-28

### Security impact

This is still a direct conflict between existing DDL and approved Product Truth.

The reconciliation appropriately records the conflict rather than claiming remediation.

### Merge effect

Not a blocker to the documentation-only source/FCTM reconciliation once SEC-128-02 is corrected.

It **remains a hard blocker** to any personal-identity deletion implementation or claim that historical/business isolation is technically safe.

Production state remains G-6/T4 `UNVERIFIED`.

---

# 9. Historical-attribution finding

## SEC-128-06 — Historical actor identity after active identity deletion

**Disposition: ACCEPT WITH RETENTION/PRIVACY HOLD**

Contract 22 §33.4 and §33.5 correctly require:

- only minimum necessary historical attribution to survive where required;
- surviving attribution must be non-authorizing;
- historical actions must not be reassigned;
- attribution must not recreate membership;
- attribution must not restore access.

Relevant FCTM rows:

- `22-§33-14`
- `22-§33-15`
- `22-§33-19`
- `22-§33-28`
- `22-§33-37`

Blueprint FA-26 correctly maps these obligations.

This aligns with the established security invariant:

> historical attribution may survive active identity deletion, but historical attribution is not current authority.

### Remaining evidence

The exact surviving identifier form and retention duration remain subject to the applicable validated privacy/retention policy and professional validation.

### Merge effect

No security documentary correction required.

Do not treat this as approval of a particular pseudonym, tombstone, actor-ID representation or retention duration.

---

# 10. Deletion-proof finding

## SEC-128-07 — Governed deletion proof

**Disposition: ACCEPT WITH POLICY HOLD**

Contract 22 §33.6 and FA-27 appropriately require the deletion event to be:

- deliberate;
- authorized;
- confirmed;
- recorded;
- independently auditable.

Any retained deletion-proof evidence must be bounded and must not become a substitute copy of the deleted live profile.

Relevant FCTM rows:

- `22-§33-9`
- `22-§33-21`
- `22-§33-38`

This is an appropriate security boundary.

### Remaining evidence

The candidate does not specify:

- exact tombstone structure;
- deletion-proof retention duration;
- backup handling;
- legal basis;
- exact identity identifiers retained.

Those omissions are correct at this documentary stage.

### Merge effect

No security correction required.

Professional/legal/privacy validation and later architecture remain required.

---

# 11. SB-P-1.12 / SB-P-1.19 evidence-boundary finding

## SEC-128-08 — Cross-mission evidence separation

**Disposition: ACCEPT**

Contract 22 §33.3, Founder Record 07 and FA-21 correctly preserve the responsibility boundary:

### SB-P-1.12 owns

- ownership truth;
- membership truth;
- identity-deletion eligibility;
- historical-attribution integrity;
- business isolation;
- cascade prevention;
- positive personal-identity deletion source requirement.

### SB-P-1.19 owns

- merchant-facing business/account lifecycle;
- business deletion experience;
- notification/export/grace lifecycle;
- governed evidence that a final owned business completed permitted deletion;
- merchant-facing transfer lifecycle.

Neither domain alone proves final eligibility where both are applicable.

The candidate correctly records the evidence dependency without editing, reinterpreting or reassigning Contract 18.

### Remaining risk

The combined outcome remains undemonstrated until both missions provide their required evidence.

### Merge effect

No correction required except that the completed-transfer eligibility clarification in SEC-128-02 must be reconciled consistently across this boundary.

---

# 12. Contract 22 §33 / FCTM reconciliation integrity

## SEC-128-09 — 39 new §33 rows

**Disposition: ACCEPT FOR STRUCTURAL TRACEABILITY**

The candidate adds exactly:

`22-§33-1` through `22-§33-39`.

I find the row structure materially faithful to §33:

- positive action has a dedicated row;
- each eligibility condition is separately accounted for;
- §33.7 distinctions are separately represented;
- each numbered §33.8 acceptance condition has its own row;
- internal restatements are not unnecessarily duplicated;
- cross-mission evidence rows preserve SB-P-1.19 as an evidence dependency rather than silently changing mission ownership.

The candidate preserves all pre-existing 373 FCTM rows unchanged.

### Open non-security completeness items

MC-128 correctly identifies two follow-ons:

1. `04-stage2-obligation-inventory.md` does not yet enumerate §33.
2. The 39 new §33 rows do not yet have Stage 7 feasibility findings.

These do **not**, by themselves, invalidate this bounded FCTM/Blueprint reconciliation.

They **do prevent final R-2 / Stage 7 completeness** until separately dispositioned.

---

# 13. Residual blockers

The following remain after this review:

| Blocker | Status / impact |
|---|---|
| **SEC-128-02 completed-transfer eligibility conflict** | **Merge-blocking documentary/source clarification required** |
| ESC-1 | **OPEN T8** |
| Owner direct business API DELETE | Unresolved security path |
| `auth.users ON DELETE CASCADE` | Unresolved security/integrity path |
| `22-§20-2` | **BLOCKED / IN SCOPE** |
| Historical financial/authority/audit durability | HELD |
| Legal/privacy/retention professional validation | Deferred / provisional, not final |
| Team LIPS / CERT-In / other record classification details | Unresolved where noted by §33/MC-117 |
| G-6/T4 production state | **UNVERIFIED** |
| §33 Stage 7 feasibility findings | Not yet created |
| Stage 2 obligation inventory §33 coverage | Not yet updated |
| Runtime deletion mechanism | Not designed or authorized |
| Schema/migration remediation | Not authorized |
| Stage 8 / Blueprint lock | Not authorized |

---

# 14. Required correction — narrow and precise

No broad rewrite of PR #673 is requested.

**Required correction / Mission Control disposition:**

Resolve only the relationship between:

- Contract 22 §33.2 item 2 / §33.8 item 2;
- FCTM `22-§33-4` and `22-§33-32`;
- Blueprint FA-21;

and the already approved completed-transfer scenario under Founder Record 05 ESC1-5/ESC1-6 where:

1. the person's final business is validly transferred rather than deleted;
2. ownership has authoritatively moved to the new Owner;
3. the transferred business must continue independently; and
4. the former Owner may subsequently delete their personal Smart Business identity without affecting that business.

Mission Control should obtain or record the canonical source interpretation before the reconciliation is merged.

**Do not resolve this by:**

- treating transfer as deletion without source authority;
- weakening transferred-business survival;
- moving SB-P-1.12 foundation obligations into SB-P-1.19;
- inventing a FCTM row;
- choosing a database mechanism; or
- closing ESC-1.

After that narrow source disposition, the affected §33 rows / FA mapping should be aligned exactly to the canonical answer and returned for an exact-delta security check.

---

# 15. Final classification

## **SECURITY HOLD**

PR #673 is structurally strong and security-conservative, and the §33/FCTM reconciliation correctly preserves the major ESC-1, durability, attribution, deletion-proof and cross-mission boundaries.

However, the unresolved **completed-transfer versus final-business-deletion-proof eligibility condition** is material to personal-identity deletion truth and should not be silently resolved by later design or implementation.

Therefore:

**PR #673 is not yet SECURITY ACCEPTABLE FOR MERGE.**

A narrow source/documentary correction or explicit Mission Control/Founder disposition of SEC-128-02 is required.

After that correction, only a targeted exact-delta Security re-review should be necessary; the remainder of the present favorable findings may be carried forward if their blobs remain unchanged.

No repository modification, PR edit, merge, implementation, SQL, migration or production action was performed by this reviewing room.

**ESC-1 REMAINS OPEN T8.**  
**`22-§20-2` REMAINS BLOCKED / IN SCOPE.**  
**NO STAGE 8, BLUEPRINT LOCK, EIS, IMPLEMENTATION, MIGRATION OR PRODUCTION AUTHORITY IS GRANTED.**

**STOP FOR MISSION CONTROL DISPOSITION.**