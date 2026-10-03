# SB-P-1.12 — Founder GitLab Setup Guidance

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation  
**Authority:** MC-187  
**Canonical baseline verified before research:** `main@f9173579fff910ead748f2c421fa90ecbfbd7706`  
**Role:** Infrastructure / Provider Operations specialist  
**Scope:** guidance/research only; no GitLab, GitHub, Supabase, Lovable, CI, mirror, credential, SQL, migration, runtime or production mutation

### Official GitLab URLs

Use only these GitLab-owned pages for this setup:

- GitLab.com sign up: https://gitlab.com/users/sign_up
- GitLab.com sign in: https://gitlab.com/users/sign_in
- Signed-in profile page: https://gitlab.com/-/profile
- Signed-in password and authentication page: https://gitlab.com/-/profile/password/edit
- User account / profile documentation: https://docs.gitlab.com/user/profile/
- User password documentation: https://docs.gitlab.com/user/profile/user_passwords/
- Two-factor authentication documentation: https://docs.gitlab.com/user/profile/account/two_factor_authentication/
- 2FA recovery / recovery-code documentation: https://docs.gitlab.com/user/profile/account/two_factor_authentication_troubleshooting/
- New group page: https://gitlab.com/groups/new
- Group documentation: https://docs.gitlab.com/user/group/
- Group-management documentation: https://docs.gitlab.com/user/group/manage/
- Namespace documentation: https://docs.gitlab.com/user/namespace/
- Subgroup documentation: https://docs.gitlab.com/user/group/subgroups/
- New project page: https://gitlab.com/projects/new
- Project-creation documentation: https://docs.gitlab.com/user/project/
- Project/group visibility documentation: https://docs.gitlab.com/user/public_access/
- Reserved project/group names and naming rules: https://docs.gitlab.com/user/reserved_names/
- GitLab.com Free user/group limits: https://docs.gitlab.com/user/free_user_limit/
- Repository mirroring documentation: https://docs.gitlab.com/user/project/repository/mirror/
- GitLab Organizations documentation: https://docs.gitlab.com/user/organization/

The direct signed-in settings URLs redirect to GitLab sign-in when no authenticated session exists. That is normal.

### Before you start

Use a **Lighthouse / Team LIPS-controlled business mailbox** that the Founder can recover without depending on the affected GitHub account. GitLab's current sign-up form explicitly asks for a company email and recommends a work email.

Use the Founder's real human identity for the user account fields. The business-unit identities belong in the GitLab groups. The Founder-controlled account is the human control point; the groups are the organizational structure.

Do **not** select **Continue with GitHub** or later connect GitHub as a sign-in service. The purpose of this GitLab account is provider-independent continuity. Making GitHub the GitLab authentication dependency would recreate the failure domain this work is intended to remove.

Prepare, privately and outside chat:

- access to the business mailbox;
- a strong unique GitLab password;
- an authenticator app/device for TOTP;
- a secure human-controlled place for GitLab recovery codes.

Do not send any password, MFA secret, one-time code, recovery code, token, key or browser session data to Mission Control or an AI.

Choose a **personal/Founder-specific GitLab username that is not** any of these target top-level group paths:

- `lighthouseips`
- `team-lips`
- `lips-learners`

A GitLab personal namespace uses the username as a top-level namespace. Using one of the required group paths as the username could consume the namespace needed for the group.

The exact requested group paths are syntactically valid under GitLab's current naming rules: they begin and end with letters, use only allowed letters/dashes, do not contain consecutive special characters, do not end in `.git` or `.atom`, and are not in GitLab's reserved top-level group-name list. The project slug `smart-business-continuity` also satisfies the documented project/group slug rules.

**Availability is a separate question from syntax.** GitLab must show the exact path as available at creation time. If GitLab reports any one of `lighthouseips`, `team-lips`, `lips-learners` or `team-lips/smart-business-continuity` as unavailable, **STOP** and report the exact unavailable path to Mission Control. Do not improvise a suffix, number, abbreviation or alternate spelling.

### Step 1 — Create the Lighthouse-controlled GitLab account

1. Open https://gitlab.com/users/sign_up.
2. In **First name** and **Last name**, enter the Founder's real human name.
3. In **Username**, choose the Founder-specific handle prepared above. Do not use `lighthouseips`, `team-lips` or `lips-learners`.
4. In **Company email**, enter the approved Lighthouse / Team LIPS business mailbox.
5. Create the strong unique GitLab password directly in GitLab. Keep it human-only.
6. Do **not** select **Continue with GitHub**.
7. Do not use another social sign-in provider as the primary dependency for this continuity account.
8. Select GitLab's normal **Continue** / account-creation action.
9. Complete any GitLab email-verification or anti-abuse steps shown by GitLab.
10. Sign in with the GitLab username/email and password, not GitHub.

At this point, do not create a project in the personal namespace. The Smart Business continuity repository belongs under the `team-lips` group.

### Step 2 — Secure the account with 2FA and recovery

GitLab's current documentation places 2FA under **Edit profile > Access > Password and authentication**.

1. While signed in, select the avatar in the upper-right corner.
2. Select **Edit profile**.
3. In the left sidebar, select **Access > Password and authentication**.
4. Find **One-time password authenticator**.
5. Select **Register authenticator**.
6. GitLab displays a QR code / OTP setup details. Scan or enter them only into the Founder's chosen authenticator. Do not copy the secret into chat, Git, notes visible to AI, or Mission Control.
7. Enter the current GitLab password if GitLab requests it.
8. Enter the current six-digit authenticator code directly into GitLab.
9. Complete registration and confirm GitLab reports the authenticator as successfully configured.
10. When GitLab presents recovery codes, save them immediately under human custody. GitLab documents that OTP recovery codes are single-use and should be copied/printed or downloaded and stored safely.
11. Do not send the recovery-code values to Mission Control or any AI.

Confirm 2FA works:

1. Open a private/incognito browser window or sign out of the normal session.
2. Sign in with the GitLab username/email and GitLab password.
3. Complete the GitLab 2FA challenge using the authenticator.
4. If GitLab.com also asks for an email OTP as part of its current password-sign-in controls, complete that directly from the business mailbox. This is still GitLab-native authentication and does not create a GitHub dependency.
5. Confirm you reach the GitLab account successfully.

Important recovery fact from current GitLab documentation: on GitLab.com Free, GitLab Support cannot reset 2FA for a locked-out Free account. Recovery codes and the Founder's authenticator recovery therefore matter. Keep the recovery material under human custody.

### Step 3 — Verify GitHub-independent sign-in

Use GitLab's current UI terminology: **Service sign-in** and **Connected Accounts**.

1. Sign in to GitLab with the GitLab username/email, password and 2FA.
2. Select the avatar.
3. Select **Edit profile**.
4. In the left sidebar, select **Access > Password and authentication**.
5. Locate the **Service sign-in** section.
6. Under **Connected Accounts**, verify that **GitHub is not connected**.
7. Do not select any GitHub connect/sign-in button.
8. If GitHub is unexpectedly shown as connected, **STOP** and return that fact to Mission Control before proceeding.
9. Confirm the normal password-based sign-in works by signing out and signing back in without choosing GitHub.
10. Confirm the business mailbox can receive GitLab account email. Do not perform a password reset merely as a test unless there is a real need; GitLab's documented reset path is **Sign in > Forgot your password?** and sends reset email to a verified account email.

The required result is:

- GitLab user authentication works independently of GitHub;
- GitHub is not listed as a connected sign-in service;
- the business mailbox is part of the GitLab-native account recovery path;
- 2FA recovery codes are stored securely under human control.

### Step 4 — Create `lighthouseips`

Purpose: parent-firm websites and parent-firm repositories.

1. In GitLab, select **Create new (+)** in the upper-right corner.
2. Select **New group**.
3. Select **Create group**.
4. For **Group name**, enter `lighthouseips`.
5. For **Group URL**, enter exactly `lighthouseips`.
6. Wait for GitLab to show that the group path is available.
7. If the exact path is unavailable, **STOP**. Do not create an alternative.
8. For **Visibility level**, select **Private**.
9. If GitLab asks **Who will be using this group?**, select the business/team option that accurately describes Lighthouse.
10. If GitLab asks what the group will be used for, choose the normal code/repository use case.
11. Do not invite additional members as part of this guidance package.
12. Select **Create group**.
13. Confirm the resulting top-level path is exactly `lighthouseips`.

Do not create a project inside this group yet. GitLab groups can exist as organizational containers without an initial project.

### Step 5 — Create `team-lips`

Purpose: Team LIPS technology and product-development repositories, including the Smart Business continuity copy.

1. Select **Create new (+) > New group > Create group**.
2. Set **Group name** to `team-lips`.
3. Set **Group URL** to exactly `team-lips`.
4. Wait for GitLab to confirm the path is available.
5. If unavailable, **STOP** and report `team-lips` to Mission Control.
6. Set **Visibility level** to **Private**.
7. Use the business/team and code/repository options if GitLab asks the optional personalization questions.
8. Do not invite members as part of this package.
9. Select **Create group**.
10. Confirm the resulting top-level path is exactly `team-lips`.

This is the group that must own `smart-business-continuity`.

### Step 6 — Create `lips-learners`

Purpose: LIPS Learners unit repositories.

1. Select **Create new (+) > New group > Create group**.
2. Set **Group name** to `lips-learners`.
3. Set **Group URL** to exactly `lips-learners`.
4. Wait for GitLab to confirm the path is available.
5. If unavailable, **STOP** and report `lips-learners` to Mission Control.
6. Set **Visibility level** to **Private**.
7. Complete only the optional business/team usage fields if GitLab presents them.
8. Do not invite additional users as part of this package.
9. Select **Create group**.
10. Confirm the resulting top-level path is exactly `lips-learners`.

A new GitLab.com Free account created after January 27, 2026 is limited to **three top-level groups**. This step uses the third and final Free-tier top-level group slot. The personal namespace does not count toward that three-group limit.

### Step 7 — Create `team-lips/smart-business-continuity` as private and blank

This project must be **private, blank, downstream and non-canonical**.

1. Open the `team-lips` group.
2. In the upper-right corner, select **Create new (+)**.
3. Select **In this group > New project/repository** if GitLab shows the in-group option. Otherwise select **New project/repository** and explicitly choose the `team-lips` namespace in the project form.
4. Select **Create blank project**.
5. For **Project name**, enter exactly `smart-business-continuity`.
6. For **Project slug**, confirm exactly `smart-business-continuity`.
7. For the project **Namespace** / project URL owner, select `team-lips`. The resulting path must be exactly `team-lips/smart-business-continuity`.
8. If GitLab reports that exact project path unavailable, **STOP** and return the conflict to Mission Control. Do not invent another slug.
9. If **Project deployment target** is shown, select **No deployment planned** or leave deployment unset.
10. Set **Visibility Level** to **Private**.
11. **Clear / leave unchecked** **Initialize repository with a README**. GitLab's official project documentation states that selecting this option initializes the Git repository and creates a default branch. It must remain unchecked.
12. Do not choose any project template.
13. Do not add a license.
14. Do not add a `.gitignore`.
15. Do not select any CI/CD starter or `.gitlab-ci.yml` template.
16. Do not enable Secret Detection or any onboarding option that creates initial files/history.
17. Do not create sample code.
18. Do not create a wiki page if doing so would create repository history.
19. Do not configure **Repository mirroring**.
20. Do not enable GitLab CI or Auto DevOps as part of this package.
21. Select **Create project**.

Verify that it is truly empty before reporting completion:

1. Stay on the new project page.
2. GitLab should show the empty-repository state. Current GitLab documentation refers to the UI text **"The repository for this project is empty"** for a blank project.
3. There should be no default branch and no commit history yet.
4. Do not click any button to create a README, file or branch. GitLab documents that creating a branch from an empty project can create a blank `README.md` commit; do not do that.
5. Open **Settings > Repository**.
6. Expand **Mirroring repositories** and verify no mirrored repository is configured. Do not add one.
7. Do not create or run a pipeline. No `.gitlab-ci.yml` should exist because the repository must contain no commit at all.

The intended pre-seed project state is: project object exists, repository contains **zero commits**.

### Step 8 — Verify the final structure

Confirm the GitLab UI shows this exact structure:

```text
lighthouseips

team-lips
└── smart-business-continuity

lips-learners
```

Verify all of the following before reporting back:

- `lighthouseips` exists as a top-level group.
- `team-lips` exists as a top-level group.
- `lips-learners` exists as a top-level group.
- `smart-business-continuity` is inside `team-lips`, not the Founder's personal namespace and not another group.
- Exact project path: `team-lips/smart-business-continuity`.
- All three groups are Private.
- The Smart Business continuity project is Private.
- The project is still in GitLab's empty-repository state with zero commits.
- No README, license, `.gitignore`, sample code or `.gitlab-ci.yml` exists.
- **Settings > Repository > Mirroring repositories** has no configured mirror.
- No GitLab CI setup or pipeline has been performed.
- GitHub `SmartBusinessv1/smart-business` remains the canonical Smart Business repository.
- GitLab is only the approved private, downstream, non-canonical continuity destination. This setup step does not seed it.

### What to send back to Mission Control

The Founder may send only non-secret facts:

- GitLab username/account handle;
- confirmation that 2FA is enabled;
- confirmation that recovery codes are stored securely under human custody;
- confirmation that GitHub is not connected under **Service sign-in > Connected Accounts**;
- exact top-level group paths:
  - `lighthouseips`
  - `team-lips`
  - `lips-learners`
- exact project path:
  - `team-lips/smart-business-continuity`
- confirmation that all three groups are Private;
- confirmation that the project is Private;
- confirmation that the repository is blank / zero commits;
- confirmation that no mirroring is configured;
- confirmation that GitLab CI has not been enabled or run;
- any exact namespace/path availability conflict.

Do not send screenshots that expose passwords, QR codes, TOTP secrets, OTP values, recovery codes, tokens, private keys, browser cookies or other secrets. A normal screenshot of the final group/project hierarchy may be used only after confirming it contains no secret material.

### What must never be sent to Mission Control / AI

Never send, paste, upload, screenshot or dictate any of the following:

- GitLab password;
- MFA / TOTP seed or QR-code secret;
- OTP / one-time authentication codes;
- GitLab recovery codes;
- personal access token;
- project, group or other access token;
- SSH private key;
- private encryption key;
- recovery phrase;
- browser session cookie;
- authenticator backup secret;
- email account password;
- any credential or secret.

These values must remain human-controlled and outside Git, chat, Mission Control reports and AI-visible communication.

### Current GitLab limitations / caveats

**Free top-level group limit.** Current GitLab documentation states that accounts created after **January 27, 2026** on GitLab.com Free are limited to **three top-level groups**. The personal namespace does not count. Therefore the Founder-approved `lighthouseips`, `team-lips`, `lips-learners` structure is permitted on Free **if all three exact paths are available**, but it consumes all three Free top-level group slots.

**Free private-namespace user limit.** GitLab.com Free private top-level namespaces can have up to five unique users. Membership in subgroups/projects counts toward that top-level namespace total. That does not block this Founder-only initial setup, but it matters before adding a larger team.

**Namespace/path uniqueness.** A top-level group path is the URL namespace and must be available. GitLab's group-creation UI checks this. GitLab documentation also states that group names/paths must be unique when changing a group path. For this package, exact-path availability is a hard stop: no fallback naming is authorized.

**Naming rules.** Current GitLab rules say usernames and project/group slugs must start and end with a letter or digit; slugs may use letters, digits, underscores, dots and dashes; consecutive special characters are not allowed; and slugs cannot end in `.git` or `.atom`. Group/project names have their own documented allowed-character sets. None of the requested paths is on GitLab's documented reserved-name lists. Therefore:
- `lighthouseips` — syntax valid, not reserved;
- `team-lips` — syntax valid, not reserved;
- `lips-learners` — syntax valid, not reserved;
- `smart-business-continuity` — syntax valid, not reserved.

This does **not** prove live availability. The Founder must rely on GitLab's creation-time availability check.

**Private hierarchy behavior.** GitLab documents that a private group can contain only private subgroups/projects. Using Private for each top-level group and the Smart Business project therefore matches the continuity requirement.

**Organizations feature.** GitLab's newer **Organizations** feature is currently documented as **Beta**, **closed beta**, invitation-only, and **not ready for production use**. Do not build this continuity structure around the Organization beta. GitLab's normal **Groups / top-level groups / projects** model is the appropriate current production structure for this setup.

**Groups versus subgroups.** The Founder-approved model requires three top-level business-unit groups. GitLab supports top-level groups and nested subgroups. No subgroup is required for the initial Smart Business continuity project; the project belongs directly under `team-lips`.

**Blank-project behavior.** Selecting **Initialize repository with a README** creates a default branch and initial repository history. Leave it off. Also avoid empty-repository UI actions that create a branch/file, because GitLab documents that such actions can create a blank README commit.

**Mirroring.** GitLab supports repository mirroring, but this setup package explicitly requires **no mirror configuration yet**. Verify **Settings > Repository > Mirroring repositories** is empty. Seeding/synchronization is a later governed step.

### Exact authoritative GitLab source list

1. **Sign up · GitLab** — https://gitlab.com/users/sign_up  
   Supports the current GitLab.com signup URL, company-email field, normal password registration and the visible **Continue with GitHub** alternative that must not be used.

2. **User account | GitLab Docs** — https://docs.gitlab.com/user/profile/  
   Supports profile navigation and the current **Service sign-in** / **Connected Accounts** terminology and connect/disconnect location under **Access > Password and authentication**.

3. **User passwords | GitLab Docs** — https://docs.gitlab.com/user/profile/user_passwords/  
   Supports GitLab-native password management and the documented **Forgot your password?** email reset path.

4. **Two-factor authentication | GitLab Docs** — https://docs.gitlab.com/user/profile/account/two_factor_authentication/  
   Supports **Edit profile > Access > Password and authentication**, OTP authenticator registration, sign-in flow, recovery-code generation and current GitLab.com password-sign-in authentication behavior.

5. **Troubleshooting two-factor authentication | GitLab Docs** — https://docs.gitlab.com/user/profile/account/two_factor_authentication_troubleshooting/  
   Supports recovery-code use/regeneration and the important Free-account caveat that GitLab Support cannot reset 2FA for GitLab.com Free accounts.

6. **Groups | GitLab Docs** — https://docs.gitlab.com/user/group/  
   Supports the role of groups, top-level groups/subgroups, group hierarchy, visibility, and the click path **Create new > New group > Create group**.

7. **Manage groups | GitLab Docs** — https://docs.gitlab.com/user/group/manage/  
   Supports group-path handling and uniqueness considerations when managing group URLs.

8. **Namespaces | GitLab Docs** — https://docs.gitlab.com/user/namespace/  
   Supports the distinction between personal namespaces and group namespaces and how namespace paths structure project URLs.

9. **Subgroups | GitLab Docs** — https://docs.gitlab.com/user/group/subgroups/  
   Supports GitLab's nested group model and subgroup behavior.

10. **Create a project | GitLab Docs** — https://docs.gitlab.com/user/project/  
    Supports **Create blank project**, project name/slug/visibility fields and the fact that **Initialize repository with a README** initializes the Git repository and creates a default branch.

11. **Project and group visibility | GitLab Docs** — https://docs.gitlab.com/user/public_access/  
    Supports Private group/project behavior and the rule that private groups can contain only private subgroups/projects.

12. **Reserved project and group names | GitLab Docs** — https://docs.gitlab.com/user/reserved_names/  
    Supports the allowed naming/slug character rules and GitLab's reserved project/group path lists used to validate the four requested names syntactically.

13. **Free tier user and group limits | GitLab Docs** — https://docs.gitlab.com/user/free_user_limit/  
    Supports the current three-top-level-group limit for accounts created after January 27, 2026, the personal-namespace exclusion and the five-user limit for private Free top-level namespaces.

14. **Repository mirroring | GitLab Docs** — https://docs.gitlab.com/user/project/repository/mirror/  
    Supports the location **Settings > Repository > Mirroring repositories** and establishes that mirroring is an explicit configuration that this setup must leave unconfigured.

15. **Branches | GitLab Docs** — https://docs.gitlab.com/user/project/repository/branches/  
    Supports the current blank-project UI wording **The repository for this project is empty** and warns that creating content/branches from an empty repository can create repository history.

16. **Organizations | GitLab Docs** — https://docs.gitlab.com/user/organization/  
    Supports the current Organization feature status: Beta, closed beta/invitation-only, and not ready for production use. This is why the Founder setup should use the normal top-level Group model instead.

**GITLAB FOUNDER SETUP GUIDE SUBMITTED — STOP FOR MISSION CONTROL DISPOSITION**
