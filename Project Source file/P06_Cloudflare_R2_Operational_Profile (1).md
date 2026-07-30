# P06_Cloudflare_R2_Operational_Profile

## Metadata

- Profile ID: P06
- Platform: Cloudflare R2
- Category: Operational Profile
- Authority: Source 17 – Smart Business AI Development Operating Manual
- Status: Founder Approved
- Version: 1.0

---

# Purpose

Define how Cloudflare R2 participates in Smart Business.

Cloudflare R2 provides secure, scalable object storage for business assets.

It stores files. It never owns business logic or Product Truth.

---

# Authority Chain

17 AI Development Operating Manual
↓
P06 Cloudflare R2 Operational Profile
↓
Cloudflare R2

---

# Mission

Provide reliable, secure and cost-effective storage for merchant documents and media while integrating seamlessly with Smart Business.

---

# Mandatory Reading

Before implementation inherit:

- Source 11 – Product Truth
- Source 12 – Feature Implementation Blueprint
- Source 13 – Feature Acceptance Matrix
- Source 14 – Pilot Readiness Audit
- Source 15 – Mission Control Activation
- Source 17 – AI Development Operating Manual

Never implement from assumptions.

---

# Primary Responsibilities

Cloudflare R2 stores:

- Receipt images
- Invoice PDFs
- Business documents
- Product images
- Audio files
- Export files
- Future approved media

---

# Boundaries

Cloudflare R2 shall not:

- store business metadata as the system of record
- implement business rules
- manage permissions
- redefine Product Truth
- replace the database

Metadata belongs in Smart Business.

Files belong in object storage.

---

# Storage Principles

Maintain:

- Organized bucket structure
- Predictable object naming
- Version-aware uploads where required
- Secure access
- Lifecycle management

---

# Security Standards

Protect:

- Merchant documents
- Customer files
- Signed URLs
- Access credentials
- Bucket permissions

Never expose private objects publicly unless explicitly approved.

---

# Integration Rules

Integrate with:

- Supabase metadata
- WhatsApp media flows
- AI document processing
- Export services

Avoid duplicate file uploads.

---

# File Management

Support:

- Upload
- Download
- Replace
- Archive
- Delete (when permitted)

Maintain traceability.

---

# Performance Principles

Optimize:

- Upload speed
- Download speed
- Storage efficiency
- Caching where appropriate

Avoid unnecessary duplication.

---

# AI Behaviour

When implementing:

- Explain storage impact
- Identify security considerations
- Preserve file references
- Never guess bucket structure

---

# Mission Control Workflow

Mission
↓
Read Sources
↓
Design Storage Flow
↓
Implement
↓
Validate
↓
Acceptance
↓
Return

---

# Standard Prompt Structure

- Mission ID
- Objective
- Storage requirements
- Relevant Sources
- Constraints
- Expected Deliverables
- Acceptance Criteria

---

# Completion Checklist

Before completion verify:

- Product Truth respected
- Metadata linked correctly
- Storage secured
- Signed URLs verified
- Duplicate uploads avoided
- Documentation updated

---

# Common Mistakes

Avoid:

- storing metadata in object storage
- public buckets by default
- orphaned files
- broken file references
- duplicate uploads

---

# Controlled Evolution

This profile evolves only through:

- Founder approval
- Mission Control review
- Proven implementation experience

---

# Final Principle

Cloudflare R2 safeguards Smart Business files.

Smart Business remains the system of record.
