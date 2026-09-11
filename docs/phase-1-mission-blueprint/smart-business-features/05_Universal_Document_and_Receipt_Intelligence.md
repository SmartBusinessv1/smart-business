# Smart Business Feature Definition — Universal Document & Receipt Intelligence

**Status:** MATURE RECONCILED CONTRACT  
**Build commitment:** **BUILD NOW**  
**Commercial availability:** Core cross-feature capability  
**Authority boundary:** Documents may inform and prepare business updates; consequential updates require the approved preview/confirmation path when uncertainty or material impact exists.

---

## 1. Feature Identity

Universal Document Intelligence is the shared Smart Business capability for understanding merchant documents without forcing merchants to retype them.

It covers receipts, invoices, bills, order sheets, stock documents, rosters, compliance records, spreadsheets, PDFs, photos and other approved business documents.

Receipt Intelligence and the Receipt Cabinet are part of this broader shared foundation.

---

## 2. Founder Problem Statement

Small merchants already work with paper, photos, WhatsApp attachments, Excel files and PDFs.

Smart Business should adapt to those habits by helping convert real-world documents into structured business memory safely.

The system must not trade convenience for silent data corruption.

---

## 3. Mandatory Processing Pattern

For uncertain or consequential business updates, the canonical behavior is:

**document/photo/file → interpret → preview → clarify where needed → confirm → validated update**

The preview should expose the important interpreted fields in human-readable form.

If confidence is insufficient or fields conflict, Smart Business must ask the smallest useful clarification rather than guess.

---

## 4. Supported Inputs

Subject to approved technical limits, the capability should support:

- camera/photo images;
- uploaded images;
- PDF documents;
- Excel spreadsheets;
- CSV files;
- receipts;
- purchase/sales invoices;
- handwritten or partially handwritten business documents where technically interpretable;
- stock/opening-stock documents;
- roster/attendance-related documents;
- customer/order lists;
- compliance/licence documents.

A specific parser/provider/file-size choice belongs to implementation, not product truth.

---

## 5. Receipt Intelligence

For receipts, bills and invoices, Smart Business should be able to interpret relevant fields such as:

- merchant/supplier/customer identity where present;
- date;
- total amount;
- tax where available;
- line items where reliably extractable;
- payment information where present;
- document number/reference;
- other business-relevant fields.

Missing or unclear information must be surfaced, not invented.

---

## 6. Receipt Cabinet

Original documents should be retained according to approved storage/retention policy and linked to the relevant business records.

Authorized users should be able to retrieve documents by conversational or visual search, including by:

- date/period;
- party;
- amount;
- document type;
- linked transaction/order/inventory/compliance record.

Historical fixed storage-migration dates are not product requirements.

---

## 7. Cross-Feature Reuse

Universal Document Intelligence must be shared by feature families rather than duplicated.

Examples:

- Ledger receipt → preview → Ledger update;
- opening stock spreadsheet → preview → inventory update;
- supplier invoice → purchase/stock/ledger preparation;
- employee roster photo/PDF → HR draft;
- customer/order sheet → order draft;
- licence document → Compliance Shield record/reminder preparation.

Each destination feature remains responsible for its own permission, validation and write rules.

---

## 8. Channels

Document intake should be available through approved channels including:

- WhatsApp;
- Smart Business Conversation Workspace;
- visual upload/import surfaces.

The same document should not be interpreted under materially different business rules merely because it arrived through a different channel.

---

## 9. Preview and Confirmation

A preview must make consequential interpretation understandable before commit.

Depending on use case it may show:

- recognized document type;
- key fields;
- line items;
- destination feature/record;
- fields requiring confirmation;
- possible duplicates;
- warnings about unreadable/unsupported content.

Confirmation should apply to the proposed business update, not merely to file upload.

---

## 10. Clarification and Safe Rejection

Smart Business should clarify or safely reject when:

- the document is unreadable;
- two plausible parties match;
- totals conflict;
- line items cannot be interpreted reliably;
- a spreadsheet schema is unknown;
- required fields are missing;
- a duplicate import is possible;
- the document appears unrelated to the current business task;
- the user lacks permission for the destination action.

An uncertain document write must stop safely without blocking unrelated operations.

---

## 11. Duplicate and Idempotency Protection

Imports and retries must not create duplicate business events merely because:

- a user uploads the same file again;
- a network request retries;
- a parser job is replayed;
- the same document arrives through another supported channel.

The EIS should define practical fingerprint/idempotency behavior for each destination workflow.

---

## 12. Roles and Permissions

Document visibility and actions are role-scoped.

### Owner

May access business documents and destination workflows within Owner authority.

### Manager

May access operational documents only where delegated.

### Employee / Staff

May upload/use documents only for permitted operational tasks and must not gain Owner financial intelligence through document access.

### Support / Super Admin

No routine broad access to merchant documents. Account-specific access must be purpose-limited, authorized and auditable.

---

## 13. AI Behaviour

AI may:

- classify document type;
- extract candidate fields;
- normalize text/units where safe;
- identify likely linked business records;
- flag conflicts/duplicates;
- prepare a human-readable preview;
- ask clarification.

AI must not:

- invent missing values;
- silently resolve material conflicts;
- write consequential records from ambiguous documents;
- expose document contents across businesses/roles;
- claim unsupported legal/compliance validity.

---

## 14. Real-World Document Quality

The feature should handle ordinary imperfect merchant documents where technically possible, including:

- folds;
- shadows;
- stamps;
- skew;
- photographed paper;
- mixed printed/handwritten content;
- low-quality scans.

No fixed or absolute OCR accuracy promise is Product Truth.

---

## 15. Data and Audit Requirements

A mature implementation should preserve concepts such as:

- business-scoped original file identity;
- uploader/actor;
- upload timestamp;
- parser/interpretation result;
- preview state;
- confirmation/rejection state;
- destination linkage;
- idempotency/duplicate handling;
- errors/exceptions;
- audit trail for consequential updates.

Exact table/service names belong to EIS design.

---

## 16. Privacy and Security

Requirements include:

- strict business isolation;
- secure storage/access;
- minimum necessary retention;
- malware/content-type/size validation as appropriate;
- least-privilege parser access;
- no cross-business retrieval;
- no silent use of merchant documents for unrelated purposes.

---

## 17. Failure Handling

The feature must provide recoverable states for:

- unsupported type;
- corrupted file;
- parser timeout/failure;
- partial extraction;
- duplicate import;
- destination-write failure;
- expired preview;
- permission failure;
- storage failure;
- retry/replay.

Parser failure must not create partially trusted production records.

---

## 18. Acceptance Scenarios

Future verification should prove at least:

- receipt photo → preview → confirmed Ledger update;
- ambiguous receipt requires clarification;
- PDF invoice interpretation;
- Excel/CSV preview before consequential import;
- opening-stock import into shared inventory foundation;
- duplicate upload/retry protection;
- original document retrieval from linked business record;
- WhatsApp and Conversation Workspace using the same interpretation rules;
- permission-scoped staff upload;
- cross-business isolation;
- parser failure with no silent partial write.

---

## 19. Non-goals / Rejected Historical Behaviour

This contract does not authorize:

- direct OCR-to-production write where material uncertainty exists;
- duplicated parser systems per feature without architectural need;
- fixed historical provider/model choices as product truth;
- unsupported 99%+ accuracy claims;
- historical automatic 180-day purge as current default retention policy.

---

## 20. Dependencies

Universal Document Intelligence depends on:

- Permission Engine;
- storage foundation;
- parser/processing infrastructure;
- Human Language Layer where interpretation requires it;
- destination feature validation/write services;
- Conversation Workspace/WhatsApp intake for conversational use.

---

## 21. Completion Gate

The feature is complete only when the shared interpret-preview-confirm-update foundation, Receipt Cabinet retrieval, destination integration, permissions, idempotency and failure handling have passed runtime and independent verification.
