# Preservation provenance — added under MC-46 on 2026-09-26

- Original author: Existing MC-33-appointed Security & Permissions Architecture room.
- Original review: MC-40 independent Stage 7 security review; exact PR #641 head `88b9256612e7d8bf1db88ec02c29eac8b5d545f9`.
- Preservation: Delayed direct author preservation on the MC-46 evidence branch. Original report was relayed through Founder chat rather than recorded through the repository live pair at the time. This is not an invented historical live exchange.
- Source fidelity: The original authored body follows without substantive editing; the provenance header is later-added metadata.

---

# SB-P-1.12 — Independent Stage 7 Security Review

**Instruction:** MC-40  
**Reviewer:** Security & Permissions Architecture  
**Review target:** [Draft PR #641](https://github.com/SmartBusinessv1/smart-business/pull/641)  
**Exact head examined:** `88b9256612e7d8bf1db88ec02c29eac8b5d545f9`  
**Baseline:** `main@733f33935b37f6e3b5b4f7e8916f0161d6646527`  
**Evidence class:** Repository-only, read-only

The comparison confirms that the specified review head is one commit ahead of the specified baseline. Seven files changed, including Blueprint Sections 20–21 and Claude Code's Stage 7 report. This assessment is limited to that exact draft, not a later PR revision.

<box border={{size:1,color:"#D97706"}} radius="lg" padding={4} gap={2}>
  <badge color="warning">Independent review disposition</badge>
  <title size="xl">CORRECTION REQUIRED — ESC-1 T8 OPEN</title>
  The draft is substantively reviewable and contains several sound architectural directions. It is **not ready for acceptance or reliance on its affected security/integrity findings**.

  ESC-1 has a repository-supported integrity risk. Additional corrections are needed in the authority, import-revocation, anonymous-grant and independent-review coverage statements.

  No production security certification is made.
</box>

## 1. Priority finding SEC-S7-01 — ESC-1 / T8

<badge color="danger">Material integrity finding</badge>

**Finding:** The repository defines a business-deletion route that can undermine financial-history durability. Existing append-only guards block some deletion states, but they do not establish a universal history-preservation guarantee.

### Evidence independently verified

The original `businesses` migration contains:

```sql
owner_id UUID NOT NULL
  REFERENCES auth.users(id) ON DELETE CASCADE
  UNIQUE
```

It also explicitly grants:

```sql
GRANT SELECT, INSERT, UPDATE, DELETE
ON public.businesses TO authenticated;
```

And defines an Owner-scoped deletion policy:

```sql
CREATE POLICY "Owners can delete their business"
ON public.businesses FOR DELETE
TO authenticated
USING (auth.uid() = owner_id);
```

This is directly visible in:

[Business identity and Owner policies — initial migration](https://github.com/SmartBusinessv1/smart-business/blob/733f33935b37f6e3b5b4f7e8916f0161d6646527/supabase/migrations/20260708210504_0a471e2c-a76c-4178-8aa2-79a3744e8bd2.sql)

The later reconciliation migration grants `ALL` on `businesses` to `authenticated` and `anon`, among other roles. Thus the draft's concern about underlying delete authority is consistent with both the initial and subsequent migration intent. The actual effective production grants remain outside this review.

[Default-grant reconciliation migration](https://github.com/SmartBusinessv1/smart-business/blob/733f33935b37f6e3b5b4f7e8916f0161d6646527/supabase/migrations/20260727000000_reconcile_default_grants.sql)

The transaction correction migration defines:

```sql
transaction_id uuid NOT NULL
  REFERENCES public.transactions(id) ON DELETE CASCADE,

business_id uuid NOT NULL
  REFERENCES public.businesses(id) ON DELETE CASCADE
```

No corresponding `BEFORE DELETE` rejection trigger is defined for `transaction_correction_events` in that migration.

[Transaction correction and audit migration](https://github.com/SmartBusinessv1/smart-business/blob/733f33935b37f6e3b5b4f7e8916f0161d6646527/supabase/migrations/20260720142204_3786b8a1-e72a-4ae4-88b3-837b76ce1bf9.sql)

By contrast, the Inventory migration expressly defines:

```sql
CREATE TRIGGER inventory_movements_no_delete
BEFORE DELETE ON public.inventory_movements
FOR EACH ROW
EXECUTE FUNCTION public.inventory_movements_reject_mutation();
```

That trigger function unconditionally raises an exception. Consequently, a deletion that reaches an existing Inventory movement encounters an append-only guard.

[Inventory schema and append-only guards](https://github.com/SmartBusinessv1/smart-business/blob/733f33935b37f6e3b5b4f7e8916f0161d6646527/supabase/migrations/20260721205714_c3b38f2f-5f12-431d-80c2-9b14394cbc20.sql)

The Catalog Stage 1 schema similarly defines protected event tables with rejection triggers. These are valuable existing integrity controls, but their effectiveness depends on which related rows exist and which deletion path is exercised.

[Catalog Stage 1 schema](https://github.com/SmartBusinessv1/smart-business/blob/733f33935b37f6e3b5b4f7e8916f0161d6646527/supabase/migrations/20260806120000_sb_p_1_11_impl_1_stage1_schema.sql)

### Security interpretation

The important distinction is between two data states.

<box border={{size:1,color:"#16A34A"}} radius="lg" padding={3}>
  **State A — Protected append-only child history exists**

  If the cascade reaches an existing child row protected by an unconditional delete-rejection trigger, the deletion is expected to fail transactionally.

  This is DDL-supported reasoning. It was not exercised in a database during MC-40.
</box>
<box border={{size:1,color:"#DC2626"}} radius="lg" padding={3}>
  **State B — No blocking child history exists**

  Where the relevant append-only guards have no row to reject and no other constraint blocks the operation, the Owner business deletion can proceed through the repository-defined policy and grants.

  Existing `transactions` and `transaction_correction_events` may then be deleted through their cascading relationships.

  This is a material durability risk, not proof of an observed production deletion.
</box>

The exact claim that there are **18** business-related cascading foreign keys is recorded in Claude Code's Stage 7 inventory. I independently verified the critical relationships above, but I have not independently re-established that aggregate count across every migration and effective database constraint. The count should remain explicitly labeled as Claude Code's repository inventory pending a complete constraint-ledger verification.

### The separate `auth.users` path matters

The Owner's business record also has an `ON DELETE CASCADE` relationship from `auth.users`.

Therefore, removing an authentication identity may initiate business deletion independently of whether an Owner-facing Delete Business action exists.

The original SQL proves that foreign-key relationship. It does **not** establish that any particular Supabase Auth administrative operation currently deletes the user successfully or that every other dependent constraint permits completion.

This distinction prevents an incorrect conclusion that removing a UI button alone would close ESC-1.

### Effect on the new authority model

SB-P-1.12 proposes durable membership, permission, grant/revoke and authority-audit records.

Those records cannot automatically inherit a business-deletion lifecycle that destroys their provenance.

An append-only audit table is not necessarily durable if its parent business or identity can be deleted and cascade through it. Conversely, unconditional deletion rejection can make a previously available business/account lifecycle operation fail in ways the product has not yet defined.

The proposed Authority Kernel must therefore confront both histories:

- financial/business history; and
- authority and permission history.

The relevant rows are `22-§20-2`, `21-§19-1`–`21-§19-8`, and `22-§29-12`.

### Required Stage 7 correction

Claude Code's draft states that it raised no T8, while ESC-1 is held for classification. Mission Control has now classified ESC-1 as an open T8 security/integrity finding. The draft must align with that controlling disposition.

The affected documentation should:

1. Record ESC-1 as **OPEN — T8**, rather than an undecided possible T8.
2. Retain `22-§20-2` as held/blocking for its durability conclusion.
3. Preserve the ESC-1 dependency on the related authority-audit durability rows.
4. Distinguish the Owner API deletion path from the separate Auth-user cascade path.
5. Avoid claiming that append-only triggers guarantee durable history under every business lifecycle state.
6. Require a future authorized design to account for existing protected and unprotected history, new authority-audit history, and relevant identity/business lifecycle operations.

**I do not select a deletion remediation, decide whether merchants may delete businesses, or propose a Founder product answer.** That decision remains with the designated authority.

The engineering disposition is that the current evidence cannot support unconditional durability feasibility.

---

## 2. Priority finding SEC-S7-02 — Authority and isolation migration

<badge color="warning">Correction and evidence required</badge>

**Affected draft:** §20.2, §20.3 E1/E2, §20.4.2 M1–M4 and §21.2 ER-1/ER-4/ER-7.

I concur with the central direction of one shared Authority Kernel, explicit active-business context, and execution-time database-derived permission checks.

I do **not** concur with treating the existing Owner-only resolver as proof that the proposed multi-membership authority model is already technically secure.

The Catalog source uses `catalog_internal.resolve_owner_business(p_actor)` and derives a business through the current Owner relationship. The Stage 7 proposal would replace that single-owner resolution with membership, business context and capability evaluation across a substantially larger call surface.

[Catalog Stage 1 schema and authority resolver](https://github.com/SmartBusinessv1/smart-business/blob/733f33935b37f6e3b5b4f7e8916f0161d6646527/supabase/migrations/20260806120000_sb_p_1_11_impl_1_stage1_schema.sql)

### Required security conditions

The future design must distinguish and verify the authenticated person, the requested active business, the person's membership in that business, ownership where applicable, the scoped capability, and the relevant object/action. A caller-supplied active-business ID may identify the requested context but must never establish authority by itself.

In particular, an Owner-of-A/Manager-of-B account must be tested for both permitted behavior and denial of cross-business authority transfer. Adding membership data beside `owner_id` does not make the legacy owner-based policies membership-aware.

The migration also needs a complete inventory of direct table accesses, catalog executor roles, ordinary functions, privileged functions, service-role handlers and RLS policies. The draft's **105 resolver references** and **87 migration policy statements / 86 historically effective policies** are useful scope indicators, not a complete current authorization inventory or proof of exact migration coverage.

The claimed legacy resolver replacement should remain `CONDITIONAL` wherever correctness depends on that inventory and on concrete policy ordering.

### Important distinction for ER-4

Allowing an Employee to insert a transaction must not grant the Employee read access to all transactions. However, separating `INSERT` and `SELECT` policies alone is not a complete solution.

The proposed approach must also address any required `RETURNING` behavior, authenticated direct grants, privileged RPC behavior, audit attribution, and whether other queries expose the same financial information. The Employee's legitimate transaction-submission workflow must remain usable without becoming Owner-equivalent.

**Finding disposition:** Architectural direction supported; complete isolation and authorization feasibility remains conditional on a source-complete migration plan and negative-path evidence.

## 3. Priority finding SEC-S7-03 — WS-B and direct/default grants

<badge color="warning">Least-privilege correction required</badge>

**Affected:** E2, E10, M1, M4, M5, ER-1, ER-3, `BP-§10.1-7`, `BP-§10.1-8`.

The Stage 7 draft correctly recognizes that RLS, table grants, function grants and default privileges are distinct controls.

The migration `20260727000000_reconcile_default_grants.sql` explicitly grants broad table and function privileges and modifies the `postgres` creator-role default privileges. This is direct repository evidence of the relevant root cause.

However, E10's shorthand proposal to revoke `anon` from **all `public` functions** is too broad to accept as a complete, implementation-ready least-privilege specification.

The future correction must distinguish:

- protected business/application RPCs with no legitimate anonymous access;
- functions whose exposure is required by a separately approved public workflow;
- `PUBLIC` grants, which may preserve access after the `anon` edge is revoked;
- existing grants to `authenticated`, `service_role`, and narrow executor roles;
- effective default privileges according to the actual object-creating role.

The exact six affected application tables and the three-table Inventory correction provide a starting point, not authority to revoke unrelated public capabilities.

This is particularly important because the earlier Inventory hardening was deliberately narrow: it revoked the three Inventory tables, specific Inventory functions, the two relevant `PUBLIC` function edges, and the `postgres` default-privilege baseline within its authorized scope.

[Inventory anonymous-privilege hardening migration](https://github.com/SmartBusinessv1/smart-business/blob/733f33935b37f6e3b5b4f7e8916f0161d6646527/supabase/migrations/20260830120000_sb_rel_1_10_1_11_gate2a_c1_inventory_anon_privilege_hardening.sql)

The same migration explicitly preserved a separate `supabase_admin` default-privilege residual. E10 must not imply that correcting only `postgres` defaults eliminates every creator-role inheritance risk.

**Required correction:** Describe WS-B as an effective-access reconciliation and narrowly bounded hardening design, informed by separately authorized live evidence. Do not prescribe a blanket function revocation before identifying the legitimate public-call contract.

No current production grant, migration-state or exploitation conclusion follows from this repository-only review.

## 4. Priority finding SEC-S7-04 — Reference Cost and margin

<badge color="warning">Founder decision preserved; inference risk remains held</badge>

**Affected:** E3, ER-5, `21-§5-4`, `21-§24-3`, `17-§13-2`, `17-§18-2`, `17-§21-4`, `17-§22-2`, `7-§10-2`.

The existing Catalog function `catalog_product_read` unconditionally returns the cost-inclusive detail builder. The existence of a cost-free builder is useful implementation evidence, but the current function is not evidence of field-level delegation safety.

[Catalog Stage 2 functions](https://github.com/SmartBusinessv1/smart-business/blob/733f33935b37f6e3b5b4f7e8916f0161d6646527/supabase/migrations/20260806130000_sb_p_1_11_impl_1_stage2_functions.sql)

I concur with independent capabilities for Reference Cost and margin, Owner-only defaults, and server-side field-specific disclosure.

The review must cover direct product reads, search, list, batch, import preview, export, dashboards, aggregates, cached responses and privileged handlers. Hiding a field in a frontend detail builder is insufficient if another endpoint exposes the same underlying value.

**Additional caution:** Column grants are useful but may not control what a privileged function deliberately returns. A `SECURITY DEFINER` command needs its own caller-specific response projection and data-flow analysis.

The G-3 derived-value question remains open. I do not infer that the Founder approved disclosure of an undelegated value through calculations, nor that the Founder prohibited the separately approved delegation itself.

The affected inference-dependent conclusions must stay held.

## 5. Priority finding SEC-S7-05 — Revocation, confirmations and imports

<badge color="danger">Material feasibility qualification required</badge>

**Affected:** E1, E4, E6, `21-§17`, `21-§18-1`–`21-§18-6`, `21-§24-8`, `22-§13-2`–`22-§13-5`, `22-§15`, `22-§29-7`–`22-§29-8`.

The preview-token precedent provides real actor/business/action/target/state binding. Generalizing that pattern is a defensible design direction.

The important limitation is that **a permission version does not itself revoke authority**. A version is useful only when the relevant operation compares it against an authoritative, current permission state at the correct execution boundary and rejects stale operations.

The current import handler performs a service-role batch claim and subsequent privileged bookkeeping. Its existing Owner lookup and per-row Catalog command checks were designed for the current Owner-only model, not for all future delegated/revoked membership states.

[Catalog import server function](https://github.com/SmartBusinessv1/smart-business/blob/733f33935b37f6e3b5b4f7e8916f0161d6646527/src/server-functions/catalog-import.ts)

A future EIS must address a revocation occurring:

- after preview but before batch claim;
- after claim but before the first row;
- between successfully committed rows;
- during a row's execution;
- during retries or recovery after an interrupted response.

It must also define how the completed/remaining counts correspond to authoritative row outcomes. A successful domain command followed by failed bookkeeping cannot be reported as though the domain write never happened.

### Correction to the current Stage 7 wording

The assertion that the existing per-row RPCs will “fail closed after revocation” is not yet proven for the future permission model.

They presently re-resolve the current Owner relationship. They do not presently enforce the proposed membership grant, scoped capability, permission version, or Manager/Employee revocation semantics.

There is also a timing distinction between checking permission at the start of an operation and preserving that authorization boundary until its consequential commit. Stage 7 should identify this as a concurrency/design obligation rather than assume it is solved by introducing a new resolver.

I do **not** select a locking, transaction, batch-claim or resume mechanism. Founder F-04(c)'s observable outcome remains controlling.

**Disposition:** Feasible direction, but the draft's unqualified feasibility language needs correction. Completion requires an atomicity/concurrency strategy and realistic revocation/replay tests.

## 6. Priority finding SEC-S7-06 — Service role, privileged RPCs and temporary support access

<badge color="warning">Current privilege assumptions require independent challenge</badge>

**Affected:** E2, E9, E13, ER-2, `21-§14-1`–`21-§14-7`, `21-§15-5`, `22-§23-3`–`22-§23-5`.

A rule stating “call the kernel first” is necessary but not a complete service-role security contract.

Because service-role access bypasses RLS, every privileged operation must preserve trusted caller identity, the selected business, object ownership, action scope and relevant permission state throughout the operation.

The parser-lease and Catalog import handlers are distinct execution surfaces. Their current Owner lookup conventions cannot simply be copied into a multi-business design without analyzing each privileged call.

[Parser lease server function](https://github.com/SmartBusinessv1/smart-business/blob/733f33935b37f6e3b5b4f7e8916f0161d6646527/src/server-functions/parser-lease.ts)

Temporary support access also requires more than an ordinary grant row. The future architecture needs enforceable purpose, consent, identified operator, bounded objects/actions, expiry, revocation and audit. No standing platform bypass should be inferred from `/super-admin` or from service-role possession.

The proposed support-access design is reviewable, but its actual enforcement and auditability remain future proof obligations.

---

## 7. Independent review of the 181 `PENDING` register entries

I independently extracted the row IDs and independent-review classifications from draft Blueprint §20.5.

The register contains **228 in-scope entries: 181 `PENDING` and 47 `N/R`**. The requested 181 entries break down as follows:

| Source | `PENDING` entries | Review treatment |
|---|---:|---|
| Contract 21 | 93 | Core authorization, isolation, delegation, audit, denial and acceptance scenarios |
| Contract 22 | 48 | Shared identity, permission, confirmation, integrity, privacy and audit foundations |
| Contract 17 | 18 | Dashboard, financial visibility, staff access and navigation boundaries |
| Contract 20 | 4 | Role setup, invitation/membership and default financial-access separation |
| Contract 7 | 7 | Stock permissions, employee boundaries and tenant isolation |
| Build Plan | 11 | Authority Kernel, isolation, WS-B, Product & Price Master integration and import continuity |
| **Total** | **181** | **Independent security review required** |

The following are my material grouped dispositions. A group concurrence establishes agreement with the stated *design obligation*, not certification that its future implementation is safe.

| Finding | Disposition | Principal affected rows |
|---|---|---|
| SEC-S7-01 — Business/identity deletion threatens durability | **CHALLENGE — T8 OPEN** | `22-§20-2`, `21-§19-1`–`21-§19-8`, `22-§29-12` |
| SEC-S7-02 — One kernel and tenant-scoped memberships | **CONCUR WITH DIRECTION; IMPLEMENTATION CONDITIONAL** | `21-§4-1`–`21-§4-6`, `21-§5-1`–`21-§5-10`, `21-§6-1`–`21-§6-7`, `21-§7`, `22-§5-1`–`22-§5-7`, `BP-§10.1-1`–`BP-§10.1-6` |
| SEC-S7-03 — Grant/default privilege reconciliation | **CHALLENGE NARROWING OF PROPOSED GRANT REMEDIATION** | `BP-§10.1-7`, `BP-§10.1-8`, `21-§6-1`–`21-§6-7`, `22-§6-5` |
| SEC-S7-04 — Field-specific financial disclosure | **CONCUR WITH FOUNDER-APPROVED MODEL; INFERENCE HELD** | `21-§5-4`, `21-§24-3`, `17-§13-2`, `17-§18-2`, `17-§21-4`, `17-§22-2`, `7-§10-2` |
| SEC-S7-05 — Revocation and import atomicity | **CHALLENGE UNQUALIFIED FEASIBILITY** | `21-§17`, `21-§18-1`–`21-§18-6`, `21-§24-8`, `22-§13-2`–`22-§13-5`, `22-§15`, `22-§29-7`, `22-§29-8` |
| SEC-S7-06 — Privileged service/support paths | **CONDITIONAL — COMPLETE TRUST-BOUNDARY REVIEW REQUIRED** | `21-§14-1`–`21-§14-7`, `21-§15-5`, `21-§23-4`, `22-§23-3`–`22-§23-5` |
| Delegated automation and future integrations | **CONCUR WITH REUSABLE CONTRACT; RUNTIME PROOF DEFERRED TO OWNING MISSIONS** | `21-§8`, `21-§9`, `21-§12-1`–`21-§12-5`, `22-§6-2`–`22-§6-4`, `22-§6-6`–`22-§6-10`, `22-§29-3` |
| Employee/external identities | **CONCUR WITH BOUNDED FIXTURE-BASED PROOF; NO FEATURE-COMPLETION CLAIM** | `21-§10-1`–`21-§10-6`, `21-§11-1`–`21-§11-2`, `21-§15-1`–`21-§15-4`, `21-§23-1`–`21-§23-6`, `20-§16-1`–`20-§16-3`, `20-§23-11` |
| Confirmation and audit | **CONCUR WITH FOUNDATION; DURABILITY AND DENIAL-CAPTURE QUALIFICATIONS** | `21-§18-1`–`21-§19-8`, `22-§14-1`–`22-§14-5`, `22-§14-7`–`22-§14-8`, `22-§19`, `22-§29-12` |
| Dashboard, Inventory and cross-business scenarios | **CONDITIONAL ON BACKEND DENIAL PROOF** | `17-§13-1`–`17-§14-7`, `17-§18-1`–`17-§22-9`, `7-§10-1`–`7-§15-12`, `21-§24-1`–`21-§24-12` |
| Schema-stability and shared-foundation continuity | **CONCUR AS DESIGN CONSTRAINTS, NOT RUNTIME PROOF** | `21-§16-1`–`21-§16-2`, `21-§22`, `22-§20-1`, `22-§20-3`–`22-§20-4`, `22-§28-2`, `22-§28-8`–`22-§28-9`, `BP-§7-1`–`BP-§7-2` |

### Additional finding SEC-S7-07 — Audit evidence of denied actions

<badge color="warning">Additional security risk</badge>

Draft E5 correctly proposes audit of security-relevant denials.

However, if a denial raises an exception and the audit insert occurs in the same failed database transaction, that audit insert may also roll back. The requirement to retain denial evidence therefore needs an explicit future mechanism or independently durable event path, with suitable privacy and data-minimization controls.

This concerns `21-§19-6`, `22-§14-8`, and `22-§29-12`.

The report must not infer durable denial auditing from an append-only table definition alone.

### Additional finding SEC-S7-08 — ESC-1 dependencies may be under-marked

The audit rows are already `CONDITIONAL`, which is appropriate. Two neighboring conclusions also deserve explicit review of their durability wording:

- `22-§14-5` cites transaction correction events as the existing correction-history precedent.
- `BP-§7-1` describes existing append-only history as protection for Product & Price Master continuity.

Neither should imply universal durability while ESC-1 remains open. I am requesting a finding-scoped dependency review, not a change to either row's FCTM disposition.

### Additional finding SEC-S7-09 — `FEASIBLE` and `PENDING` are not implementation evidence

Most rows describe future mechanisms as feasible, while their independent-review status remains `PENDING`. That is a valid draft structure only if feasibility is understood as an engineering assessment of the proposed direction.

The word must not be treated as proof that the intended behavior already exists, has been tested, or is accepted.

For security-sensitive rows whose conclusions depend on ESC-1, G-3, G-4, G-6 or current authorization-state evidence, the named dependency must remain explicit.

## 8. `N/R` classification challenges

Not every `N/R` entry needs security-specialist review merely because it mentions a technical object. However, I identified the following entries for reclassification or explicit justification before Mission Control relies on the register.

| Currently `N/R` | Required treatment |
|---|---|
| `22-§17` | **Change to `PENDING`.** A kernel contract intended for future integrations is an authorization-sensitive interface, including caller identity, business scope and bypass prevention. |
| `22-§21` | **Change to `PENDING`.** Kernel performance can affect availability and denial correctness if authorization checks are bypassed or weakened to solve latency. Review is bounded to security consequences, not general performance optimization. |
| `22-§22` | **Change to `PENDING`.** Testability of the permission foundation is a core security-assurance obligation. |
| `22-§23-1` | **Change to `PENDING`.** Merchant ownership and absence of platform-role business-data access are security/privacy properties. |
| `22-§29-10` | **Change to `PENDING`.** Narrow-failure behavior for kernel denial and parser failure must not leak protected data or permit partial unauthorized action. |
| `BP-§10.1-9` | **Change to `PENDING` for its isolation-testing coverage and evidence adequacy only.** Whether tests become a required branch-protection check remains Mission Control's separate G-5 decision. |

The following additional `N/R` entries merit a narrow reconsideration where their claimed behavior is later relied on as a security guarantee: `21-§20-3` (denial does not damage unrelated session authority), `21-§21-2` and `21-§23-7` (denial audit must not become staff accusation or scoring), `22-§13-1` (clarification before consequential action), and `22-§14-6` (human-context provenance).

These are not requests to convert every experience or process row into a specialist security finding. They identify specific intersections between the approved merchant experience and security enforcement.

## 9. Evidence limitations and reliance disclosure

| Evidence area | What I verified | What remains unverified |
|---|---|---|
| PR identity | Exact compare between the authorized baseline and review head | Any later changes to PR #641 |
| ESC-1 | Owner DELETE policy/grant, user-to-business cascade, correction-event cascades, Inventory guard and relevant Catalog trigger definitions | Complete current effective FK/trigger inventory; runtime deletion outcomes |
| Isolation | Existing Owner resolver, owner-scoped policies and Stage 7 proposed kernel | Future Manager/Employee and multi-business runtime behavior |
| Grants | Broad grant migration and Inventory correction migration | Current production ACL, default ACL and migration state |
| Reference Cost | Cost-inclusive product-read path and cost-free builder precedent | Implemented field-level delegation or derived-value safety |
| Imports | Current Owner lookup, privileged batch claim and command-path relationships | Future mid-import revocation atomicity and replay behavior |
| Audit | Existing Catalog/transaction event structures and proposed authority-audit design | Durable audit under all deletion, rollback and lifecycle states |
| Test environment | Repository-described Full Assurance/test architecture | Fresh provider identity, migration alignment and available safe fixtures |

**Correlated-assumption disclosure:** I previously reviewed SB-P-1.11 Catalog authorization, executor-role design, import/security boundaries, and related infrastructure. I therefore independently re-read the relevant schema, functions and server handlers rather than simply accepting that previous review as current proof. The Catalog executor and preview-token patterns remain useful precedents, not automatically sufficient SB-P-1.12 designs.

No privileged provider or production inspection was conducted.

---

## 10. Required corrections and handover to Mission Control

<box border={{size:1,color:"#DC2626"}} radius="lg" padding={4} gap={2}>
  <title size="lg">Material correction — ESC-1</title>
  Record Mission Control's existing T8 classification, retain the durability hold, reconcile its affected audit rows, distinguish the two deletion paths, and avoid selecting a product or technical remediation before the appropriate decision.
</box>

The other requested corrections are bounded to Stage 7's security-assessment wording and traceability: qualify multi-membership feasibility against the complete authorization surface; specify WS-B as narrowly evidenced grant/default-privilege reconciliation rather than blanket function revocation; preserve G-3 financial inference holds; qualify import-revocation feasibility against concurrency and privileged bookkeeping; explicitly address durable denial audit; and reconsider the identified `N/R` entries.

These are **review findings**, not an instruction to implement SQL, edit the Blueprint immediately, or bypass Mission Control's disposition process.

Mission Control should distinguish three outcomes when dispositioning this report: supported design direction; finding-scoped correction or additional evidence needed before reliance; and Founder/Mission Control-reserved questions that the specialist must not settle.

<box border={{size:1,color:"#D97706"}} radius="lg" padding={4} gap={2}>
  <badge color="warning">Final MC-40 disposition</badge>
  **INDEPENDENT SECURITY REVIEW SUBMITTED — CORRECTION REQUIRED — ESC-1 T8 OPEN**

  No Stage 7 approval, Blueprint lock, EIS authorization, migration, implementation, Git mutation or production certification is issued.

  This report covers the independently reviewable security material at the exact PR #641 head. Mission Control must disposition the findings and any corrected draft must be re-examined where it materially changes the reviewed conclusions.
</box>
