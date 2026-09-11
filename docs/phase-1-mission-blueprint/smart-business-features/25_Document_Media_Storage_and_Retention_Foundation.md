# Smart Business Feature Definition — Document, Media Storage & Retention Foundation

**Status:** MATURE RECONCILED CONTRACT — FULL HYDRATION PASS  
**Build commitment:** **BUILD NOW — SHARED STORAGE / MEMORY FOUNDATION**  
**Commercial availability:** Shared across Ledger, Manager and approved add-ons  
**Authority boundary:** Cloudflare R2 stores eligible files. Supabase remains the authoritative control plane for ownership, permissions, metadata, business linkage and retrieval authorization. Storage providers do not own Business Memory or product logic.

---

## 1. Feature Identity

This foundation defines how Smart Business preserves document, image, voice and other media memories without overloading the primary application/database platform or creating uncontrolled storage cost as merchant usage grows.

It exists because Smart Business cannot reliably predict how many receipts, invoices, photos, voice notes, documents and other media objects subscribers may create each day.

The product therefore separates:

- business metadata and permissions;
- object/file storage;
- retrieval authorization;
- retention lifecycle;
- provider-specific infrastructure.

---

## 2. Founder Problem Statement

Smart Business is intended to become a long-lived Business Memory for merchants.

That memory can contain large and unpredictable media volume, including:

- receipt photos;
- invoices and bills;
- handwritten documents;
- uploaded PDF/Excel/CSV files;
- stock/roster photos;
- voice notes;
- generated or returned files;
- other approved business media.

If all binary media remains concentrated inside the same platform used for transactional database/authentication workloads, storage growth can create avoidable capacity pressure and cost.

The Founder-approved direction is therefore to use Cloudflare R2 as the primary object-storage layer for eligible file memories while Supabase continues to control the authoritative metadata, merchant ownership, business linkage, permissions and retrieval authorization.

---

## 3. Lighthouse Principles

- Technology serves sustainable human usefulness.
- Merchant memory must remain durable and retrievable.
- Merchant data belongs to the merchant.
- Storage cost should scale responsibly rather than force unnecessary platform expense.
- One storage architecture should serve multiple features rather than each feature building a separate media bucket universe.
- Provider choice must not weaken privacy, business isolation or continuity.

---

## 4. Core Architecture Rule

The intended responsibility split is:

**Cloudflare R2**

stores eligible binary objects/files.

**Supabase / Smart Business data layer**

controls:

- merchant/business ownership;
- actor/source identity;
- permissions;
- object metadata;
- business-record linkage;
- lifecycle state;
- retention state;
- retrieval authorization;
- audit/provenance;
- references required to locate/retrieve the R2 object.

Smart Business clients must not treat a raw R2 object URL as the authorization model.

---

## 5. Why R2 Is a First-Class Infrastructure Decision

Cloudflare R2 is not merely historical trivia.

The Founder selected R2 to protect Smart Business from unpredictable high-volume media growth and avoid paying the primary database/application platform for large quantities of file storage when a dedicated object-storage platform can serve the same durable-storage role more economically.

This direction is especially important because media volume is usage-driven and difficult to forecast subscriber-by-subscriber.

The product requirement is therefore:

> Keep the Smart Business control plane and Business Memory metadata authoritative in Supabase while moving eligible binary storage load to Cloudflare R2.

Exact bucket topology, lifecycle classes and access mechanism belong to the implementation architecture/EIS.

---

## 6. Users and Features Depending on This Foundation

This foundation serves, where applicable:

- Ledger / Business Memory;
- Universal Document & Receipt Intelligence;
- Receipt Cabinet;
- Conversation Workspace;
- WhatsApp Intelligence;
- Voice / Voice Plus;
- Staff/HR uploads;
- Stock/Supplier/Reorder documents;
- Smart Order & Delivery proof;
- Compliance documents;
- Support attachments;
- payment/reconciliation evidence;
- future approved media-based capabilities.

A new feature must reuse this foundation unless a materially different storage requirement is justified.

---

## 7. Supported Object Classes

Eligible objects may include:

- images/photos;
- receipts;
- invoices;
- scanned/photographed handwritten documents;
- PDFs;
- spreadsheets and CSV exports/imports;
- voice/audio files;
- delivery proof;
- compliance evidence;
- support evidence;
- generated downloadable reports/files where durable retention is required.

Feature-specific validation remains controlled by the relevant feature contract.

---

## 8. Upload / Ingest Flow

A normal ingest flow should account for:

1. authenticated/identified source;
2. business and actor resolution;
3. permission/entitlement validation;
4. file safety/type/size validation;
5. object upload to the approved storage path;
6. authoritative metadata record in Smart Business/Supabase;
7. link to the relevant domain record/document memory;
8. interpretation pipeline where required;
9. confirmation before consequential domain updates where required;
10. audit/provenance capture.

A binary upload succeeding without its authoritative metadata/business linkage must not be treated as completed business memory.

---

## 9. Retrieval Flow

When a merchant/client requests a stored file:

1. Smart Business identifies the current user/business/session;
2. Supabase/permission services verify that the actor may access the linked object;
3. Smart Business resolves the current storage reference;
4. a controlled retrieval path is issued to the client;
5. the client retrieves the R2-backed object;
6. access/audit events are recorded where required.

Supabase therefore remains the retrieval control plane even when the binary bytes reside in R2.

The architecture may use signed/temporary URLs or a controlled proxy/edge retrieval mechanism, but exact implementation belongs to security/engineering design.

---

## 10. Business Memory Relationship

R2 does not become Business Memory by itself.

Business Memory lives in the connected Smart Business domain model.

For each durable media object, Smart Business should know enough to answer questions such as:

- which merchant/business owns this object;
- who created/uploaded it;
- which channel/source produced it;
- what feature/domain record it belongs to;
- what document/media type it is;
- whether it has been interpreted;
- which current object location/version is authoritative;
- who may retrieve it;
- what retention state applies;
- whether it was deleted/replaced/migrated.

---

## 11. Universal Document Intelligence Relationship

Universal Document Intelligence may read/interpret eligible objects, but it must not create its own independent storage universe.

UDI should use this foundation for original/source media and keep its interpretation/preview/confirmation/domain-write state linked through authoritative Smart Business metadata.

Core principle:

**stored object ≠ interpreted fact ≠ confirmed business record**.

All three must remain distinguishable.

---

## 12. Voice Memory Relationship

Voice notes may generate:

- original audio;
- transcription;
- structured intent/extraction;
- resulting business record;
- assistant response.

The original audio, where retention is justified, belongs to the shared object-storage foundation.

The transcription/structured meaning and resulting business record remain governed data in Smart Business/Supabase.

Retention of raw voice must be purpose-limited and should not be longer than needed merely because object storage is inexpensive.

---

## 13. WhatsApp and Conversation Workspace Relationship

WhatsApp and the native Conversation Workspace must use the same storage foundation for equivalent media types.

They must not create separate channel-specific copies merely because the media arrived through different interfaces.

Channel metadata may differ, but ownership, permissions, retrieval and durable object identity remain shared.

---

## 14. Object Identity and Deduplication

The storage foundation should support stable internal object identity independent of provider URL shape.

Where technically appropriate, implementation should support:

- idempotent upload handling;
- duplicate external event protection;
- duplicate-content detection where useful and privacy-safe;
- retry without creating multiple authoritative object records;
- orphan detection and cleanup.

A changing provider URL must not silently create a new business document identity.

---

## 15. Provider Reference and Portability

Smart Business should preserve provider-independent internal references wherever practical.

Provider-specific object keys, bucket names and URL formats are infrastructure details.

Business/domain records should not become impossible to migrate because a Cloudflare URL format was embedded as permanent product truth.

The architecture must support future provider migration without changing merchant-facing semantics or losing document/media linkage.

---

## 16. Storage Lifecycle

The storage model may distinguish lifecycle states such as:

- active/recent;
- archived;
- pending deletion;
- deleted;
- quarantined;
- failed/orphaned.

The exact transition timings are not locked by this product contract.

Historical 60-day Supabase-to-R2 migration timing remains provenance unless a later implementation/EIS deliberately re-adopts it.

---

## 17. Retention and Deletion Boundary

This contract does **not** lock an exact long-term retention/deletion duration after cancellation/non-payment.

That remains an unresolved Founder/lifecycle decision.

Current durable principles are:

- merchant data should remain exportable through the approved lifecycle path;
- deletion must be deliberate, auditable and permission/governance controlled;
- cancellation/non-payment must not trigger uncontrolled destructive deletion merely because an old implementation used a fixed timer;
- legal/compliance retention needs may differ by object/domain;
- privacy minimization still applies even when storage is cheap.

Historical 180-day destructive purge/cascade behavior is not current authority.

---

## 18. Cost and Capacity Principle

The architecture should use the right platform for the right workload.

Supabase should not be forced to carry unpredictable binary-media growth simply because it already hosts application data.

R2 is intended to absorb file/object storage growth so Smart Business can:

- reduce pressure on Supabase storage capacity;
- reduce avoidable storage cost;
- scale media-heavy Business Memory more predictably;
- preserve a clean separation between structured business truth and binary media.

Cost optimization must not weaken retrieval latency, durability, security or merchant access.

---

## 19. Security and Privacy

Storage must protect:

- merchant isolation;
- customer privacy;
- employee privacy;
- business document confidentiality;
- sensitive financial evidence;
- compliance evidence;
- credentials/secrets.

Requirements include:

- no public-by-default merchant object access;
- no guessable authorization through raw object paths;
- purpose-limited access;
- least-privilege service credentials;
- no credentials in client code;
- access governed by current permissions, not historical access;
- appropriate validation/scanning/safety checks for uploaded content.

---

## 20. Failure Handling

The foundation must handle:

- failed upload;
- interrupted upload;
- metadata written but object missing;
- object written but metadata write failed;
- provider timeout;
- temporary R2 outage;
- expired/invalid signed access;
- corrupted object;
- missing object/reference drift;
- duplicate webhook/upload retry;
- lifecycle/migration failure;
- orphan object;
- retrieval permission change between request and delivery.

Failure must be explicit and recoverable where possible. No feature should claim successful durable storage when object and authoritative metadata are inconsistent.

---

## 21. Recovery and Reconciliation

Engineering should support reconciliation mechanisms for detecting and repairing mismatches between:

- Supabase metadata and R2 objects;
- object references and current provider keys;
- domain records and stored media;
- deletion state and actual object presence.

Recovery must preserve auditability and must not invent lost business content.

---

## 22. Backup and Durability

The storage architecture must document:

- provider durability assumptions;
- backup/recovery expectations;
- how metadata and object recovery are coordinated;
- restore testing where required;
- what happens when one side of the metadata/object pair is restored without the other.

A database backup alone is not a complete media-memory backup if binary objects live in R2.

---

## 23. Auditability

Where material, Smart Business should preserve events such as:

- upload/creation;
- actor/source/channel;
- object identity;
- domain linkage;
- interpretation/processing state;
- storage migration;
- replacement/version change;
- retrieval/access where sensitive;
- retention state change;
- deletion request/execution;
- recovery/reconciliation action.

Audit data belongs in governed Smart Business storage, not only provider logs.

---

## 24. Performance Expectations

Merchant retrieval should feel responsive under normal conditions.

Implementation should consider:

- geographic latency;
- signed URL/proxy overhead;
- media size;
- progressive loading/download;
- caching where privacy-safe;
- avoiding repeated unnecessary transfers;
- appropriate thumbnails/previews only where they add value without creating uncontrolled duplicate-object sprawl.

Performance optimization must not bypass authorization.

---

## 25. Integration Ownership

Primary responsibilities:

**Cloudflare R2**

- durable object storage;
- provider-level object availability;
- storage API operations.

**Supabase / Smart Business**

- identity;
- business ownership;
- permissions/RLS/control-plane authorization;
- metadata;
- domain linkage;
- lifecycle state;
- retrieval authorization;
- audit/business history.

**OpenAI / AI orchestration**

- interpretation/reasoning over authorized content where required;
- never storage ownership or retrieval authority.

**WhatsApp / Conversation Workspace**

- media ingress/egress experience;
- never storage truth or authorization ownership.

---

## 26. Acceptance Scenarios

Future Product Mission/EIS verification should prove at least:

1. a receipt/image/document/voice object can be stored in R2 with authoritative merchant metadata in Supabase;
2. an unauthorized actor cannot retrieve another business's object even if an object reference is known;
3. an authorized merchant request resolves metadata and retrieves the correct object;
4. WhatsApp and Conversation Workspace resolve the same durable object identity rather than duplicate channel-specific files;
5. UDI can interpret an authorized stored object without taking ownership of storage permissions;
6. failed object upload does not create a false completed document record;
7. failed metadata write after upload is detected/reconciled rather than silently orphaned;
8. duplicate upload/retry does not create duplicate authoritative business memory;
9. provider URL/key migration does not break domain linkage;
10. R2/provider outage is narrowly contained and clearly surfaced;
11. object access is revoked when the underlying permission is revoked;
12. retention/deletion follows current lifecycle policy rather than historical fixed purge timing;
13. backup/recovery verifies metadata/object consistency;
14. storage metrics can be observed for capacity/cost planning without exposing merchant private content.

---

## 27. Explicit Non-goals / Rejected Behaviour

This foundation does not authorize:

- storing all unpredictable binary media in Supabase merely for convenience;
- using R2 as the authoritative permission system;
- public permanent merchant-file URLs by default;
- duplicate media silos per feature/channel;
- embedding provider-specific URLs as permanent business identity;
- deleting merchant Business Memory based solely on obsolete historical timers;
- treating cheap storage as permission for indefinite unnecessary retention;
- allowing AI/provider tools to bypass Supabase/Smart Business authorization.

---

## 28. Historical Corrections / Evolution

Historical evidence included:

- early static Supabase Storage use;
- later 60-day migration from Supabase Storage to Cloudflare R2;
- later 180-day non-payer destructive purge logic.

Current reconciled direction preserves the important architecture lesson:

- object storage should be offloaded to R2 to protect Supabase capacity/cost;
- Supabase controls ownership, permissions and metadata;
- Smart Business retrieves authorized objects through that control plane;
- exact migration/retention/deletion timers require current governed implementation decisions.

Historical automatic destructive purge mechanics are not current authority.

---

## 29. Provenance

Reconciled from:

- Founder current clarification on the Supabase/R2 cost-and-capacity rationale;
- Founder-origin Section 7 storage/media recovery;
- Smart Business Environment Activation Manual Cloudflare R2 activation profile;
- P00 Operational Profiles object-storage ownership and cross-platform rules;
- Universal Document/Receipt Intelligence contract;
- Shared Product Foundations;
- Subscription/Account Lifecycle retention boundary;
- Final Feature Reconciliation Register;
- current security/privacy/permissions governance.

---

## 30. Completion Gate

This foundation is complete enough for implementation only when future Product Blueprint/EIS work defines and verifies:

- R2 object-storage architecture;
- Supabase metadata/control-plane schema;
- access/retrieval authorization;
- object identity/reference model;
- upload/retry/idempotency behavior;
- storage/provider failure recovery;
- reconciliation/orphan handling;
- backup/recovery coordination;
- security/privacy controls;
- current retention/deletion policy;
- observability/cost/capacity controls.

---

## Final Principle

**Put structured business truth and authority where Smart Business can govern it. Put large unpredictable media where dedicated object storage can scale economically. Keep the merchant experience unified.**
