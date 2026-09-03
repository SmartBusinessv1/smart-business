// SB-P-1.11-GC-1 — Selling Unit and Category preset vocabulary.
//
// Locked in docs/phase-1-mission-blueprint/completed/SB-P-1.11-Build-Now-Gap-Closure-EIS.md
// Part K §45.13 (SEC-14): presets are UI suggestions compiled into the
// application bundle, never a database table, never a global mandatory
// taxonomy, and never merchant-mutable data. Selecting a preset only ever
// creates or selects an ordinary, already-governed, business-owned
// catalog_categories row through create_catalog_category (EIS §21) — this
// file has no write path of its own.
//
// Stable IDs, display labels, aliases, and priority tiers are taken
// verbatim from docs/research/kerala-market-catalog-glossary.md (the
// canonical vocabulary source, report1.74.md verdict: "PASS WITH RESEARCH
// CAUTIONS — GLOSSARY READY FOR IMPLEMENTATION SPECIFICATION"), sections 4
// and 7. Malayalam terms are included as search aids only (glossary §10),
// never as a UI label replacement for the English display label.

export type PresetTier = "core" | "secondary";

export interface SellingUnitPreset {
  id: string;
  label: string;
  tier: PresetTier;
  /** Lowercase search aliases, including glossary Malayalam terms. */
  aliases: string[];
}

export interface CategoryPreset {
  id: string;
  label: string;
  tier: PresetTier;
  aliases: string[];
}

// ---------------------------------------------------------------------------
// Selling Units — glossary §4.1 (CORE) / §4.2 (SECONDARY) / §5 (aliases).
// ---------------------------------------------------------------------------

export const SELLING_UNIT_PRESETS: readonly SellingUnitPreset[] = [
  // CORE
  {
    id: "piece",
    label: "Piece",
    tier: "core",
    aliases: ["pc", "pcs", "piece", "pieces", "each", "no", "nos", "എണ്ണം", "പീസ്"],
  },
  { id: "packet", label: "Packet", tier: "core", aliases: ["pkt", "packet", "pack", "പാക്കറ്റ്"] },
  { id: "bottle", label: "Bottle", tier: "core", aliases: ["btl", "bottle", "കുപ്പി", "ബോട്ടിൽ"] },
  { id: "box", label: "Box", tier: "core", aliases: ["box", "bx", "പെട്ടി", "ബോക്സ്"] },
  {
    id: "kilogram",
    label: "Kilogram",
    tier: "core",
    aliases: ["kg", "kilo", "kilogram", "കിലോഗ്രാം", "കിലോ"],
  },
  { id: "gram", label: "Gram", tier: "core", aliases: ["g", "gm", "gram", "grams", "ഗ്രാം"] },
  { id: "litre", label: "Litre", tier: "core", aliases: ["l", "ltr", "litre", "liter", "ലിറ്റർ"] },
  {
    id: "millilitre",
    label: "Millilitre",
    tier: "core",
    aliases: ["ml", "millilitre", "milliliter", "മില്ലിലിറ്റർ"],
  },
  { id: "plate", label: "Plate", tier: "core", aliases: ["plate", "per plate", "പ്ലേറ്റ്"] },
  { id: "cup", label: "Cup", tier: "core", aliases: ["cup", "per cup", "കപ്പ്"] },
  // SECONDARY
  {
    id: "pouch",
    label: "Pouch",
    tier: "secondary",
    aliases: ["pouch", "sachet", "പൗച്ച്", "സാഷെ"],
  },
  { id: "tin", label: "Tin", tier: "secondary", aliases: ["tin", "can", "ടിൻ", "കാൻ"] },
  { id: "tray", label: "Tray", tier: "secondary", aliases: ["tray", "ട്രേ"] },
  { id: "bowl", label: "Bowl", tier: "secondary", aliases: ["bowl", "per bowl", "ബൗൾ"] },
  { id: "pair", label: "Pair", tier: "secondary", aliases: ["pair", "pr", "ജോഡി", "പേയർ"] },
  { id: "set", label: "Set", tier: "secondary", aliases: ["set", "സെറ്റ്"] },
  { id: "roll", label: "Roll", tier: "secondary", aliases: ["roll", "റോൾ"] },
  { id: "metre", label: "Metre", tier: "secondary", aliases: ["m", "meter", "metre", "മീറ്റർ"] },
  { id: "carton", label: "Carton", tier: "secondary", aliases: ["carton", "ctn", "കാർട്ടൺ"] },
  {
    id: "bundle",
    label: "Bundle",
    tier: "secondary",
    aliases: ["bundle", "bunch", "കെട്ട്", "ബണ്ടിൽ"],
  },
];

// ---------------------------------------------------------------------------
// Categories — glossary §7.1 (CORE) / §7.2 (SECONDARY).
// ---------------------------------------------------------------------------

export const CATEGORY_PRESETS: readonly CategoryPreset[] = [
  // CORE
  {
    id: "grocery_staples",
    label: "Grocery & Staples",
    tier: "core",
    aliases: ["staples", "provisions", "പലചരക്ക്"],
  },
  {
    id: "snacks_packaged_foods",
    label: "Snacks & Packaged Foods",
    tier: "core",
    aliases: ["snacks", "packaged foods", "branded foods"],
  },
  {
    id: "beverages",
    label: "Beverages",
    tier: "core",
    aliases: ["drinks", "cool drinks", "പാനീയങ്ങൾ"],
  },
  {
    id: "dairy_chilled",
    label: "Dairy & Chilled",
    tier: "core",
    aliases: ["dairy", "milk products", "പാൽ ഉൽപ്പന്നങ്ങൾ"],
  },
  {
    id: "bakery_sweets",
    label: "Bakery & Sweets",
    tier: "core",
    aliases: ["bakery", "confectionery", "cakes", "പലഹാരം"],
  },
  {
    id: "fruits_vegetables",
    label: "Fruits & Vegetables",
    tier: "core",
    aliases: ["fresh produce", "produce", "പഴം പച്ചക്കറി"],
  },
  {
    id: "meat_fish_eggs",
    label: "Meat, Fish & Eggs",
    tier: "core",
    aliases: ["non-veg", "seafood", "fish", "മാംസം", "മീൻ", "മുട്ട"],
  },
  { id: "frozen_foods", label: "Frozen Foods", tier: "core", aliases: ["frozen", "freezer items"] },
  {
    id: "personal_care",
    label: "Personal Care",
    tier: "core",
    aliases: ["toiletries", "grooming", "വ്യക്തിഗത പരിചരണം"],
  },
  {
    id: "home_care_cleaning",
    label: "Home Care & Cleaning",
    tier: "core",
    aliases: ["household cleaning", "cleaning products"],
  },
  {
    id: "prepared_food_meals",
    label: "Prepared Food & Meals",
    tier: "core",
    aliases: ["ready food", "meals", "dishes", "ഭക്ഷണം"],
  },
  {
    id: "stationery_general",
    label: "Stationery & General Items",
    tier: "core",
    aliases: ["stationery", "school & office", "general items"],
  },
  // SECONDARY
  {
    id: "cooking_essentials",
    label: "Cooking Essentials",
    tier: "secondary",
    aliases: ["cooking needs"],
  },
  { id: "tea_coffee", label: "Tea & Coffee", tier: "secondary", aliases: ["hot beverages"] },
  {
    id: "ready_to_cook_eat",
    label: "Ready-to-Cook & Ready-to-Eat",
    tier: "secondary",
    aliases: ["rtc", "rte", "instant foods"],
  },
  {
    id: "ice_cream_desserts",
    label: "Ice Cream & Desserts",
    tier: "secondary",
    aliases: ["desserts", "sweets"],
  },
  { id: "baby_care", label: "Baby Care", tier: "secondary", aliases: ["baby products"] },
  {
    id: "health_wellness",
    label: "Health & Wellness",
    tier: "secondary",
    aliases: ["wellness", "health products"],
  },
  {
    id: "household_kitchen",
    label: "Household & Kitchen",
    tier: "secondary",
    aliases: ["homeware", "kitchenware"],
  },
  { id: "pet_care", label: "Pet Care", tier: "secondary", aliases: ["pet products"] },
];

/** Substring match against label + aliases, case-insensitive. No mutation. */
export function matchesPresetQuery(
  preset: { label: string; aliases: readonly string[] },
  query: string,
): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  if (preset.label.toLowerCase().includes(q)) return true;
  return preset.aliases.some((a) => a.toLowerCase().includes(q));
}

export function searchSellingUnitPresets(query: string): SellingUnitPreset[] {
  return SELLING_UNIT_PRESETS.filter((p) => matchesPresetQuery(p, query));
}

export function searchCategoryPresets(query: string): CategoryPreset[] {
  return CATEGORY_PRESETS.filter((p) => matchesPresetQuery(p, query));
}
