Document: User Communication Pack

Version: 1.0

Status: DRAFT — templates only, nothing has been sent

Created By: Claude Code

Reviewed By: Mission Control (pending)

Mission: SB-MIG-1.2A

**No communication in this document has been sent to any user.** These are templates for Mission Control/the founder to review, personalize, and send at the appropriate time per `02-authentication-recreation-plan.md` §9's timing guidance.

# SB-MIG-1.2A — User Communication Pack (Task 10)

## 1. Pre-Migration Notice

*Send before the cutover, timed per `02-authentication-recreation-plan.md` §9 — after data is confirmed migrated and verified, not before.*

> Subject: An update to your Smart Business account
>
> Hi [name],
>
> We're moving Smart Business to a new, more reliable home behind the scenes. Your business information — [Bhai Store / Salamath Store], your sales records, and everything else — is safe and has already been carefully copied over and checked.
>
> The only thing that changes for you is how you sign in, and only once:
>
> [For the email/password user:] You'll receive a separate email shortly asking you to set a new password. This is a one-time step — after that, everything works exactly as before.
>
> [For the Google sign-in user:] The next time you sign in with Google, everything will work exactly as before — you shouldn't need to do anything differently.
>
> If anything looks wrong or unfamiliar, just reply to this email and we'll sort it out right away.
>
> Thank you for your patience while we make Smart Business better for you.

## 2. Password-Reset Instruction

*For User 1 only. Sent via Supabase's own invite-email mechanism (per `02-authentication-recreation-plan.md` §2–3), which has its own default template — this is a companion plain-language explanation, in case the founder wants to send it alongside or instead of relying solely on the automated email's default wording.*

> Subject: Please set your new Smart Business password
>
> Hi [name],
>
> As part of moving Smart Business to its new home, please set a new password using the secure link below. This takes less than a minute.
>
> [link]
>
> This link is just for you and works once. If you didn't expect this email, please let us know right away and don't click the link.
>
> Once you've set your new password, sign in as usual — your business information, [Bhai Store], will be exactly as you left it.

## 3. Migration-Complete Confirmation

*Sent after the founder acceptance test (runbook step 17) passes, and ideally after the bake window (runbook step 19) as well, so this message reflects genuine confidence, not a hopeful guess.*

> Subject: You're all set — Smart Business has moved
>
> Hi [name],
>
> Smart Business is now running on its new, more reliable home. Everything is in place: your business details, your sales history, and [your inventory / your records], exactly as they were.
>
> You don't need to do anything else. If you notice anything that doesn't look right, please reply to this email — we'll look into it immediately.
>
> Thank you for bearing with us during this change.

## 4. Login-Problem Support Response

*Held in reserve for either user if they report a sign-in issue during or after cutover.*

> Subject: Re: trouble signing in
>
> Hi [name],
>
> Sorry for the trouble — let's get this sorted quickly.
>
> [If email/password:] Could you try the "Forgot password" link on the sign-in page? That will send you a fresh link to set your password. If that doesn't work, let us know exactly what happens (any error message you see) and we'll investigate right away.
>
> [If Google sign-in:] Could you try signing in with Google again? If you see an error, please tell us exactly what it says — that helps us find the issue quickly.
>
> Your business information is safe regardless of this sign-in issue — nothing has been lost. We just need to get you signed back in.
>
> We'll stay on this until it's resolved.

## 5. Tone Notes for Whoever Sends These

- Neither user is a technical person (both are small grocery-store owners); avoid words like "migration," "backend," "database," or "OAuth" in anything actually sent — those words appear in this internal planning document but should not leak into user-facing text.
- Both messages should make clear that **their data is safe** before explaining any action needed — leading with reassurance, not with a task, matches the Lighthouse principle of human dignity this task's brief specifically invokes.
- Keep every message short enough to read on a phone in under 30 seconds — consistent with what's already known about these two users (small business owners, likely reading on mobile between customers).
