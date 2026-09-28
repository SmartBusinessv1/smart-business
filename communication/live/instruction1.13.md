# SMART BUSINESS MISSION CONTROL — MC-111

## SB-P-1.12 — Human Legal / Privacy / Retention Validation Package

**Status:** DRAFT — INEFFECTIVE UNTIL FOUNDER/AUTHORIZED-HUMAN MERGE AND MISSION CONTROL POST-MERGE VERIFICATION  
**Instruction/Package Record:** `communication/live/instruction1.13.md`  
**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation  
**Parent decision:** `communication/live/instruction1.12.md` — MC-109 Full R-2 Obligation-Set Reconciliation & Source-Accounting Decision  
**Related gates:** `communication/live/instruction1.9.md`, `communication/live/instruction1.11.md`  
**Canonical drafting baseline:** `main@ef2ff5f25c1219003696837899476eed3c71fa1e`  
**Date:** 2026-09-28

## 1. Purpose

Obtain competent human legal/privacy/retention validation for the unresolved Track A matters identified by MC-109 before Mission Control authorizes any numbered source-text proposal, source/FCTM/Blueprint reconciliation, retention schedule, deletion mechanism, implementation or production behavior.

This package does **not** ask counsel to redesign Smart Business Product Truth.

Founder Record 05 ESC1-6 and ESC1-7 remain the approved product decisions. Counsel is asked to validate the lawful retention/privacy treatment and applicability assumptions needed to implement those decisions safely.

## 2. Product and operating context for counsel

Smart Business is a merchant-facing SaaS product of Team LIPS / Lighthouse Information Publishing Service, initially targeting Kerala brick-and-mortar merchants including bakeries, groceries, mini-marts, supermarkets, cafes, restaurants and local retail.

The product is WhatsApp-first and is expected to hold business-operational records including transactions, subscription/payment information, audit/history data, employee/attendance information where enabled, merchant profile data and account/identity information.

The approved product rule relevant to this validation is:

A personal Smart Business identity may be deleted only after the final owned business has been permissibly deleted, no authorized membership remains and relevant obligations have been satisfied.

Transferred businesses survive independently. Historical financial/authority/audit history must not be destroyed by identity deletion. No business or identity may be deleted through an uncontrolled cascade.

The Founder-approved 90-day business lifecycle periods are **operational lifecycle rules only** and must not be treated as statutory personal-data retention periods.

## 3. Materials to provide to the validating professional

Provide the validating professional with at least the following canonical records:

1. `communication/live/instruction1.12.md` — MC-109 R-2 Full Obligation-Set Reconciliation.
2. `communication/live/instruction1.11.md` — MC-102 specialist evidence routing.
3. `communication/live/instruction1.9.md` — R-2 positive identity-deletion source-coverage gate.
4. `communication/missions/SB-P-1.12/founder/05-esc1-founder-product-decision-record.md` — especially ESC1-5, ESC1-6, ESC1-7 and ESC1-8.
5. `communication/missions/SB-P-1.12/claude-code/32-r2-positive-identity-deletion-source-coverage-assessment.md`.
6. `docs/phase-1-mission-blueprint/smart-business-features/18_Subscription_Payment_and_Account_Lifecycle.md`.
7. The preliminary Legal & Operations Track A evidence response dated 2026-09-28, clearly labelled as **preliminary/non-authoritative**.
8. Any current Privacy Policy, Terms of Service, merchant agreement, processor/subprocessor terms or retention policy that already applies to Smart Business, if such documents exist and are current.

Do not provide older superseded source text as governing authority without labelling it historical.

## 4. Required professional validation questions

The professional response must answer each question separately and identify the legal basis, applicability limits and unresolved assumptions.

### LV-1 — Merchant statutory business-record retention

For Smart Business's target merchant population in India/Kerala, identify which categories of records may be subject to mandatory retention, including where applicable:

- GST books/records;
- income-tax books/documents;
- company accounting books/vouchers;
- invoices, receipts and transaction records;
- payroll/employment/attendance records;
- payment/refund/chargeback/dispute records;
- other merchant statutory books hosted or processed by Smart Business.

For each applicable class, state:

- legal instrument / section / rule;
- who the legal duty falls on;
- triggering conditions or merchant/entity classes;
- retention period and event from which it runs;
- extensions for proceedings/investigations/disputes;
- whether Team LIPS is itself obliged to retain or merely processes/hosts records on behalf of the merchant.

Do **not** produce a universal retention period where applicability varies by merchant type or legal status.

### LV-2 — Team LIPS versus merchant responsibility

Validate the allocation of responsibility when Smart Business stores records that the merchant is legally required to preserve.

Clarify:

- whether Team LIPS has an independent legal duty to retain any such records;
- whether the obligation may be contractually allocated while the statutory duty remains with the merchant;
- what minimum contractual/Terms/Privacy disclosures are required;
- whether deletion of a merchant's Smart Business account/business can occur while certain hosted records remain solely for statutory retention;
- whether access to those retained records must continue for the merchant or may become restricted archival retention.

### LV-3 — Personal-data erasure versus lawful retention

Validate the rule that deletion of a Smart Business personal identity should erase or irreversibly anonymize personal data whose purpose has ended, while retaining only personal data that remains lawfully necessary.

For each surviving category, identify:

- lawful retention basis;
- whether the data must or may remain identifiable;
- whether minimization/pseudonymization is expected or advisable;
- whether the full live user profile may be deleted while legally retained records survive;
- any notice, consent, legitimate-use, statutory or claims-related constraints relevant under applicable Indian privacy law.

### LV-4 — DPDP Act / Rules timing and applicability

Confirm the effective/commencement status, as of the validation date, of the Digital Personal Data Protection Act, 2023 and applicable Rules/notifications relevant to:

- purpose limitation;
- consent withdrawal;
- erasure;
- legal-retention exceptions;
- Data Principal rights;
- notice obligations;
- processors;
- retention/deletion controls.

State which provisions are currently legally operative and which are future-effective, and how Smart Business should treat future-effective provisions in launch-time compliance architecture.

### LV-5 — Security / ICT log retention

Validate whether and to what extent CERT-In directions or other Indian cybersecurity/log-retention requirements apply to Team LIPS / Smart Business.

Clarify:

- applicable entity category;
- covered log types;
- minimum retention period;
- required storage/location;
- whether account/identity deletion may erase or alter retained security logs;
- how personal identifiers within such logs should be minimized or protected.

### LV-6 — Intermediary / registration-information retention

Determine whether Smart Business is likely to fall within any "intermediary" or analogous legal category for the relevant processing, and whether any specific post-account-cancellation preservation rule for registration information or removed content applies.

Do not assume intermediary obligations apply merely because Smart Business is an online service.

### LV-7 — Historical audit attribution after identity deletion

Validate whether Smart Business may retain a durable historical actor identifier after deletion of the active user identity where the underlying business/audit record legitimately survives.

Specifically address:

- whether a pseudonymous historical actor identifier is permissible;
- whether a reversible mapping may be retained and, if so, on what basis and for how long;
- when the identifier remains personal data;
- whether irreversible anonymization is preferable or legally required in any class;
- what minimum attributes may survive for accounting/audit/claims/security purposes;
- whether preserving attribution without retaining active authentication/profile data is legally sound.

### LV-8 — Deletion proof / tombstone

Validate whether Smart Business may retain a minimal deletion certificate, tombstone or ledger entry after personal identity deletion.

Assess whether it may contain:

- non-reusable/pseudonymous subject reference;
- deletion request/reference ID;
- request/eligibility/execution dates;
- categories erased;
- categories retained;
- legal basis and expiry for retained categories;
- legal-hold status;
- processor/subprocessor deletion confirmation state;
- backup-deletion status;
- executor/system version.

State what should **not** be retained because doing so would defeat the deletion.

### LV-9 — Backups and restoration

Validate acceptable treatment of deleted personal data in backups, including:

- whether immediate physical deletion from immutable backups is required or whether expiry through a defined backup cycle is acceptable;
- restoration safeguards preventing deleted identities/data from silently reappearing;
- whether deletion tombstones/replay mechanisms are legally appropriate;
- maximum retention considerations if any.

### LV-10 — Disputes, claims, refunds, chargebacks and legal holds

Clarify when an unresolved:

- refund;
- chargeback;
- payment dispute;
- litigation;
- regulatory investigation;
- complaint;
- legal claim;
- statutory notice;

may justify retaining identity-related personal data after the ordinary purpose has ended.

Distinguish retention of the **record/case** from retention of the full active Smart Business identity.

### LV-11 — Employment / payroll / attendance data

Where Smart Business processes staff/employee attendance, payroll-related or employment records, identify any specific retention or privacy duties that may survive owner/business/account deletion.

Clarify whether the owner's personal-identity deletion may affect records relating to employees or ex-employees.

### LV-12 — Final legal validation of the MC-109 architecture

Review the following MC-109 working architecture and classify each statement as:

- **VALIDATED**;
- **VALIDATED WITH CONDITIONS**;
- **NOT VALIDATED / REQUIRES CHANGE**; or
- **OUTSIDE LEGAL SCOPE**.

Statements:

1. Identity deletion and record retention are separate lifecycle operations.
2. The 90-day Founder-approved business lifecycle is not a universal legal-retention period.
3. The full live user profile need not be retained merely because statutory/audit records survive.
4. Surviving personal data should be minimized to the purpose that justifies retention.
5. Historical attribution may survive without granting authority/access.
6. A minimal deletion-proof record may survive if its contents and retention basis are lawful.
7. Merchant statutory records may sometimes survive deletion of the Smart Business identity/business account.
8. A support ticket/complaint alone is not a legal basis to retain the full identity unless an underlying obligation requires it.
9. A payment/commercial record may survive even where the live identity is deleted, unless that specific unresolved obligation genuinely requires the person to remain identifiable/active.
10. Retention periods must be record-class-specific and legally grounded.

## 5. Required output format

The professional response must contain:

1. **Professional identity and capacity** — lawyer/privacy professional/CA or other relevant qualification; jurisdiction and scope of engagement.
2. **Documents reviewed** — exact Smart Business materials and legal instruments reviewed.
3. **Executive legal conclusion** — short answer on whether MC-109's working retention/privacy architecture is legally supportable.
4. **LV-1 through LV-12 answers** — each separately numbered.
5. **Retention matrix** — record class, legal basis, applicability, duty holder, retention period/event, extension/hold rule, personal-data treatment.
6. **Personal-data disposition matrix** — erase / retain-minimized / must retain / optional-retention-not-justified.
7. **Audit-attribution conclusion**.
8. **Deletion-proof/tombstone conclusion**.
9. **Backup conclusion**.
10. **Open legal issues / assumptions**.
11. **Required policy/contract changes**, if any.
12. **Explicit statement whether additional Founder product decisions are legally required**, distinguishing law from product preference.
13. **Professional validation status:** PASS / PASS WITH CONDITIONS / HOLD / FAIL.
14. **Name/date/sign-off or otherwise verifiable professional attribution.**

## 6. Evidence standard

The validation must distinguish:

- mandatory legal retention;
- permissive/defensible retention;
- contractual retention;
- merchant-owned statutory duty;
- Team LIPS-owned statutory duty;
- legal hold / claims preservation;
- security log retention;
- privacy minimization;
- irreversible anonymization;
- pseudonymization;
- operational convenience.

"Useful for future analytics", "may be needed someday", or generic fraud/security language is not enough to justify indefinite personal-data retention.

Where applicability is uncertain, the response must state the uncertainty and the fact needed to resolve it.

## 7. Authority boundary

The professional may determine legal applicability and advise required changes.

The professional must **not** be treated as authorizing:

- Product Truth changes;
- mission reassignment;
- Contract 18 reinterpretation beyond legal analysis;
- schema or table design;
- SQL/migration;
- deletion mechanism;
- payment-provider implementation;
- production deployment.

If the legal conclusion requires a change to approved Product Truth, Mission Control will route that issue separately to the Founder.

## 8. Mission Control acceptance rule

Mission Control may treat Track A as authoritatively complete only after:

1. a competent human professional has answered the validation package;
2. the response identifies its professional capacity and legal basis;
3. material applicability assumptions are explicit;
4. retention periods are not generalized beyond their actual legal scope;
5. Team LIPS versus merchant responsibility is addressed;
6. audit attribution, deletion proof, backups and legal holds are addressed;
7. Mission Control has reconciled the response against MC-109;
8. any required Founder decision is separately obtained;
9. any material legal disagreement with MC-109 is resolved before source patching.

A second professional review may be required if the first opinion expressly limits scope in a way that leaves a material R-2 question unanswered.

## 9. Submission handling

The professional response should be preserved as a dated evidence artifact or signed opinion/memo with stable provenance.

Do not place unnecessary confidential legal advice or personal data into a public repository. If counsel marks material privileged/confidential, preserve only the minimum repository-safe Mission Control conclusion and evidence reference necessary to prove the gate was completed.

Mission Control must not fabricate a legal conclusion from an incomplete response.

## 10. Current holds

Until MC-111 validation is returned and reconciled:

- R-2 remains **OPEN / CRITICAL PATH / SOURCE-COVERAGE HOLD**;
- Track A remains **PRELIMINARY COMPLETE / AUTHORITATIVE HUMAN VALIDATION OUTSTANDING**;
- ESC-1 remains **OPEN T8**;
- `22-§20-2` remains **BLOCKED / IN SCOPE**;
- historical authority/audit/financial durability remains HELD;
- G-6/T4 remains UNVERIFIED.

No numbered source amendment, FCTM/Blueprint correction, Stage 8, EIS, deletion mechanism, implementation, SQL, migration, payment-provider action or production action is authorized by this package.

**STOP: AFTER HUMAN LEGAL/PRIVACY/RETENTION VALIDATION RETURNS, SUBMIT IT TO MISSION CONTROL FOR MC-112 LEGAL-EVIDENCE RECONCILIATION BEFORE ANY SOURCE-TEXT PROPOSAL.**
