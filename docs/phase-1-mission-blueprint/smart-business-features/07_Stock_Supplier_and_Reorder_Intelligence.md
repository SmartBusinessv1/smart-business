# Smart Business Feature Definition — Stock, Supplier & Reorder Intelligence

**Status:** NOTEBOOKLM SEED — DEEP EXTRACTION REQUIRED  
**Build commitment:** BUILD NOW  
**Commercial availability:** Manager core for operational intelligence; Smart Stock Assistant available as Ledger add-on  
**Authority boundary:** Founder-feature elaboration / Product Blueprint input. Not yet implementation-ready.

---

## 1. Feature Family Identity

This feature family helps merchants understand what stock exists, what is moving, what is at risk, what may need reorder, and which supplier relationship is involved.

It should reduce avoidable stock loss and mental tracking without turning Smart Business into a rigid ERP.

---

## 2. Stock Intelligence Seed

NotebookLM briefing directly identifies:

- stock movement;
- expiry risk;
- slow-moving products;
- wastage;
- low/reorder awareness;
- usefulness for supermarkets, bakeries, restaurants and other inventory-heavy businesses.

Current Product Truth additionally preserves the distinction between Manager Stock Intelligence and Smart Stock Assistant packaging for Ledger.

---

## 3. Supplier Management Seed

NotebookLM briefing describes Supplier Management as working with:

- supplier organization;
- purchasing decisions;
- Reorder Intelligence;
- Smart Reminder Assistant;
- multilingual supplier communication.

Supplier access remains limited to the communication required for supplier workflows; suppliers do not receive merchant business intelligence.

---

## 4. Reorder Intelligence Seed

Reorder Intelligence should support the Owner/Manager in understanding when stock may need replenishment.

AI may suggest.

The Owner retains final decision authority unless a separately approved delegated automation rule exists.

The broader historical product also contains the pattern:

**Owner pre-approves a bounded reorder rule → Smart Business may execute that stored authority when the condition is met.**

NotebookLM deep extraction must recover exact constraints and safeguards.

---

## 5. POS Relationship Seed

Inventory must be able to work without POS.

Where a standard POS bridge exists, POS data may support sales/stock intelligence.

Custom POS modifications inside Smart Business core remain rejected; integration belongs at the edge.

The exact authority between POS data, Smart Business inventory state and manual/WhatsApp corrections requires deeper feature extraction.

---

## 6. Shared Foundations

This feature family should reuse common Smart Business systems for:

- Product/Catalog identity where applicable;
- Business Memory;
- permissions;
- reminders;
- supplier identities;
- automation rules;
- Universal Document Intelligence for imports;
- WhatsApp communication;
- Ask CFO and Daily Intelligence consumption.

Do not create isolated supplier/reorder/reminder systems per feature.

---

## 7. Unresolved Deep-Extraction Questions

NotebookLM must still recover:

- inventory quantity/update semantics;
- units and conversions;
- batches and expiry handling;
- wastage recording;
- slow-moving-product logic;
- reorder threshold and suggested quantity logic;
- supplier preference and history;
- purchase-order / reorder communication flow;
- supplier confirmation behaviour;
- automatic reorder authority and limits;
- POS sync direction and conflicts;
- manual/WhatsApp/Excel/POS update precedence;
- stock correction/audit history;
- employee permissions;
- Manager vs Ledger+Smart-Stock differences;
- alerts and Daily Intelligence integration;
- Ask CFO inventory questions;
- failure/retry behaviour.

See NotebookLM question bank Questions 40–51.

---

## 8. Completion Gate

This seed records the connected feature family but does not authorize implementation from summary-level assumptions.

Deep NotebookLM Q&A must establish the workflow and authority model before Blueprint/EIS use.
