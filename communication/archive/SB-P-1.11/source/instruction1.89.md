# SMART BUSINESS MISSION CONTROL

## SB-P-1.11-GC-1 — Founder / Platform Support Evidence Request

**Instruction ID:** instruction1.89  
**Authorized By:** Mission Control  
**Executing Human:** Founder  
**Mode:** EVIDENCE REQUEST ONLY  
**Build Mode Authority:** NONE  
**Production Migration Authority:** NONE

---

## 1. Purpose

Obtain one attributable, project-specific platform statement that closes EC-1 from `communication/live/report1.95.md`.

The unresolved fact is:

> What is the effective Cloudflare Workers per-request CPU-time ceiling for the production deployment of Lovable project `f3e992ec-06df-4d49-b157-b92ec064c078`?

No implementation, deployment, publish, migration, code change, or production-data mutation is authorized by this instruction.

---

## 2. Founder Action

Submit the following message through the official Lovable Support channel from the Founder/account context associated with the authorized project.

### Exact Support Message

**Subject:** Project-specific Cloudflare Workers CPU-time limit confirmation

Hello Lovable Support,

I am the Founder of Smart Business and need an authoritative runtime configuration clarification for one specific Lovable project.

**Lovable project ID:** `f3e992ec-06df-4d49-b157-b92ec064c078`  
**Project display name:** `Business Shell Foundation`

For this exact project's **production deployment on Lovable**, please confirm either:

1. the exact **effective Cloudflare Workers per-request CPU-time ceiling** that applies to a production request for this project; or, if Lovable cannot provide the effective ceiling directly,
2. the exact **Cloudflare Workers usage/account model or plan context** used for this project's production deployment together with any effective `limits.cpu_ms` override or equivalent runtime CPU configuration from which the per-request CPU ceiling can be determined unambiguously.

We specifically need the **project-specific effective production value**, not the general Cloudflare Workers platform limits.

For clarity:

- the project is currently private and unpublished;
- we are **not asking you to publish or deploy it** merely to answer this question;
- we are **not asking for any account secret, credential, token, internal customer data, or sensitive infrastructure detail**;
- we only need the runtime CPU-limit fact necessary to verify production compatibility and security architecture.

If the effective CPU ceiling is inherited from Lovable-managed infrastructure and is not visible to project owners, please state that and provide the effective value or the authoritative policy/configuration that applies to this exact project's production deployment.

Please include enough attribution in your reply to show that the answer applies to project ID `f3e992ec-06df-4d49-b157-b92ec064c078`.

Thank you,
Riyas PK
Founder — Smart Business / Team LIPS

---

## 3. Evidence Acceptance Rule

Mission Control may treat EC-1 as evidence-closed only if the response is attributable to Lovable/platform authority and explicitly tied to project `f3e992ec-06df-4d49-b157-b92ec064c078` or to an unambiguous Lovable-managed production runtime policy that demonstrably governs that exact project.

The following are insufficient:

- AI-agent speculation;
- generic Cloudflare documentation alone;
- Free/Paid plan inference;
- local `vite`, Wrangler, or Miniflare behavior;
- unpublished preview behavior;
- an answer that does not identify the project or governing runtime policy clearly enough to establish applicability.

---

## 4. Founder Return Package

When Lovable Support replies, the Founder shall return the attributable response to Mission Control without paraphrasing away any technical qualifiers.

Minimum evidence to retain:

- support response text;
- sender/platform attribution;
- date/time or case/ticket identifier if available;
- confirmation that the response concerns project `f3e992ec-06df-4d49-b157-b92ec064c078`.

Do not expose credentials, authentication tokens, or unrelated private account information when returning evidence.

---

## 5. Gate After Response

Do not reopen Build Mode from this instruction alone.

After the attributable response is received, Mission Control shall:

1. evaluate whether EC-1 is actually closed;
2. record the evidence in the repository through a new canonical instruction/report path;
3. if EC-1 is closed, issue the previously required short bounded Security & Permissions Architecture re-review;
4. authorize Claude Code Build Mode only after an explicit subsequent verdict:
   `PARSER ISOLATION SECURITY ARCHITECTURE READY FOR BUILD LOCK`.

Production migration remains blocked throughout.

---

## 6. Status

**AUTHORIZED FOR FOUNDER SUPPORT REQUEST ONLY**

No self-approval, implementation, deployment, or migration is authorized.

**Next logical step:** Founder submits the exact support message above and returns the attributable Lovable response to Mission Control.