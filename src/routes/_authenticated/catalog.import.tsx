// SB-P-1.11-GC-1 — Bulk CSV/XLSX Catalog import wizard (EIS Part A).
// Secondary Catalog management action, not the primary "New product" flow.
// The UI never claims a row saved until the merchant explicitly confirms,
// and every outcome (created/failed/skipped/matched/needs-correction) is
// reported distinctly -- never collapsed into one generic message (§8, §30).
import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AlertTriangle, CheckCircle2, Loader2, Upload } from "lucide-react";
import {
  catalogImportCommit,
  catalogImportGetBatch,
  catalogImportPreview,
  type CatalogImportBatchStatus,
  type CatalogImportCommitResult,
  type CatalogImportPreviewResult,
} from "@/server-functions/catalog-import";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

export const Route = createFileRoute("/_authenticated/catalog/import")({
  head: () => ({
    meta: [
      { title: "Import products — Smart Business" },
      {
        name: "description",
        content: "Bring in your existing product spreadsheet as a CSV or Excel file.",
      },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: CatalogImportPage,
});

const CORRECTION_REASON_LABEL: Record<string, string> = {
  MISSING_NAME: "Product name is missing.",
  DUPLICATE_NAME:
    "This product name is already used (in this business, or elsewhere in this file).",
  DUPLICATE_SKU: "This SKU is already used (in this business, or elsewhere in this file).",
  DUPLICATE_BARCODE: "This barcode is already used (in this business, or elsewhere in this file).",
  INVALID_UNIT: "The selling unit value doesn't look valid.",
  INVALID_CATEGORY:
    "This category name conflicts with one you previously archived. Choose a different name, or use a custom category name.",
  INVALID_PRICE: "The price or reference cost isn't a valid, positive number.",
  INVALID_TAX: "The tax treatment or tax rate isn't valid.",
};

type Phase = "upload" | "reviewing" | "done";

function CatalogImportPage() {
  const queryClient = useQueryClient();
  const [phase, setPhase] = useState<Phase>("upload");
  const [file, setFile] = useState<File | null>(null);
  const [previewResult, setPreviewResult] = useState<CatalogImportPreviewResult | null>(null);
  const [skipRows, setSkipRows] = useState<Set<number>>(new Set());
  const [commitResult, setCommitResult] = useState<CatalogImportCommitResult | null>(null);

  const batchId = previewResult?.outcome === "previewed" ? previewResult.batchId : null;

  const batchQuery = useQuery({
    queryKey: ["catalog-import", "batch", batchId],
    enabled: !!batchId,
    queryFn: () => catalogImportGetBatch({ data: { batchId: batchId as string } }),
  });

  const previewMutation = useMutation({
    mutationFn: async () => {
      if (!file) throw new Error("Choose a file first.");
      const formData = new FormData();
      formData.append("file", file);
      return catalogImportPreview({ data: formData });
    },
    onSuccess: (result) => {
      setPreviewResult(result);
      if (result.outcome === "previewed") setPhase("reviewing");
    },
  });

  const commitMutation = useMutation({
    mutationFn: async () => {
      if (!batchId) throw new Error("No batch to confirm.");
      return catalogImportCommit({ data: { batchId, skipRowNumbers: [...skipRows] } });
    },
    onSuccess: (result) => {
      setCommitResult(result);
      if (result.outcome === "committed" || result.outcome === "failed") {
        setPhase("done");
        void queryClient.invalidateQueries({ queryKey: ["catalog"] });
      }
    },
  });

  function reset() {
    setPhase("upload");
    setFile(null);
    setPreviewResult(null);
    setSkipRows(new Set());
    setCommitResult(null);
  }

  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 sm:py-16">
      <header>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
          Business operations
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Import products
        </h1>
        <p className="mt-3 max-w-2xl text-base text-muted-foreground">
          Bring products in from a CSV or Excel file. Existing products are never automatically
          overwritten, invalid rows are never created, and nothing is saved until you confirm.
          Inventory stock is not imported through this file.
        </p>
        <Link
          to="/catalog"
          className="mt-3 inline-block text-sm font-medium text-primary hover:underline"
        >
          Back to Catalog
        </Link>
      </header>

      {phase === "upload" ? (
        <Card className="mt-8 rounded-2xl border-border/60">
          <CardHeader>
            <CardTitle className="text-base">1. Upload your file</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              <li>Accepted formats: .csv and .xlsx (max 5 MB, up to 2,000 rows).</li>
              <li>
                Recognized columns: Product Name (required), Selling Unit, Category, SKU, Barcode,
                Description, Selling Price, Tax Treatment, Product Tax Rate, Reference Cost.
              </li>
              <li>Uploaded unit or category values may need explicit selection or correction.</li>
              <li>You remain responsible for reviewing the result before it's final.</li>
            </ul>
            <input
              type="file"
              accept=".csv,.xlsx"
              onChange={(e) => setFile(e.target.files?.[0] ?? null)}
              className="block w-full rounded-md border border-border/60 bg-background p-2 text-sm file:mr-3 file:rounded-md file:border-0 file:bg-primary file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-primary-foreground"
            />
            {previewResult?.outcome === "rejected" ? (
              <p
                role="alert"
                className="rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive"
              >
                {previewResult.message}
              </p>
            ) : null}
            {previewMutation.isError ? (
              <p
                role="alert"
                className="rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive"
              >
                We couldn't process this file. Please try again.
              </p>
            ) : null}
            <Button
              type="button"
              onClick={() => previewMutation.mutate()}
              disabled={!file || previewMutation.isPending}
            >
              {previewMutation.isPending ? (
                <Loader2 className="mr-1.5 h-4 w-4 animate-spin" aria-hidden="true" />
              ) : (
                <Upload className="mr-1.5 h-4 w-4" aria-hidden="true" />
              )}
              Upload and preview
            </Button>
          </CardContent>
        </Card>
      ) : null}

      {phase === "reviewing" && previewResult?.outcome === "previewed" ? (
        <ReviewStep
          preview={previewResult}
          rows={batchQuery.data?.rows ?? []}
          loadingRows={batchQuery.isPending}
          skipRows={skipRows}
          onToggleSkip={(rowNumber) =>
            setSkipRows((prev) => {
              const next = new Set(prev);
              if (next.has(rowNumber)) next.delete(rowNumber);
              else next.add(rowNumber);
              return next;
            })
          }
          onConfirm={() => commitMutation.mutate()}
          confirming={commitMutation.isPending}
          confirmError={commitMutation.isError}
        />
      ) : null}

      {phase === "done" && commitResult ? (
        <OutcomeStep result={commitResult} onStartOver={reset} />
      ) : null}
    </section>
  );
}

function ReviewStep({
  preview,
  rows,
  loadingRows,
  skipRows,
  onToggleSkip,
  onConfirm,
  confirming,
  confirmError,
}: {
  preview: Extract<CatalogImportPreviewResult, { outcome: "previewed" }>;
  rows: CatalogImportBatchStatus["rows"];
  loadingRows: boolean;
  skipRows: Set<number>;
  onToggleSkip: (rowNumber: number) => void;
  onConfirm: () => void;
  confirming: boolean;
  confirmError: boolean;
}) {
  const needsAttention = rows.filter(
    (r) => r.status === "POSSIBLE_MATCH" || r.status === "NEEDS_CORRECTION",
  );
  const readyRows = rows.filter((r) => r.status === "READY");

  return (
    <div className="mt-8 space-y-6">
      <Card className="rounded-2xl border-border/60">
        <CardHeader>
          <CardTitle className="text-base">
            2. Preview summary — nothing has been imported yet
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <SummaryStat label="Total rows" value={preview.totalRows} />
            <SummaryStat label="Ready to create" value={preview.ready} tone="positive" />
            <SummaryStat label="Possible matches" value={preview.possibleMatch} tone="warning" />
            <SummaryStat label="Needs correction" value={preview.needsCorrection} tone="warning" />
          </div>
          {preview.unrecognizedColumnNames.length > 0 ? (
            <p className="text-sm text-muted-foreground">
              {preview.unrecognizedColumnNames.length} unrecognized column(s) ignored:{" "}
              {preview.unrecognizedColumnNames.join(", ")}.
            </p>
          ) : null}
          {preview.additionalWorksheetsIgnored ? (
            <p className="text-sm text-muted-foreground">
              This workbook has more than one sheet. Only the first sheet was read.
            </p>
          ) : null}
        </CardContent>
      </Card>

      {loadingRows ? (
        <p className="text-sm text-muted-foreground">Loading row details…</p>
      ) : (
        <>
          {needsAttention.length > 0 ? (
            <Card className="rounded-2xl border-border/60">
              <CardHeader>
                <CardTitle className="text-base">3. Review problems</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  These rows won't be created unless you fix and re-upload the file. Check "skip" to
                  acknowledge and move on without creating them.
                </p>
                <ul className="space-y-2">
                  {needsAttention.map((r) => (
                    <li
                      key={r.rowNumber}
                      className="flex items-start gap-3 rounded-xl border border-border/60 bg-card p-3"
                    >
                      <Checkbox
                        checked={skipRows.has(r.rowNumber)}
                        onCheckedChange={() => onToggleSkip(r.rowNumber)}
                        className="mt-1"
                        aria-label={`Skip row ${r.rowNumber}`}
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-sm font-medium text-card-foreground">
                            Row {r.rowNumber} — {r.snapshot.name || "(no name)"}
                          </span>
                          <Badge variant="outline">
                            {r.status === "POSSIBLE_MATCH" ? "Possible match" : "Needs correction"}
                          </Badge>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {r.status === "POSSIBLE_MATCH"
                            ? `This may already exist as "${r.matchedProductName ?? "an existing product"}".`
                            : (CORRECTION_REASON_LABEL[r.correctionReason ?? ""] ??
                              "This row needs correction.")}
                        </p>
                        {r.status === "POSSIBLE_MATCH" && r.matchedProductId ? (
                          <Link
                            to="/catalog/$productId"
                            params={{ productId: r.matchedProductId }}
                            className="mt-1 inline-block text-sm font-medium text-primary hover:underline"
                          >
                            Review existing product
                          </Link>
                        ) : null}
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ) : null}

          <Card className="rounded-2xl border-border/60">
            <CardHeader>
              <CardTitle className="text-base">4. Confirm import</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                {readyRows.length} row(s) will be created as new products. Rows marked "skip" above
                will not be created.
              </p>
              {confirmError ? (
                <p
                  role="alert"
                  className="rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive"
                >
                  We couldn't complete the import. Please try again.
                </p>
              ) : null}
              <Button type="button" onClick={onConfirm} disabled={confirming}>
                {confirming ? (
                  <Loader2 className="mr-1.5 h-4 w-4 animate-spin" aria-hidden="true" />
                ) : null}
                Confirm import
              </Button>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}

function SummaryStat({
  label,
  value,
  tone,
}: {
  label: string;
  value: number;
  tone?: "positive" | "warning";
}) {
  return (
    <div className="rounded-xl border border-border/60 bg-muted/30 p-3">
      <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </p>
      <p
        className={
          tone === "positive"
            ? "mt-1 text-xl font-semibold text-primary"
            : tone === "warning" && value > 0
              ? "mt-1 text-xl font-semibold text-amber-600 dark:text-amber-400"
              : "mt-1 text-xl font-semibold text-foreground"
        }
      >
        {value}
      </p>
    </div>
  );
}

function OutcomeStep({
  result,
  onStartOver,
}: {
  result: CatalogImportCommitResult;
  onStartOver: () => void;
}) {
  if (result.outcome === "not_found") {
    return (
      <Card className="mt-8 rounded-2xl border-border/60">
        <CardContent className="pt-6">
          <p className="text-sm text-foreground">
            We couldn't find that import batch. It may have been removed.
          </p>
          <Button type="button" variant="outline" onClick={onStartOver} className="mt-4">
            Start a new import
          </Button>
        </CardContent>
      </Card>
    );
  }
  if (result.outcome === "in_progress" || result.outcome === "already_committed") {
    return (
      <Card className="mt-8 rounded-2xl border-border/60">
        <CardContent className="pt-6">
          <p className="text-sm text-foreground">
            {result.outcome === "in_progress"
              ? "This import is already being processed."
              : "This import was already completed."}
          </p>
          <Button type="button" variant="outline" onClick={onStartOver} className="mt-4">
            Start a new import
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mt-8 rounded-2xl border-border/60">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          {result.outcome === "committed" ? (
            <CheckCircle2 className="h-5 w-5 text-primary" aria-hidden="true" />
          ) : (
            <AlertTriangle
              className="h-5 w-5 text-amber-600 dark:text-amber-400"
              aria-hidden="true"
            />
          )}
          {result.outcome === "committed"
            ? "Import complete"
            : "Import completed with some failures"}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          <SummaryStat label="Created" value={result.created} tone="positive" />
          <SummaryStat label="Failed" value={result.failed} tone="warning" />
          <SummaryStat label="Skipped" value={result.skipped} />
          <SummaryStat
            label="Possible matches (unresolved)"
            value={result.possibleMatch}
            tone="warning"
          />
          <SummaryStat
            label="Needs correction (unresolved)"
            value={result.needsCorrection}
            tone="warning"
          />
        </div>
        {result.warnings.length > 0 ? (
          <div className="rounded-md border border-amber-500/40 bg-amber-500/10 px-3 py-2 text-sm text-amber-800 dark:text-amber-200">
            <p className="font-medium">Some created products need a follow-up check:</p>
            <ul className="mt-1 list-disc pl-5">
              {result.warnings.map((w, i) => (
                <li key={i}>
                  Row {w.rowNumber}: {w.message}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        <div className="flex gap-3">
          <Button type="button" onClick={onStartOver}>
            Start a new import
          </Button>
          <Link
            to="/catalog"
            className="inline-flex items-center justify-center rounded-md border border-border/60 px-4 py-2 text-sm font-medium hover:bg-muted/40"
          >
            Go to Catalog
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
