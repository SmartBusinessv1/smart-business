// SB-ORG-LEARNING-1.1 Stage 1 F-04 correction -- genuine process-level
// CLI regressions.
//
// Codex independent re-verification found that every prior harvest/
// validate test imported and called `runHarvest`/`runValidate` directly
// -- none of them ever launched the actual `node harvest.mjs` /
// `node validate.mjs` CLI process. That gap hid a real defect: both
// scripts' `isMainModule()` compared `import.meta.url` to a naive
// `file://${process.argv[1]}` string, which is never equal to the
// canonical file URL form on Windows, so the guarded CLI block silently
// never ran there -- Node exited 0 for even badly malformed input,
// while the imported function itself (correctly) returned exit code 1.
//
// Every test below spawns a real, separate Node process
// (`node:child_process`'s `spawnSync`, matching Codex's own
// reproduction method) against the actual script files on disk. No
// shell is used, no real closed mission is processed, and every
// temporary file/repository is isolated and cleaned up per test.
import { describe, it, expect, afterEach } from "vitest";
import { spawnSync } from "node:child_process";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { fileURLToPath } from "node:url";
import { join } from "node:path";
import { createEphemeralGitRepo, type EphemeralGitRepo } from "./helpers/ephemeral-git-repo.ts";

const HARVEST_SCRIPT_URL = new URL("../scripts/harvest.mjs", import.meta.url);
const VALIDATE_SCRIPT_URL = new URL("../scripts/validate.mjs", import.meta.url);
const HARVEST_SCRIPT = fileURLToPath(HARVEST_SCRIPT_URL);
const VALIDATE_SCRIPT = fileURLToPath(VALIDATE_SCRIPT_URL);

let workDir: string | null = null;
let repo: EphemeralGitRepo | null = null;

afterEach(() => {
  if (workDir) rmSync(workDir, { recursive: true, force: true });
  repo?.cleanup();
  workDir = null;
  repo = null;
});

function runNode(scriptPath: string, args: string[], cwd: string) {
  const result = spawnSync(process.execPath, [scriptPath, ...args], {
    cwd,
    encoding: "utf8",
  });
  if (result.error) {
    throw new Error(`failed to spawn node process: ${result.error.message}`);
  }
  return { status: result.status, stdout: result.stdout, stderr: result.stderr };
}

describe("F-04: real CLI process execution -- harvest.mjs", () => {
  it("returns nonzero and emits the safe F-03 diagnostic for malformed JSON, on the real Node process", () => {
    workDir = mkdtempSync(join(tmpdir(), "ole-cli-process-test-"));
    const canary = "AKIA0000000000000000";
    const envelopePath = join(workDir, "malformed.json");
    // Deliberately malformed (unterminated), containing only a
    // synthetic, obviously-fake canary -- never a real secret.
    writeFileSync(envelopePath, `{"mission_id": "${canary}"`, "utf8");

    const { status, stdout, stderr } = runNode(
      HARVEST_SCRIPT,
      [
        "--envelope",
        envelopePath,
        "--repo-root",
        workDir,
        "--receipts-dir",
        join(workDir, "receipts"),
      ],
      workDir,
    );

    expect(status).not.toBe(0);
    expect(status).not.toBeNull();
    expect(stderr).toContain("not valid JSON");
    expect(stdout).not.toContain(canary);
    expect(stderr).not.toContain(canary);
  });

  it("returns nonzero rather than silent success when required CLI input is missing", () => {
    workDir = mkdtempSync(join(tmpdir(), "ole-cli-process-test-"));
    const { status, stderr } = runNode(HARVEST_SCRIPT, [], workDir);

    expect(status).not.toBe(0);
    expect(stderr).toContain("--envelope");
  });

  it("actually executes the command path and returns truthful success for valid synthetic input", () => {
    workDir = mkdtempSync(join(tmpdir(), "ole-cli-process-test-"));
    repo = createEphemeralGitRepo();
    const commit = repo.commitFile(
      "communication/missions/SB-TEST-FIXTURE-1.0/README.md",
      "clean synthetic evidence\n",
    );
    const envelope = {
      schemaVersion: 1,
      mission_id: "SB-TEST-FIXTURE-1.0",
      mission_class: "operational",
      closure_revision: "REV-CLI-PROCESS-1",
      final_disposition: "ACCEPTED",
      accepted_scope: "test fixture",
      acceptance_refs: [],
      closure_refs: ["communication/missions/SB-TEST-FIXTURE-1.0/README.md"],
      retained_followups: [],
      source_snapshot_ref: commit,
      reopens: null,
      supersedes_closure: null,
    };
    const envelopePath = join(workDir, "envelope.json");
    writeFileSync(envelopePath, JSON.stringify(envelope), "utf8");

    const { status, stdout } = runNode(
      HARVEST_SCRIPT,
      [
        "--envelope",
        envelopePath,
        "--repo-root",
        repo.root,
        "--receipts-dir",
        join(workDir, "receipts"),
      ],
      workDir,
    );

    // This is the exact assertion F-04 proves was previously false on
    // Windows: the real, separate Node process -- not an imported
    // function call -- reports genuine success for genuinely valid input.
    expect(status).toBe(0);
    expect(stdout).toContain("SCREENED");
  });
});

describe("F-04: real CLI process execution -- validate.mjs", () => {
  it("returns nonzero and emits the safe F-03 diagnostic for malformed JSON, on the real Node process", () => {
    workDir = mkdtempSync(join(tmpdir(), "ole-cli-process-test-"));
    const canary = "AKIA0000000000000000";
    const filePath = join(workDir, "malformed.json");
    writeFileSync(filePath, `{"leaked": "${canary}"`, "utf8");

    const { status, stdout, stderr } = runNode(VALIDATE_SCRIPT, ["receipt", filePath], workDir);

    expect(status).not.toBe(0);
    expect(status).not.toBeNull();
    expect(stderr).toContain("not valid JSON");
    expect(stdout).not.toContain(canary);
    expect(stderr).not.toContain(canary);
  });

  it("returns nonzero rather than silent success when required CLI input is missing", () => {
    workDir = mkdtempSync(join(tmpdir(), "ole-cli-process-test-"));
    const { status, stderr } = runNode(VALIDATE_SCRIPT, [], workDir);

    expect(status).not.toBe(0);
    expect(stderr).toContain("must be one of");
  });

  it("actually executes the command path and returns truthful PASS for valid synthetic input", () => {
    workDir = mkdtempSync(join(tmpdir(), "ole-cli-process-test-"));
    const filePath = join(workDir, "valid-envelope.json");
    writeFileSync(
      filePath,
      JSON.stringify({
        schemaVersion: 1,
        mission_id: "SB-TEST-FIXTURE-1.0",
        mission_class: "operational",
        closure_revision: "REV-1",
        final_disposition: "ACCEPTED",
        accepted_scope: "test",
        acceptance_refs: [],
        closure_refs: ["communication/missions/SB-TEST-FIXTURE-1.0/README.md"],
        retained_followups: [],
        source_snapshot_ref: "0".repeat(40),
        reopens: null,
        supersedes_closure: null,
      }),
      "utf8",
    );

    const { status, stdout } = runNode(VALIDATE_SCRIPT, ["closure-envelope", filePath], workDir);

    expect(status).toBe(0);
    expect(stdout).toContain("PASS");
  });
});

describe("F-04: importing either module never auto-runs the CLI path", () => {
  it("importing harvest.mjs from another entry point produces no output and no nonzero exit", () => {
    workDir = mkdtempSync(join(tmpdir(), "ole-cli-process-test-"));
    const importerPath = join(workDir, "import-harvest.mjs");
    // A side-effect-only import, run as ITS OWN main module. If
    // harvest.mjs's guarded CLI block ran merely because it was
    // imported, this process would print harvest's usage/error output
    // and exit nonzero even though this importer never calls
    // runHarvest itself.
    // Import by file:// URL (JSON.stringify'd into a valid JS string
    // literal), not a raw native path -- a bare Windows path
    // ("C:\foo\bar.mjs") is not a valid ESM import specifier at all, so
    // using one here would test nothing.
    writeFileSync(
      importerPath,
      `import ${JSON.stringify(HARVEST_SCRIPT_URL.href)};\nprocess.stdout.write("importer-completed\\n");\n`,
      "utf8",
    );

    const { status, stdout, stderr } = runNode(importerPath, [], workDir);

    expect(status).toBe(0);
    expect(stdout.trim()).toBe("importer-completed");
    expect(stderr).toBe("");
  });

  it("importing validate.mjs from another entry point produces no output and no nonzero exit", () => {
    workDir = mkdtempSync(join(tmpdir(), "ole-cli-process-test-"));
    const importerPath = join(workDir, "import-validate.mjs");
    writeFileSync(
      importerPath,
      `import ${JSON.stringify(VALIDATE_SCRIPT_URL.href)};\nprocess.stdout.write("importer-completed\\n");\n`,
      "utf8",
    );

    const { status, stdout, stderr } = runNode(importerPath, [], workDir);

    expect(status).toBe(0);
    expect(stdout.trim()).toBe("importer-completed");
    expect(stderr).toBe("");
  });
});
