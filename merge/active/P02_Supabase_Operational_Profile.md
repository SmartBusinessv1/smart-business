# P02_Supabase_Operational_Profile

## Metadata

- Profile ID: P02
- Platform: Supabase
- Category: Operational Profile
- Authority: Source 17 – Smart Business AI Development Operating Manual
- Status: Founder Approved
- Version: 1.0

---

# Purpose

Define how Supabase participates in Smart Business development.

Supabase provides the secure backend foundation for Smart Business.

It implements approved architecture and never defines Product Truth.

---

# Authority Chain

17 AI Development Operating Manual
↓
P02 Supabase Operational Profile
↓
Supabase Platform

---

# Mission

Implement secure, scalable and maintainable backend services while faithfully expressing the approved Product Truth.

---

# Mandatory Reading

Before every implementation inherit:

- Source 11 – Product Truth
- Source 12 – Feature Implementation Blueprint
- Source 13 – Feature Acceptance Matrix
- Source 14 – Pilot Readiness Audit
- Source 15 – Mission Control Activation
- Source 17 – AI Development Operating Manual

Never design from assumptions.

---

# Primary Responsibilities

Supabase owns:

- PostgreSQL database
- Authentication
- Row Level Security (RLS)
- Storage
- Edge Functions
- Realtime services
- Database migrations
- Backend APIs where approved
- Audit-ready data foundations

---

# Boundaries

Supabase shall not:

- redefine Product Truth
- redesign workflows
- redesign subscriptions
- duplicate business entities
- bypass permissions
- bypass Mission Control
- invent features

---

# Database Principles

Maintain:

- One source of truth
- UUID-based merchant isolation
- Normalized schema
- Auditability
- Migration safety
- Future scalability

Reuse before creating new tables.

---

# Authentication Rules

Support approved methods:

- WhatsApp
- Email & Password
- Future approved providers

All methods map to the same Smart Business identity and permissions.

---

# Security Standards

Implement:

- Row Level Security
- Least-privilege access
- Secure storage policies
- API protection
- Secrets management
- Backup readiness

Security is mandatory.

---

# Storage Rules

Store:

- Receipts
- Documents
- Images
- Exports

Metadata belongs in the database.

Files belong in approved storage.

---

# Migration Rules

Every migration shall:

- be reversible where practical
- preserve merchant data
- avoid unnecessary downtime
- include validation
- maintain backward compatibility where possible

---

# Performance Principles

Optimise:

- indexes
- queries
- relationships
- caching strategy where appropriate

Avoid unnecessary complexity.

---

# AI Behaviour

Supabase-related AI shall:

- explain schema changes
- explain migration impact
- identify risks
- request clarification when architecture is unclear
- never guess

---

# Mission Control Workflow

Mission
↓
Read Sources
↓
Design
↓
Implement
↓
Validate
↓
Acceptance Check
↓
Return to Mission Control

---

# Standard Prompt Structure

- Mission ID
- Objective
- Relevant Sources
- Scope
- Database impact
- Security considerations
- Acceptance criteria

---

# Completion Checklist

Before completion verify:

- Product Truth respected
- Blueprint followed
- RLS verified
- Permissions verified
- Migration tested
- No duplicate entities
- Performance reviewed
- Documentation updated where required

---

# Common Mistakes

Avoid:

- duplicate tables
- missing RLS
- hardcoded permissions
- breaking migrations
- business logic in the wrong layer

---

# Controlled Evolution

This profile evolves only through:

- Founder approval
- Mission Control review
- Proven implementation experience

---

# Final Principle

Supabase protects Smart Business data.

It never defines what Smart Business is.
