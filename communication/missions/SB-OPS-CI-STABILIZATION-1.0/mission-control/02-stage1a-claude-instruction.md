# SB-OPS-CI-STABILIZATION-1.0 — Stage 1A Claude Code Instruction

Mission Control activates Claude Code Stage 1A on branch `mission/SB-OPS-CI-STABILIZATION-1.0-stage1a` from canonical activation merge `705eaebb8e2fb01e8862666a258d3babff8bd694`.

Execute only the Stage 1A scope already defined in the mission README: behavior-preserving lint stabilization and preparation of the minimum repository-side CI workflow binding for the later separately authorized Stage 1B environment-provisioning step.

Do not change product behavior, dependencies, governance, Product Truth, production provider state, branch protection, deployment state, or Product Mission state. Do not weaken tests or quality gates. Do not handle or record sensitive values. Do not self-approve or self-merge.

Validate lint, typecheck, build, changed-file scope, and applicable Markdown quality checks. Create `communication/missions/SB-OPS-CI-STABILIZATION-1.0/claude-code/01-stage1a-report.md`, update the minimal mission handover/status records required by protocol, push the authorized branch, open or update the PR, and stop for Mission Control.

Stage 1B is not authorized by this instruction. `SB-P-1.12` remains not activated.
