// SB-P-1.11-GC-38R — instruction1.170.md: minimum non-production-only
// authenticated diagnostic entry point for Phase C C5 runtime
// verification. Its sole purpose is to call the existing, unmodified
// parserLeasePreview / parserLeaseConfirmAndDispatch path with one fixed,
// bounded synthetic CSV fixture -- it never accepts caller-supplied file
// content, never bypasses requireSupabaseAuth, never touches the CA or
// workload private key. This route 404s unless
// GC38R_C5_DIAGNOSTIC_ENABLED is explicitly set, which is done only on
// smart-business-parser-nonprod for the duration of this verification
// (never in production).
//
// This does not persist anything: parserLeaseConfirmAndDispatch only
// parses and returns rows -- routing parsed rows into the catalog is a
// separate, not-yet-authorized frontend integration (parser-lease.ts's
// own header comment). No new parser/catalog/pricing/business behavior
// is added here.
//
// Removed under this same authorization once C5 evidence is captured
// (instruction1.170.md §7) -- this file is temporary.
import { useState } from "react";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { useMutation } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { gc38rC5DiagnosticEnabled } from "@/server-functions/gc38r-c5-diagnostic";
import { parserLeasePreview, parserLeaseConfirmAndDispatch } from "@/server-functions/parser-lease";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Route = createFileRoute("/_authenticated/gc38r-c5-diagnostic")({
  head: () => ({
    meta: [
      { title: "GC-38R C5 Diagnostic — Smart Business" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  beforeLoad: async () => {
    const { enabled } = await gc38rC5DiagnosticEnabled();
    if (!enabled) throw notFound();
  },
  component: Gc38rC5DiagnosticPage,
});

// One fixed, bounded synthetic fixture -- never caller-supplied. Only
// recognized columns, one data row, well under every IMPORT_LIMITS bound.
const SYNTHETIC_CSV = "name,selling price\nGC-38R Diagnostic Fixture,1.00\n";

async function sha256Base64(bytes: Uint8Array): Promise<string> {
  const digest = await crypto.subtle.digest("SHA-256", bytes as BufferSource);
  let binary = "";
  for (const byte of new Uint8Array(digest)) binary += String.fromCharCode(byte);
  return btoa(binary);
}

type StepStatus = "pending" | "ok" | "failed" | "skipped";

interface DiagnosticSummary {
  preview: { status: StepStatus; outcome?: string; leaseId?: string };
  upload: { status: StepStatus; httpStatusCategory?: string };
  dispatch: {
    status: StepStatus;
    outcome?: string;
    rows?: number;
    unrecognizedColumnNames?: string[];
  };
}

function httpStatusCategory(status: number): string {
  if (status >= 200 && status < 300) return "2xx";
  if (status >= 300 && status < 400) return "3xx";
  if (status >= 400 && status < 500) return "4xx";
  if (status >= 500) return "5xx";
  return "unknown";
}

async function runDiagnostic(): Promise<DiagnosticSummary> {
  const summary: DiagnosticSummary = {
    preview: { status: "pending" },
    upload: { status: "pending" },
    dispatch: { status: "pending" },
  };

  const bytes = new TextEncoder().encode(SYNTHETIC_CSV);
  const sha256B64 = await sha256Base64(bytes);

  const preview = await parserLeasePreview({
    data: { sha256B64, byteLength: bytes.byteLength, fileKind: "csv" },
  });
  if (preview.outcome !== "issued") {
    summary.preview = { status: "failed", outcome: preview.outcome };
    summary.upload = { status: "skipped" };
    summary.dispatch = { status: "skipped" };
    return summary;
  }
  summary.preview = { status: "ok", outcome: preview.outcome, leaseId: preview.leaseId };

  const formData = new FormData();
  for (const [key, value] of Object.entries(preview.uploadFields)) formData.append(key, value);
  formData.append("file", new Blob([bytes], { type: "text/csv" }));

  let uploadResponse: Response;
  try {
    uploadResponse = await fetch(preview.uploadUrl, { method: "POST", body: formData });
  } catch {
    summary.upload = { status: "failed" };
    summary.dispatch = { status: "skipped" };
    return summary;
  }
  if (!uploadResponse.ok) {
    summary.upload = {
      status: "failed",
      httpStatusCategory: httpStatusCategory(uploadResponse.status),
    };
    summary.dispatch = { status: "skipped" };
    return summary;
  }
  summary.upload = { status: "ok", httpStatusCategory: httpStatusCategory(uploadResponse.status) };

  const dispatch = await parserLeaseConfirmAndDispatch({ data: { leaseId: preview.leaseId } });
  if (dispatch.outcome !== "parsed") {
    summary.dispatch = { status: "failed", outcome: dispatch.outcome };
    return summary;
  }
  summary.dispatch = {
    status: "ok",
    outcome: dispatch.outcome,
    rows: dispatch.rows.length,
    unrecognizedColumnNames: dispatch.unrecognizedColumnNames,
  };
  return summary;
}

function StepBadge({ status }: { status: StepStatus }) {
  const label = { pending: "Pending", ok: "OK", failed: "Failed", skipped: "Skipped" }[status];
  return <span data-status={status}>{label}</span>;
}

function Gc38rC5DiagnosticPage() {
  const [summary, setSummary] = useState<DiagnosticSummary | null>(null);

  const mutation = useMutation({
    mutationFn: runDiagnostic,
    onSuccess: setSummary,
  });

  return (
    <div style={{ maxWidth: 640, margin: "2rem auto", padding: "0 1rem" }}>
      <Card>
        <CardHeader>
          <CardTitle>GC-38R Phase C — C5 Diagnostic</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Non-production only. Calls the existing parser-lease path with one fixed synthetic CSV
            fixture. Removed after C5 evidence is captured.
          </p>
          <Button onClick={() => mutation.mutate()} disabled={mutation.isPending}>
            {mutation.isPending ? <Loader2 className="animate-spin" /> : null}
            Run diagnostic
          </Button>
          {mutation.isError ? <p>Diagnostic run failed: {String(mutation.error)}</p> : null}
          {summary ? (
            <dl>
              <dt>Lease preview (Roles Anywhere CreateSession path)</dt>
              <dd>
                <StepBadge status={summary.preview.status} /> {summary.preview.outcome ?? ""}
              </dd>
              <dt>S3 upload</dt>
              <dd>
                <StepBadge status={summary.upload.status} />{" "}
                {summary.upload.httpStatusCategory ?? ""}
              </dd>
              <dt>Confirm + dispatch (Lambda AWS_IAM invocation)</dt>
              <dd>
                <StepBadge status={summary.dispatch.status} /> {summary.dispatch.outcome ?? ""}
                {summary.dispatch.rows !== undefined ? ` — ${summary.dispatch.rows} row(s)` : ""}
              </dd>
            </dl>
          ) : null}
        </CardContent>
      </Card>
    </div>
  );
}
