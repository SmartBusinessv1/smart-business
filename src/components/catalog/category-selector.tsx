// SB-P-1.11-GC-1 — Category preset selector (EIS Part C §19-22). Combines
// existing business-owned categories, Kerala-glossary preset suggestions,
// and Create New Category into one selector without ever silently
// creating, reusing, or reactivating an archived category (§21).
import { useMemo, useState } from "react";
import { Check, ChevronsUpDown, Loader2 } from "lucide-react";
import { CATEGORY_PRESETS } from "@/lib/catalog-presets";
import type { CatalogCategory } from "@/integrations/supabase/catalog";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export const NO_CATEGORY = "__none__";

function normalizeLoose(s: string): string {
  return s.trim().toLowerCase().replace(/\s+/g, " ");
}

export type CreateCategoryResult = { id: string } | { error: string };

export function CategorySelector({
  value,
  onChange,
  categories,
  currentCategoryName,
  onCreateCategory,
}: {
  /** Selected category id, or NO_CATEGORY. */
  value: string;
  onChange: (categoryId: string) => void;
  /** ALL categories (active + archived) — needed for archived-conflict detection. */
  categories: CatalogCategory[];
  /** Display label for the current value when it's not in `categories` (e.g. stale list). */
  currentCategoryName?: string;
  onCreateCategory: (name: string) => Promise<CreateCategoryResult>;
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [conflict, setConflict] = useState<string | null>(null);
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const activeCategories = useMemo(
    () =>
      categories.filter((c) => c.status === "active").sort((a, b) => a.name.localeCompare(b.name)),
    [categories],
  );
  const coreOptions = useMemo(() => CATEGORY_PRESETS.filter((p) => p.tier === "core"), []);
  const secondaryOptions = useMemo(
    () => CATEGORY_PRESETS.filter((p) => p.tier === "secondary"),
    [],
  );

  const selectedActive = activeCategories.find((c) => c.id === value);
  const displayLabel =
    value === NO_CATEGORY || !value
      ? "Uncategorized"
      : (selectedActive?.name ?? currentCategoryName ?? "Choose a category");

  function reset() {
    setSearch("");
    setConflict(null);
    setError(null);
  }

  async function resolveOrSelect(label: string) {
    const norm = normalizeLoose(label);
    const activeMatch = categories.find(
      (c) => c.status === "active" && normalizeLoose(c.name) === norm,
    );
    if (activeMatch) {
      onChange(activeMatch.id);
      reset();
      setOpen(false);
      return;
    }
    const archivedMatch = categories.find(
      (c) => c.status === "archived" && normalizeLoose(c.name) === norm,
    );
    if (archivedMatch) {
      setConflict(archivedMatch.name);
      setError(null);
      return;
    }

    setCreating(true);
    setError(null);
    const result = await onCreateCategory(label.trim());
    setCreating(false);
    if ("id" in result) {
      onChange(result.id);
      reset();
      setOpen(false);
    } else {
      setError(result.error);
    }
  }

  return (
    <Popover
      open={open}
      onOpenChange={(v) => {
        setOpen(v);
        if (!v) reset();
      }}
    >
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between font-normal"
        >
          {displayLabel}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" aria-hidden="true" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[--radix-popover-trigger-width] p-0" align="start">
        <Command shouldFilter={true}>
          <CommandInput
            placeholder="Search or create a category…"
            value={search}
            onValueChange={(v) => {
              setSearch(v);
              setConflict(null);
              setError(null);
            }}
          />
          <CommandList>
            {conflict ? (
              <div className="border-b border-border/60 px-3 py-2 text-sm text-amber-700 dark:text-amber-300">
                You previously archived a category named "{conflict}". Choose a different name, or
                use a custom category name below.
              </div>
            ) : null}
            {error ? (
              <div className="border-b border-border/60 px-3 py-2 text-sm text-destructive">
                {error}
              </div>
            ) : null}
            <CommandEmpty>
              {search.trim() ? (
                <button
                  type="button"
                  disabled={creating}
                  className="flex w-full items-center gap-2 px-2 py-1.5 text-left text-sm text-primary hover:underline disabled:opacity-50"
                  onClick={() => void resolveOrSelect(search.trim())}
                >
                  {creating ? (
                    <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden="true" />
                  ) : null}
                  Create new category "{search.trim()}"
                </button>
              ) : (
                "No matching categories."
              )}
            </CommandEmpty>
            <CommandGroup heading="Uncategorized">
              <CommandItem
                value="Uncategorized"
                onSelect={() => {
                  onChange(NO_CATEGORY);
                  reset();
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "h-4 w-4",
                    value === NO_CATEGORY || !value ? "opacity-100" : "opacity-0",
                  )}
                  aria-hidden="true"
                />
                Uncategorized
              </CommandItem>
            </CommandGroup>
            {activeCategories.length > 0 ? (
              <CommandGroup heading="Your categories">
                {activeCategories.map((c) => (
                  <CommandItem
                    key={c.id}
                    value={c.name}
                    onSelect={() => {
                      onChange(c.id);
                      reset();
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn("h-4 w-4", value === c.id ? "opacity-100" : "opacity-0")}
                      aria-hidden="true"
                    />
                    {c.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            ) : null}
            <CommandGroup heading="Suggested categories">
              {coreOptions.map((preset) => (
                <CommandItem
                  key={preset.id}
                  value={preset.label}
                  keywords={preset.aliases}
                  onSelect={() => void resolveOrSelect(preset.label)}
                >
                  {preset.label}
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandGroup heading="More suggestions">
              {secondaryOptions.map((preset) => (
                <CommandItem
                  key={preset.id}
                  value={preset.label}
                  keywords={preset.aliases}
                  onSelect={() => void resolveOrSelect(preset.label)}
                >
                  {preset.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
