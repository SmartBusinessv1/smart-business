# SMART BUSINESS MISSION CONTROL

## SB-P-1.11 — GC-38R Phase B CI Correction Authorization

**Mission:** SB-P-1.11  
**Workstream:** GC-38R — Lambda Parser Non-Production Deployment  
**Reporting Room:** Claude Engineering  
**Authorization Type:** Narrow CI Workflow Correction Only  
**Status:** ACTIVE  
**Authorized By:** Mission Control

---

# 1. Trigger

The first GC-38R Phase B non-production deployment run failed during:

`Create IAM Roles Anywhere trust anchor`

Observed AWS CLI error:

```text
Parameter validation failed:

Missing required parameter in tags[0]: "key"
Missing required parameter in tags[0]: "value"

Unknown parameter in tags[0]: "Key", must be one of: key, value
Unknown parameter in tags[0]: "Value", must be one of: key, value
```

Mission Control verified that the failure is caused by incorrect tag key casing in the IAM Roles Anywhere AWS CLI commands.

The current workflow uses:

```text
Key=...
Value=...
```

where the Roles Anywhere CLI expects:

```text
key=...
value=...
```

---

# 2. Authorized File

Only:

```text
.github/workflows/aws-gc38r-parser-deploy.yml
```

may be modified.

---

# 3. Authorized Correction

Correct the `--tags` syntax only for these two AWS Roles Anywhere commands:

1. `aws rolesanywhere create-trust-anchor`
2. `aws rolesanywhere create-profile`

Change the tag structure from uppercase:

```text
Key=Project,Value=SmartBusiness
```

to lowercase:

```text
key=Project,value=SmartBusiness
```

Apply the same lowercase `key` / `value` form to all existing tags in those two commands.

Preserve all existing tag names and values exactly.

---

# 4. Explicit Non-Authorization

This correction does **not** authorize any change to:

- AWS IAM permissions;
- deploy-role permissions;
- RuntimeBoundary;
- GitHub OIDC trust;
- GitHub Environment protection;
- account ID;
- AWS region;
- Lambda permissions;
- S3 permissions or configuration;
- IAM Roles Anywhere trust model;
- Trust Anchor count or naming;
- Roles Anywhere Profile scope;
- workload-role permissions;
- CA custody;
- CA certificate handling;
- CA private-key handling;
- CSR generation behavior;
- artifact handling;
- Supabase;
- Lovable;
- production;
- migrations;
- application code;
- parser behavior;
- Phase C runtime verification;
- Stage 21 or later lifecycle stages.

No workaround, permission broadening, manual AWS mutation, or unrelated cleanup is authorized.

---

# 5. CA Custody Must Remain Unchanged

The Trust Anchor CA private key must remain entirely outside GitHub, GitHub Actions, AWS deployment workflows, repository storage, project storage, CI, and chat.

The workflow may continue to receive only the Founder-supplied **public CA certificate** through:

```text
trust_anchor_ca_certificate_pem
```

No CA private-key generation, transmission, storage, recovery, import, or signing operation may be introduced.

---

# 6. Existing Partial Phase B State

Do not delete or recreate resources merely because Phase B Run #1 failed.

The workflow was intentionally designed to be idempotent.

Preserve already-created authorized non-production resources and allow the corrected workflow to detect and reuse them.

If the correction requires deleting, replacing, manually editing, or broadening any AWS resource, **STOP and report to Mission Control**.

---

# 7. Required Engineering Verification

Before submitting the correction:

1. Verify the diff is limited to the required Roles Anywhere tag casing correction.
2. Verify both affected commands use lowercase `key` and `value`.
3. Verify no other workflow behavior changed.
4. Verify the YAML remains valid.
5. Verify no authority or permission scope changed.
6. Verify CA custody protections remain unchanged.
7. Verify the workflow remains `workflow_dispatch` only.
8. Verify the protected `aws-nonprod-parser` environment remains unchanged.
9. Verify the workflow remains restricted to canonical `main`.

---

# 8. Git / PR Rules

Create a dedicated correction branch.

Suggested branch:

```text
fix/SB-P-1.11-GC-38R-roles-anywhere-tags
```

Commit only the authorized workflow correction.

Suggested commit message:

```text
fix: correct GC38R Roles Anywhere tag casing
```

Open a pull request to:

```text
main
```

Do not self-merge.

Founder human review and merge are required.

---

# 9. Deployment Prohibition

Claude Engineering is **not authorized to rerun Phase B**.

Claude Engineering is **not authorized to deploy AWS resources** under this correction authorization.

After the correction PR is human-reviewed and merged, Mission Control will separately authorize the next Phase B workflow run.

---

# 10. Required Completion Report

Return a concise completion report containing:

- branch name;
- commit SHA;
- pull request number;
- exact file changed;
- exact commands corrected;
- confirmation that only `Key`/`Value` → `key`/`value` was changed in the two Roles Anywhere commands;
- confirmation that no permissions or AWS authority changed;
- confirmation that CA custody remains unchanged;
- confirmation that no deployment or workflow rerun occurred;
- verification result;
- any blocker or unexpected finding.

---

# 11. Stop Conditions

STOP immediately and report to Mission Control if:

- any additional file must change;
- AWS permissions appear insufficient;
- any RuntimeBoundary modification appears necessary;
- IAM/OIDC trust modification appears necessary;
- any AWS resource must be deleted or manually repaired;
- the Trust Anchor already exists in an unexpected state;
- the public CA certificate appears invalid;
- CA private-key access is requested;
- the correction requires anything beyond the exact tag-casing defect described above.

---

# Mission Control Authorization

**AUTHORIZED:** narrow CI syntax correction only.

**NOT AUTHORIZED:** deployment, rerun, AWS authority change, runtime verification, production activity, or scope expansion.
