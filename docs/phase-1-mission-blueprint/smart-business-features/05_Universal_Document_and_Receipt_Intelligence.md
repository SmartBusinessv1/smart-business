# Smart Business Feature Definition — Universal Document & Receipt Intelligence

**Status:** NOTEBOOKLM SEED — DEEP EXTRACTION REQUIRED  
**Build commitment:** BUILD NOW  
**Commercial availability:** Core cross-feature capability  
**Authority boundary:** Founder-feature elaboration / Product Blueprint input. Not yet implementation-ready.

---

## 1. Feature Identity

Universal Document Intelligence allows merchants to work with business documents the way they already do: paper, photos, receipts, invoices, spreadsheets, PDFs and handwritten notes.

Receipt Intelligence is a focused financial-document capability within this broader document-understanding family.

---

## 2. Confirmed Input Types

Current NotebookLM briefing and Product Truth support:

- receipt photos;
- bills/invoices;
- PDFs;
- Excel;
- CSV;
- document images;
- handwritten paper/photos;
- duty-roster photos;
- handwritten order lists;
- WhatsApp documents;
- voice instructions that contextualize a document task.

---

## 3. Core Product Flow

The currently supported product pattern is:

**Document received → understand → create preview → user reviews/confirms → update correct records.**

Uncertain document interpretation must not silently create consequential business records.

---

## 4. Receipt Intelligence Seed

Receipt Intelligence should support the merchant uploading a receipt or bill instead of manually typing all details.

The result should connect to Business Memory and the Receipt Cabinet so the Owner can later retrieve records conversationally.

The deeper NotebookLM extraction must determine exact extracted fields, correction flow, duplicate detection, transaction-linking and storage expectations.

---

## 5. Receipt Cabinet Seed

The Receipt Cabinet is searchable business document memory.

Seed expectation:

- uploaded business documents remain retrievable;
- the Owner can ask conversationally for historical bills/receipts;
- permission boundaries apply to document access;
- document memory should connect to the underlying business context rather than become an isolated file dump.

---

## 6. Cross-Feature Examples Already Evidenced

### HR

A merchant photographs a handwritten duty roster and asks Smart Business to update shifts.

### Order & Delivery

A merchant uploads a handwritten order list and asks Smart Business to create an order / assign delivery.

### Inventory / Suppliers

Product Truth also anticipates inventory, supplier and business-record imports through supported documents.

These examples reinforce that Document Intelligence is a shared foundation, not a receipt-only subsystem.

---

## 7. Permission & Safety Seed

Document processing must:

- preserve merchant/business isolation;
- validate the user's authority to perform the requested update;
- avoid unsafe or unrelated content processing;
- create previews for consequential structured updates;
- preserve failure visibility instead of silently ignoring rows or fields.

---

## 8. Unresolved Deep-Extraction Questions

NotebookLM must still recover:

- full supported file types and size expectations;
- exact receipt fields;
- OCR/extraction correction flow;
- duplicate documents and duplicate transactions;
- partial-import handling;
- unreadable handwriting;
- conflicting spreadsheet rows;
- preview UX for single vs bulk updates;
- data/file retention and retrieval expectations;
- exports and templates;
- business-record linking;
- user notifications;
- failure/retry behaviour;
- provenance of extracted values;
- whether/how historical documents update Business Memory.

See NotebookLM question bank Questions 14–18.

---

## 9. Completion Gate

This seed protects the full capability family but is not yet a build specification.

Deep NotebookLM evidence must fill the exact document workflows before Blueprint/EIS creation.
