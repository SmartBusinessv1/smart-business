// SB-P-1.11-GC-1 — Selling Unit preset selector (EIS Part B §16-17).
// CORE presets shown first, SECONDARY searchable, alias recognition for
// search only, explicit "Custom unit" action, no silent normalization of
// an existing custom value -- typing an alias never mutates the field
// until the merchant explicitly selects a result or confirms custom text.
import { useMemo, useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { SELLING_UNIT_PRESETS } from "@/lib/catalog-presets";
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

export function SellingUnitSelector({
  value,
  onChange,
  disabled,
  disabledReason,
}: {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  disabledReason?: string;
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const coreOptions = useMemo(() => SELLING_UNIT_PRESETS.filter((p) => p.tier === "core"), []);
  const secondaryOptions = useMemo(
    () => SELLING_UNIT_PRESETS.filter((p) => p.tier === "secondary"),
    [],
  );

  function select(label: string) {
    onChange(label);
    setSearch("");
    setOpen(false);
  }

  if (disabled) {
    return (
      <div className="space-y-1">
        <div className="rounded-md border border-border/60 bg-muted/30 px-3 py-2 text-sm text-foreground">
          {value || "—"}
        </div>
        {disabledReason ? <p className="text-xs text-muted-foreground">{disabledReason}</p> : null}
      </div>
    );
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between font-normal"
        >
          {value || "Choose a selling unit"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" aria-hidden="true" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[--radix-popover-trigger-width] p-0" align="start">
        <Command shouldFilter={true}>
          <CommandInput
            placeholder="Search units (e.g. kg, pcs, ltr)…"
            value={search}
            onValueChange={setSearch}
          />
          <CommandList>
            <CommandEmpty>
              {search.trim() ? (
                <button
                  type="button"
                  className="w-full px-2 py-1.5 text-left text-sm text-primary hover:underline"
                  onClick={() => select(search.trim())}
                >
                  Use "{search.trim()}" as a custom unit
                </button>
              ) : (
                "No matching units."
              )}
            </CommandEmpty>
            <CommandGroup heading="Common units">
              {coreOptions.map((preset) => (
                <CommandItem
                  key={preset.id}
                  value={preset.label}
                  keywords={preset.aliases}
                  onSelect={() => select(preset.label)}
                >
                  <Check
                    className={cn("h-4 w-4", value === preset.label ? "opacity-100" : "opacity-0")}
                    aria-hidden="true"
                  />
                  {preset.label}
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandGroup heading="More units">
              {secondaryOptions.map((preset) => (
                <CommandItem
                  key={preset.id}
                  value={preset.label}
                  keywords={preset.aliases}
                  onSelect={() => select(preset.label)}
                >
                  <Check
                    className={cn("h-4 w-4", value === preset.label ? "opacity-100" : "opacity-0")}
                    aria-hidden="true"
                  />
                  {preset.label}
                </CommandItem>
              ))}
            </CommandGroup>
            {value && !SELLING_UNIT_PRESETS.some((p) => p.label === value) ? (
              <CommandGroup heading="Current custom value">
                <CommandItem value={value} onSelect={() => select(value)}>
                  <Check className="h-4 w-4 opacity-100" aria-hidden="true" />
                  {value}
                </CommandItem>
              </CommandGroup>
            ) : null}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
