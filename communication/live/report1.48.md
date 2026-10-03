# SB-P-1.12 — Founder GitLab Setup Guide

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation  
**Authority:** MC-187  
**Canonical baseline verified before research:** `main@f9173579fff910ead748f2c421fa90ecbfbd7706`  
**Role:** Infrastructure / Provider Operations specialist — guidance and research only  
**Provider boundary:** No GitLab, GitHub, Supabase, Lovable, DNS, CI, repository-mirroring, credential, SQL, migration, runtime, or production mutation was performed.

### Official GitLab URLs

Use only these GitLab-owned pages for this setup:

- **Create a GitLab.com account:** https://gitlab.com/users/sign_up
- **Sign in to GitLab.com:** https://gitlab.com/users/sign_in
- **Your GitLab profile/settings landing page:** https://gitlab.com/-/profile
- **Password and authentication / 2FA settings:** https://gitlab.com/-/profile/two_factor_auth
- **Password-change page:** https://gitlab.com/-/profile/password/edit
- **GitLab user-account documentation:** https://docs.gitlab.com/user/profile/
- **Password documentation:** https://docs.gitlab.com/user/profile/user_passwords/
- **Two-factor authentication documentation:** https://docs.gitlab.com/user/profile/account/two_factor_authentication/
- **Recovery-code / 2FA recovery documentation:** https://docs.gitlab.com/user/profile/account/two_factor_authentication_troubleshooting/
- **Service sign-in / Connected Accounts documentation:** https://docs.gitlab.com/user/profile/#sign-in-services
- **Create a group:** https://gitlab.com/groups/new
- **Group-creation documentation:** https://docs.gitlab.com/user/group/#create-a-group
- **Create a project:** https://gitlab.com/projects/new
- **Blank-project documentation:** https://docs.gitlab.com/user/project/#create-a-blank-project
- **Project/group visibility documentation:** https://docs.gitlab.com/user/public_access/
- **Namespaces documentation:** https://docs.gitlab.com/user/namespace/
- **Reserved names and naming rules:** https://docs.gitlab.com/user/reserved_names/
- **GitLab.com Free user/group limits:** https://docs.gitlab.com/user/free_user_limit/
- **GitLab Organizations status:** https://docs.gitlab.com/user/organization/
- **Repository mirroring documentation:** https://docs.gitlab.com/user/project/repository/mirror/
- **Blank-project branch behavior:** https://docs.gitlab.com/user/project/repository/branches/

The direct profile/security URLs require you to be signed in. If opened while signed out, GitLab redirects you to the official sign-in page.

### Before you start

Use a **Founder-controlled Lighthouse / Team LIPS business mailbox** that you can access independently of GitHub. Use GitLab's normal email/username-and-password registration. Do **not** choose **Continue with GitHub** and do not connect GitHub later as a service sign-in method.

Use your real human identity for the GitLab user account where GitLab asks for your name. The business-unit structure belongs in GitLab **Groups**, not in a fabricated personal identity.

Choose a personal GitLab username that is **different from all three required top-level group paths**:

- do not use `lighthouseips` as the personal username;
- do not use `team-lips` as the personal username;
- do not use `lips-learners` as the personal username.

This matters because a GitLab username creates a personal namespace and namespace paths must be unique. Reserving those three exact strings for the three top-level Groups prevents the personal account from consuming one of the required business-unit paths.

Prepare, privately and before starting:

- access to the business mailbox;
- a unique GitLab password stored in your own human-controlled password-management method;
- an authenticator app/device for GitLab 2FA;
- a secure human-only place for GitLab recovery codes;
- enough uninterrupted time to complete registration, email verification, 2FA enrollment, and the three group creations.

The following remain **human-only** throughout this procedure:

- password entry;
- email verification codes;
- authenticator QR code / MFA seed;
- one-time authentication codes;
- recovery codes;
- any recovery-storage details;
- any future access token, SSH private key, or other credential.

Do not paste any of those into ChatGPT, Mission Control, GitHub, a repository file, an issue, a pull request, or any other AI-visible channel.

GitHub remains the canonical Smart Business host. The GitLab project created here is only a private, downstream, non-canonical continuity destination. Do not seed or mirror it during this setup package.

### Step 1 — Create the Lighthouse-controlled GitLab account

1. Open https://gitlab.com/users/sign_up.
2. Confirm the page says **Get Started with GitLab** and shows normal account fields.
3. Enter your real first and last name as the Founder/operator.
4. In **Username**, choose a distinct personal account handle. It must not be `lighthouseips`, `team-lips`, or `lips-learners`.
5. In **Company email**, enter the Founder-controlled Lighthouse / Team LIPS business mailbox selected for this account.
6. Create a strong, unique password. Enter it only into GitLab.
7. **Do not select Continue with GitHub.** Do not use GitHub as the registration identity provider.
8. Select **Continue**.
9. Complete any GitLab human-verification and email-verification steps that GitLab presents. If GitLab sends a verification or email-OTP code, enter it only into GitLab.
10. When registration is complete, sign in using the GitLab username/email and password route, not the GitHub button.
11. Open https://gitlab.com/-/profile and confirm the account profile is the account you just created.

Do not send the password, email verification code, session cookie, or any authentication material back to Mission Control.

### Step 2 — Secure the account with 2FA and recovery

GitLab's current UI documentation uses **Edit profile → Access → Password and authentication**.

1. In GitLab, select your avatar in the upper-right corner.
2. Select **Edit profile**.
3. In the left sidebar, select **Access → Password and authentication**.
4. In **One-time password authenticator**, select **Register authenticator**.
5. GitLab displays a QR code and OTP details. Treat both as secret authentication material.
6. On your own authenticator device/app, add the GitLab account by scanning the QR code or entering the details manually.
7. Back in GitLab, enter your current GitLab password.
8. Enter the current six-digit authenticator code.
9. Select **Register with two-factor app**.
10. GitLab should confirm enrollment and display recovery codes.
11. Download/copy/print the recovery codes using GitLab's offered method and store them securely under human custody.
12. Do **not** paste, photograph for AI review, commit, or send those recovery codes to Mission Control.
13. Sign out of GitLab.
14. Sign back in using your GitLab username/email and password.
15. When prompted, use the authenticator code. Successful sign-in confirms that password + 2FA works.

Do not test a recovery code merely for reassurance: GitLab recovery codes are single-use. Keep them for actual recovery.

GitLab's current documentation also warns that losing all valid 2FA recovery methods can permanently lock a GitLab.com Free account out because Support cannot reset 2FA for Free accounts. Treat recovery-code custody as a real continuity control, not an optional note.

### Step 3 — Verify GitHub-independent sign-in

GitLab's current official UI terminology is:

- **Password and authentication**
- **Service sign-in**
- **Connected Accounts**
- **Connect**
- **Disconnect**

Verify GitHub independence as follows:

1. Sign in using GitLab username/email + GitLab password + GitLab 2FA.
2. Select your avatar.
3. Select **Edit profile**.
4. Select **Access → Password and authentication**.
5. Locate **Service sign-in**.
6. Under **Connected Accounts**, locate GitHub.
7. The GitHub entry must **not** show an active/connected state.
8. If the GitHub entry offers **Connect**, leave it unconnected and continue.
9. If GitHub shows **Disconnect**, **Active**, or any wording that means GitHub is connected as a sign-in service, **STOP**. Do not disconnect or change it under this package; report the unexpected state to Mission Control.
10. Sign out again.
11. Open a private/incognito browser window.
12. Go to https://gitlab.com/users/sign_in.
13. Enter the GitLab username/email and password directly. Do not select the GitHub button.
14. Complete GitLab 2FA.
15. Confirm you reach the same GitLab account.

This verifies the working sign-in path does not depend on GitHub. It does not require exposing the password, OTP, MFA seed, or recovery codes.

### Step 4 — Create `lighthouseips`

Purpose: parent-firm websites and repositories belonging directly to Lighthouse Information Publishing Service.

1. While signed in, select **Create new (+)** in the upper-right corner.
2. Select **New group**.
3. Select **Create group**.
4. In **Group name**, enter exactly:
   `lighthouseips`
5. In **Group URL**, enter exactly:
   `lighthouseips`
6. Wait for GitLab to validate the path. GitLab's official tutorial shows the confirmation wording **Group path is available** when a path can be used.
7. If GitLab says `lighthouseips` is unavailable, invalid, or already taken, **STOP immediately**. Do not add numbers, punctuation, prefixes, or suffixes. Report exactly: `lighthouseips — unavailable`.
8. For **Visibility level**, select **Private**.
9. If GitLab asks **Who will be using this group?**, choose the option that truthfully represents your company/team use.
10. If GitLab asks what the group will be used for, choose the truthful repository/code use option.
11. Do not invite additional users as part of this setup.
12. Select **Create group**.
13. Confirm the browser path is `gitlab.com/lighthouseips` and the group shows **Private**.

Do not create a project in this group during this package.

### Step 5 — Create `team-lips`

Purpose: Team LIPS technology and product-development work, including Smart Business continuity.

1. Select **Create new (+) → New group → Create group**.
2. In **Group name**, enter exactly:
   `team-lips`
3. In **Group URL**, enter exactly:
   `team-lips`
4. Wait for GitLab's availability validation.
5. If `team-lips` is unavailable, invalid, or already taken, **STOP immediately** and report exactly: `team-lips — unavailable`. Do not invent a replacement.
6. Set **Visibility level** to **Private**.
7. Complete any optional business-use questions truthfully.
8. Do not invite additional users in this setup.
9. Select **Create group**.
10. Confirm the browser path is `gitlab.com/team-lips` and the group shows **Private**.

This is the namespace that must contain the Smart Business continuity project.

### Step 6 — Create `lips-learners`

Purpose: LIPS Learners unit repositories.

1. Select **Create new (+) → New group → Create group**.
2. In **Group name**, enter exactly:
   `lips-learners`
3. In **Group URL**, enter exactly:
   `lips-learners`
4. Wait for GitLab's availability validation.
5. If `lips-learners` is unavailable, invalid, or already taken, **STOP immediately** and report exactly: `lips-learners — unavailable`. Do not invent a replacement.
6. Set **Visibility level** to **Private**.
7. Complete optional business-use questions truthfully.
8. Do not invite additional users in this setup.
9. Select **Create group**.
10. Confirm the browser path is `gitlab.com/lips-learners` and the group shows **Private**.

Do not create any project in this group during this package.

### Step 7 — Create `team-lips/smart-business-continuity` as private and blank

This step is critical. The project must exist, but the **Git repository itself must contain zero commits**.

1. Open the `team-lips` group.
2. Select **Create new (+) → New project/repository**.
3. Select **Create blank project**. Do not select a template and do not import a repository.
4. In **Project name**, enter exactly:
   `smart-business-continuity`
5. In the namespace / **Project URL** selector, select the `team-lips` group. Do **not** select your personal username.
6. In **Project slug**, enter exactly:
   `smart-business-continuity`
7. Confirm the resulting path shown by GitLab is exactly:
   `team-lips/smart-business-continuity`
8. If this exact project path is unavailable, **STOP**. Do not invent a variant.
9. Leave **Project deployment target** unset if GitLab shows that optional field.
10. Set **Visibility Level** to **Private**.
11. In project configuration, make sure **Initialize repository with a README is NOT selected**.
12. Make sure **Enable Static Application Security Testing (SAST)** is NOT selected.
13. Make sure **Enable Secret Detection** is NOT selected.
14. Do not select or add:
    - README;
    - license;
    - `.gitignore`;
    - project template;
    - CI/CD template;
    - sample code;
    - wiki page;
    - branch;
    - repository mirroring.
15. Select **Create project**.
16. After the project opens, do not click any prompt to add a README, create a branch, create a file, configure CI/CD, set up a pipeline, import code, or configure a mirror.

Verify that it is genuinely empty:

1. The project page should show GitLab's empty-repository state, documented with wording such as **The repository for this project is empty**.
2. There must be no visible default branch and no commit history.
3. If available in the sidebar, open **Code → Branches**. A blank repository should have no branch until a first commit is created.
4. Do not use GitLab's UI action for creating a branch in an empty repository as a test: GitLab documents that this can create a default branch and commit a blank `README.md`, which would violate this package.
5. Open **Settings → Repository**.
6. Expand **Mirroring repositories**.
7. Confirm there is no configured mirrored repository. Do not select **Add new**.
8. Do not create a `.gitlab-ci.yml` file and do not use **Build → Pipeline editor**. A pipeline configuration file would create repository history and is outside authority.
9. Return to the project overview and confirm the project is still **Private** and the repository is still empty / zero commits.

If you accidentally create any commit, branch, README, license, `.gitignore`, CI file, template content, or mirror configuration, **STOP** and report the exact state to Mission Control. Do not delete/recreate or rewrite history without new authority.

### Step 8 — Verify the final structure

Visually verify the final structure is exactly:

```text
lighthouseips
team-lips
└── smart-business-continuity
lips-learners
```

Confirm each item one by one:

- `lighthouseips` exists as a top-level **Private** group.
- `team-lips` exists as a top-level **Private** group.
- `lips-learners` exists as a top-level **Private** group.
- `smart-business-continuity` exists inside `team-lips`, not inside the personal namespace and not inside another group.
- The exact project path is `team-lips/smart-business-continuity`.
- The project visibility is **Private**.
- The repository is blank and has **zero commits**.
- No default branch has been created.
- No README, license, `.gitignore`, CI/CD template, sample code, or wiki commit exists.
- **Settings → Repository → Mirroring repositories** contains no configured mirror.
- No `.gitlab-ci.yml` exists and no GitLab CI setup was performed.
- GitHub remains the canonical Smart Business repository.
- GitLab remains private, downstream, non-canonical, and continuity-oriented.

Do not seed the project yet. Seeding and continuity synchronization remain a separate governed action.

### What to send back to Mission Control

Send only non-secret facts:

- GitLab username/account handle;
- confirmation: **2FA enabled**;
- confirmation: **recovery codes stored securely under human custody**;
- confirmation: **GitHub is not connected as a Service sign-in / Connected Account**;
- exact top-level group paths:
  - `lighthouseips`
  - `team-lips`
  - `lips-learners`
- exact project path:
  - `team-lips/smart-business-continuity`
- confirmation: **project visibility = Private**;
- confirmation: **repository blank / zero commits**;
- confirmation: **no mirroring configured**;
- confirmation: **GitLab CI not enabled / no `.gitlab-ci.yml` created**.

A compact safe reply can be:

```text
GitLab account: <non-secret username>
2FA: enabled
Recovery codes: stored securely under human custody
GitHub Service sign-in: not connected
Groups:
- lighthouseips
- team-lips
- lips-learners
Project: team-lips/smart-business-continuity
Visibility: Private
Repository: blank / zero commits
Mirroring: not configured
GitLab CI: not enabled
```

Do not include screenshots that expose authentication, recovery, token, QR-code, session, or other secret values.

### What must never be sent to Mission Control / AI

Never send, paste, upload, screenshot, dictate, or commit any of the following:

- password;
- MFA seed / authenticator secret;
- QR code used to enroll MFA;
- OTP / one-time authentication code;
- recovery codes;
- personal access token;
- access token of any kind;
- SSH private key;
- private encryption key;
- recovery phrase;
- browser session cookie;
- password-manager secret;
- mailbox recovery secret;
- any credential or secret.

Mission Control only needs non-secret status and identifiers. It does not need to see proof values for password, MFA, or recovery material.

### Current GitLab limitations / caveats

**Free-plan top-level-group limit.** GitLab's current official documentation states that accounts created after **January 27, 2026** on GitLab.com Free are limited to **three top-level groups**. A personal namespace does not count. This Founder plan requires exactly three top-level groups, so it fits the current Free limit **exactly** and consumes the full top-level-group allowance. Creating a fourth top-level group would require a different plan/decision.

**Free private-group user limit.** GitLab Free limits newly created private top-level namespaces to **five users**. The Founder-only initial structure is within that limit. Do not interpret this guide as authority to add members; later membership growth may require a separate plan or authorization.

**Namespace uniqueness.** GitLab group paths and names must be unique. The exact live availability of `lighthouseips`, `team-lips`, and `lips-learners` cannot be guaranteed from documentation because an existing private namespace may not be publicly discoverable. The authenticated creation form is the authoritative live check. If GitLab does not confirm an exact path as available, stop and report that exact namespace. Do not invent a substitute.

**Naming syntax.** GitLab's current naming rules permit group/project slugs made from letters, digits, underscores, dots, and dashes, with the slug starting and ending in a letter or digit and not ending in `.git` or `.atom`. The requested paths:
- `lighthouseips`
- `team-lips`
- `lips-learners`
- `smart-business-continuity`

are syntactically valid under those rules and are not in GitLab's published reserved-name lists. Syntactic validity does **not** prove live availability.

**Personal namespace collision.** A user's username creates a personal namespace. Therefore the personal account username must not consume one of the three exact top-level group paths.

**Groups and namespaces are the appropriate structure.** GitLab documents Group namespaces as the structure that can contain projects and multiple subgroups. The Founder plan uses three top-level Groups and a project under `team-lips`, which matches that supported model.

**GitLab Organizations are not the structure to use here.** GitLab's current Organizations documentation marks the feature **Beta**, controlled by feature flags, **not ready for production use**, and available in closed beta by invitation to limited participants. Do not use or wait for the Organization beta for this setup. Use normal top-level Groups.

**Private hierarchy rule.** GitLab documents that private groups can contain only private subgroups and projects. Making `team-lips` Private therefore aligns with the required Private continuity project.

**Blank project caveat.** Selecting **Initialize repository with a README** creates the Git repository and default branch. GitLab also documents that certain actions in an empty project, such as creating a branch from the UI, can create a blank README commit. Therefore after creating the project, do not click file/branch/CI setup prompts until the separately governed seed action.

**2FA recovery caveat for Free.** GitLab documents recovery codes as single-use and states that GitLab Support cannot reset 2FA for GitLab.com Free accounts if normal recovery options are lost. Keep recovery codes under reliable human custody.

**No provider conflict found in current documentation.** The exact three-group target is permitted by the documented Free-plan top-level group limit. No GitLab rule found requires redesigning the Founder-approved structure. Live namespace availability remains the only creation-time naming gate.

### Exact authoritative GitLab source list

1. **Sign up · GitLab**  
   https://gitlab.com/users/sign_up  
   Supports: official GitLab.com signup route; current registration offers normal account fields and separate third-party options including GitHub.

2. **Sign in · GitLab**  
   https://gitlab.com/users/sign_in  
   Supports: native GitLab sign-in route independent of the GitHub sign-in button.

3. **User account | GitLab Docs**  
   https://docs.gitlab.com/user/profile/  
   Supports: profile/settings navigation; current **Access → Password and authentication** terminology; **Service sign-in** and **Connected Accounts** terminology; Connect/Disconnect behavior.

4. **User passwords | GitLab Docs**  
   https://docs.gitlab.com/user/profile/user_passwords/  
   Supports: password-based GitLab accounts, password requirements, change/reset navigation.

5. **Two-factor authentication | GitLab Docs**  
   https://docs.gitlab.com/user/profile/account/two_factor_authentication/  
   Supports: OTP authenticator registration steps, Password and authentication UI, recovery-code generation after enrollment, sign-in with 2FA.

6. **Troubleshooting two-factor authentication | GitLab Docs**  
   https://docs.gitlab.com/user/profile/account/two_factor_authentication_troubleshooting/  
   Supports: using/regenerating recovery codes, single-use recovery-code behavior, Free-account Support limitation for 2FA resets.

7. **Groups | GitLab Docs**  
   https://docs.gitlab.com/user/group/  
   Supports: group creation flow, Group name, Group URL namespace path, visibility selection, group hierarchy behavior.

8. **Tutorial: Set up your organization | GitLab Docs**  
   https://docs.gitlab.com/tutorials/manage_user/  
   Supports: current group-creation example, **Group path is available** availability confirmation, private parent-group pattern.

9. **Namespaces | GitLab Docs**  
   https://docs.gitlab.com/user/namespace/  
   Supports: user versus group namespaces, personal namespace behavior, group/subgroup namespace structure.

10. **Reserved project and group names | GitLab Docs**  
    https://docs.gitlab.com/user/reserved_names/  
    Supports: naming/slugs rules and reserved top-level group, subgroup, and project names.

11. **Create a project | GitLab Docs**  
    https://docs.gitlab.com/user/project/  
    Supports: **Create blank project** flow, project slug, visibility, README initialization, SAST and Secret Detection options.

12. **Project and group visibility | GitLab Docs**  
    https://docs.gitlab.com/user/public_access/  
    Supports: Private visibility behavior and the rule that private groups can contain only private subgroups/projects.

13. **Free tier user and group limits | GitLab Docs**  
    https://docs.gitlab.com/user/free_user_limit/  
    Supports: three-top-level-group limit for Free accounts created after January 27, 2026; personal namespace exclusion; five-user limit for private top-level namespaces.

14. **Organizations | GitLab Docs**  
    https://docs.gitlab.com/user/organization/  
    Supports: Organization feature is Beta, feature-flag controlled, not ready for production use, and closed-beta/invitation constrained.

15. **Branches | GitLab Docs**  
    https://docs.gitlab.com/user/project/repository/branches/  
    Supports: blank project has no branch; warns that UI actions in an empty repository can create a default branch and blank README commit.

16. **Repository mirroring | GitLab Docs**  
    https://docs.gitlab.com/user/project/repository/mirror/  
    Supports: mirroring lives under **Settings → Repository → Mirroring repositories** and is a separate configuration that must remain unset in this package.

**GITLAB FOUNDER SETUP GUIDE SUBMITTED — STOP FOR MISSION CONTROL DISPOSITION**
