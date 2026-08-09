# Kerala Market Catalog Glossary

## SB-P-1.11-RG-1 — Catalog Categories & Selling Units

**Mission:** SB-P-1.11-RG-1 — Kerala Market Glossary Research  
**Research Room:** 08_Research_Intelligence  
**Retrieval Date:** 2026-08-09  
**Status:** Research deliverable for Mission Control review  
**Implementation Authority:** None — research/documentation only

---

## 1. Purpose and Scope

This glossary provides research-backed preset recommendations for Smart Business Catalog **Category** and **Selling Unit** selectors for Kerala brick-and-mortar merchants.

It is designed for bakeries, groceries, mini-marts, supermarkets, cafes, restaurants, and local retail businesses.

The goal is to reduce repetitive typing and make setup feel familiar without creating a compulsory taxonomy or silently changing merchant wording.

This glossary preserves the locked product decisions that:

- category is optional;
- Build Now categories remain flat;
- categories remain merchant-defined and business-owned;
- every non-stock product has one selling unit;
- familiar standard units may be offered while custom entry remains available;
- no automatic unit conversion is introduced;
- no AI auto-categorization or silent assignment is introduced.

---

## 2. Research Method and Evidence Standard

Research used a layered evidence approach:

1. **Kerala official / first-party sources** for local merchant vocabulary and product presentation.
2. **India-wide first-party retail sources** for broad category conventions used by large Indian retailers.
3. **Legal Metrology sources** for authoritative weight/measure terminology and warnings about treating regulatory net-quantity language as merchant-facing selling-unit behavior.
4. **Kerala food-service evidence** for common service units such as plate, cup, piece, and bowl.
5. **Research synthesis** where no formal source defines the ideal UX taxonomy for Smart Business.

The strongest Kerala-local evidence came from:

- Kerala State Civil Supplies Corporation (Supplyco), whose current product list contains everyday local commodity naming such as `kadala`, `uzhunnu`, `cherupayar`, `mulaku`, `malli`, `jeerakam`, `kaduku`, `vanpayar`, `thuvara parippu`, along with pack-size forms such as `gm`, `kg`, `ml`, `litre`, `pkt`, and `bottle`;
- MILMA, whose product catalogue uses product-family labels such as Milk Packets, Fermented Dairy Products, Frozen Dairy Products, Milk Based Sweets & Confectionery, Refreshing Beverages, Chocolates and Milk Powder, and whose products are presented in g/ml/litre, packets, cups, pouches, tins and packs;
- Kerala Tourism Responsible Tourism food-service listings, which repeatedly present prepared foods as `per plate`, `per cup`, `per piece`, `per bowl`, `1 litre`, and `single`;
- Reliance SMART Bazaar pages for Kerala locations, which group products into Fruits & Vegetables, Staples, Dairy, Packaged Food, Home & Personal Care;
- Lulu Hypermarket India, which exposes broad retail families including Fruits & Vegetables, Dairy & Bakery, Snacks, Meat & Frozen, Staples and Other Grocery Foods, Personal Care, plus subfamilies such as Beverages, Tea, Coffee, Oils, Ghee, Spices, Rice & Cereals, Dals & Pulses, Bread & Bun, Cakes & Pastries, Eggs, and more.

### Evidence interpretation rule

A term appearing in regulation is **not automatically** a recommended merchant-facing selector value. Regulation is used to validate canonical weight/measure language, not to force a legal taxonomy into the product.

A term appearing on a retailer site is evidence of recognizability, not proof that every Kerala merchant uses it.

Malayalam terms below are provided mainly as language/alias aids. They should not be interpreted as evidence that a Malayalam label must replace the English UI label.

---

## 3. Research Findings — Selling Units

### 3.1 Strong patterns

Across official Kerala and Indian sources, the clearest reusable patterns are:

- metric weight: kilogram / gram;
- metric volume: litre / millilitre;
- count: piece / number-like count;
- packaging/selling form: packet, bottle, box, pack/pouch, tin/can, tray;
- food service: plate, cup, bowl, piece;
- local retail: carton, bundle, roll, pair, set and metre are plausible but more vertical-specific.

Kerala Legal Metrology reproduces the Packaged Commodities rule that quantities below one kilogram use gram, below one litre use millilitre, and equal/above those thresholds use kilogram/litre. It also distinguishes items sold by number using terms such as number, unit, piece, pair or set. This is useful canonical terminology, but Smart Business must not treat those rules as an automatic conversion engine.

### 3.2 Design implication

The default selector should stay short. The most useful merchant-facing approach is:

- **CORE:** highly familiar values spanning the target verticals;
- **SECONDARY:** useful but more context-specific values, discoverable by search;
- **CUSTOM:** always available for merchant-specific wording.

---

## 4. Recommended Selling Unit Preset Set

### 4.1 CORE presets

| Stable ID | Display Label | Common Aliases | Malayalam / Local Note | Typical Use | Priority | Notes |
|---|---|---|---|---|---|---|
| `piece` | Piece | pc, pcs, piece, pieces, each, no, nos | എണ്ണം / പീസ് | bakery items, individual retail items, produce sold by count | CORE | Best general count unit. `Nos` should normalize to Piece only after explicit user selection, not silently. |
| `packet` | Packet | pkt, packet, pack | പാക്കറ്റ് | milk sachets, snacks, grocery packs, spices, packaged goods | CORE | `Pack` is common but semantically broader; keep as alias. |
| `bottle` | Bottle | btl, bottle | കുപ്പി / ബോട്ടിൽ | beverages, oils, sauces, cleaning liquids | CORE | Widely understandable physical selling form. |
| `box` | Box | box, bx | പെട്ടി / ബോക്സ് | bakery, confectionery, tea, household/general retail | CORE | Distinct from wholesale carton. |
| `kilogram` | Kilogram | kg, kilo, kilogram | കിലോഗ്രാം / കിലോ | rice, pulses, produce, meat/fish, loose grocery | CORE | Canonical display may be `Kilogram (kg)` in selector; stored stable value should not imply conversion. |
| `gram` | Gram | g, gm, gram, grams | ഗ്രാം | spices, bakery ingredients, sweets, smaller loose quantities | CORE | `gm` is common in Kerala product listings although SI symbol is `g`; keep `gm` as alias. |
| `litre` | Litre | l, L, ltr, litre, liter | ലിറ്റർ | milk, oils, beverages, prepared liquids | CORE | Use Indian/British spelling `Litre`; recognize `liter` as alias. |
| `millilitre` | Millilitre | ml, mL, millilitre, milliliter | മില്ലിലിറ്റർ | drinks, dairy, sauces, personal care | CORE | Prefer display `Millilitre (ml)` or `Millilitre (mL)` consistently. |
| `plate` | Plate | plate, per plate | പ്ലേറ്റ് | restaurant meals, snacks, prepared food | CORE | Strong Kerala Tourism food-service evidence. No implied serving-size standard. |
| `cup` | Cup | cup, per cup | കപ്പ് | tea/coffee, soups, desserts, food service | CORE | Strong Kerala Tourism/MILMA-type food-service packaging evidence; no volume conversion implied. |

**Recommended CORE count: 10**

### 4.2 SECONDARY presets

| Stable ID | Display Label | Common Aliases | Malayalam / Local Note | Typical Use | Priority | Notes |
|---|---|---|---|---|---|---|
| `pouch` | Pouch | pouch, sachet | പൗച്ച് / സാഷെ | dairy, sauces, powders, small FMCG packs | SECONDARY | Useful where merchant distinguishes pouch from packet. |
| `tin` | Tin | tin, can | ടിൻ / കാൻ | ghee, canned foods, confectionery, packaged food | SECONDARY | `Can` is an alias; avoid automatically treating capacity as a volume unit. |
| `tray` | Tray | tray | ട്രേ | eggs, bakery, meat, prepared foods | SECONDARY | Packaging/selling form, not quantity conversion. |
| `bowl` | Bowl | bowl, per bowl | ബൗൾ | soups, curries, desserts, food service | SECONDARY | Kerala Tourism evidence supports bowl as a service unit. |
| `pair` | Pair | pair, pr | ജോഡി / പേയർ | footwear, socks, small general retail | SECONDARY | Supported by Legal Metrology number-language and Indian retail usage. |
| `set` | Set | set | സെറ്റ് | household/general retail grouped items | SECONDARY | Count grouping; no automatic component quantity. |
| `roll` | Roll | roll | റോൾ | foil, tissue, wrapping, stationery/general retail | SECONDARY | Indian retail evidence supports roll terminology. |
| `metre` | Metre | m, meter, metre | മീറ്റർ | fabric, wire, rope, sheet goods | SECONDARY | Canonical SI spelling `Metre`; likely more relevant to general retail than grocery. |
| `carton` | Carton | carton, ctn | കാർട്ടൺ | wholesale/secondary packaging, beverages, FMCG | SECONDARY | Do not infer how many pieces/packets are inside. |
| `bundle` | Bundle | bundle, bunch | കെട്ട് / ബണ്ടിൽ | greens, stationery, grouped goods | SECONDARY | High ambiguity; merchant-defined usage must remain explicit. |

**Recommended SECONDARY count: 10**

### 4.3 CUSTOM-ONLY / do not preset as canonical unit

| Term | Reason |
|---|---|
| Half / Full | Relative and product-dependent; no stable quantity meaning. |
| Small / Medium / Large | Size descriptors, not stable selling units. |
| Serving | Too abstract; plate/cup/bowl are clearer when appropriate. |
| Glass | Common conversationally for drinks but capacity is ambiguous and vessel-dependent. Prefer custom entry if needed. |
| Scoop | Highly product- and utensil-dependent. |
| Slice | Useful in some bakeries but narrower than Piece; merchant can use custom entry. |
| Bunch | Product-dependent; may be used as alias/custom rather than a default canonical unit. |
| Dozen | Familiar in commerce, especially eggs/bakery, but Legal Metrology explicitly says dozen should not be stated as package net quantity. To avoid confusing regulatory package quantity with merchant sale unit, keep custom-only in Phase 1 unless Engineering explicitly scopes a contextual preset. |
| Quintal | Wholesale/procurement-oriented; not a default retail selling unit for target users. |
| Case | Ambiguous with carton/box and usually wholesale-oriented. |

---

## 5. Selling Unit Synonym / Normalization Table

Normalization here means **search/recognition guidance**, not silent data mutation.

| Typed / Spoken Alias | Recommended Matching Preset | Confidence | Caution |
|---|---|---:|---|
| pcs / pc / piece / pieces / each | Piece | High | `each` is semantic rather than a formal unit; require explicit selection. |
| no / nos / number | Piece | Medium | `Nos` is common Indian shorthand; do not silently rewrite existing custom values. |
| pkt / packet / pack | Packet | High | `pack` can also mean multi-pack; preserve custom entry. |
| btl | Bottle | High | — |
| bx | Box | Medium | Less universal than full word. |
| kg / kilo | Kilogram | High | No kg↔g conversion. |
| g / gm | Gram | High | `gm` is locally common though SI symbol is `g`. |
| ltr / liter / litre | Litre | High | No litre↔ml conversion. |
| ml / mL | Millilitre | High | Keep one display convention. |
| sachet | Pouch | Medium | Some merchants distinguish sachet and pouch; custom entry stays available. |
| can | Tin | Medium | `Can` may deserve separate custom value if merchant distinguishes it. |
| pr | Pair | Medium | — |
| ctn | Carton | Medium | Wholesale context; no component conversion. |
| meter | Metre | High | Display spelling recommendation only. |

---

## 6. Research Findings — Categories

### 6.1 Strong patterns

Across Kerala and India first-party retail evidence, the most stable broad groupings are:

- staples / cooking essentials;
- snacks and packaged foods;
- beverages;
- dairy;
- bakery;
- fruits and vegetables;
- meat/fish/eggs;
- frozen foods;
- personal care;
- home care / cleaning;
- stationery/general retail;
- prepared foods for restaurant/cafe users.

Large retailers often split these into many subcategories. Smart Business should not reproduce their full taxonomy because D-008 requires merchant ownership and the Founder specifically asked for a useful pre-filled selector, not a rigid master hierarchy.

### 6.2 Kerala-local vocabulary insight

Supplyco demonstrates that merchants and consumers encounter mixed English/local product wording naturally: for example `kadala`, `uzhunnu`, `cherupayar`, `mulaku`, `malli`, `jeerakam`, `kaduku`, `vanpayar`, `thuvara parippu` appear alongside English commodity names. This supports **alias-aware search** and optional Malayalam/local hints, but it does not justify forcing Malayalam-only categories.

### 6.3 Category design implication

Categories should be presets in the UI only. When the merchant selects a preset, the product should still end up associated with a normal business-owned category under the later Engineering design.

No preset should silently create duplicate categories or become globally owned taxonomy data.

---

## 7. Recommended Category Preset Set

### 7.1 CORE presets

| Stable ID | Display Label | Common Aliases / Local Terms | Merchant Types | Example Products | Priority | Notes |
|---|---|---|---|---|---|---|
| `grocery_staples` | Grocery & Staples | staples, provisions, പലചരക്ക് | grocery, mini-mart, supermarket | rice, pulses, flour, sugar, salt, spices | CORE | Broad, familiar umbrella. Avoid forcing subcategory hierarchy. |
| `snacks_packaged_foods` | Snacks & Packaged Foods | snacks, packaged foods, branded foods | grocery, mini-mart, supermarket, cafe | biscuits, chips, chocolates, ready snacks | CORE | Mirrors common Indian retail grouping. |
| `beverages` | Beverages | drinks, cool drinks, പാനീയങ്ങൾ | all food retail, cafe, restaurant | water, soft drinks, juice, tea/coffee products | CORE | Keep broad; hot/cold can remain merchant-created categories. |
| `dairy_chilled` | Dairy & Chilled | dairy, milk products, പാൽ ഉൽപ്പന്നങ്ങൾ | grocery, supermarket, bakery, cafe | milk, curd, butter, paneer, yoghurt | CORE | MILMA and major retailer evidence strongly support dairy grouping. |
| `bakery_sweets` | Bakery & Sweets | bakery, confectionery, cakes, പലഹാരം | bakery, grocery, cafe, supermarket | bread, bun, cake, pastry, biscuits, sweets | CORE | Useful Kerala-wide; merchant may split Bakery and Sweets later. |
| `fruits_vegetables` | Fruits & Vegetables | fresh produce, produce, പഴം പച്ചക്കറി | grocery, supermarket, mini-mart, restaurant | fruits, vegetables, leafy vegetables | CORE | Strong retailer consensus. |
| `meat_fish_eggs` | Meat, Fish & Eggs | non-veg, seafood, fish, മാംസം / മീൻ / മുട്ട | supermarket, restaurant, specialty retail | chicken, beef, mutton, fish, eggs | CORE | Kerala retail evidence supports meat/fish/eggs as a meaningful family; merchants can split if needed. |
| `frozen_foods` | Frozen Foods | frozen, freezer items | supermarket, mini-mart, cafe, restaurant | frozen snacks, ice cream, frozen meat/veg | CORE | Common retailer grouping. Ice cream may also sit under Dairy; merchant decides. |
| `personal_care` | Personal Care | toiletries, grooming, വ്യക്തിഗത പരിചരണം | grocery, mini-mart, supermarket, local retail | soap, shampoo, toothpaste, sanitary products | CORE | Strong retailer consensus. |
| `home_care_cleaning` | Home Care & Cleaning | household cleaning, cleaning products | grocery, mini-mart, supermarket, local retail | detergent, dishwash, floor cleaner, cleaning tools | CORE | More precise for target retail than very broad `Home`. |
| `prepared_food_meals` | Prepared Food & Meals | ready food, meals, dishes, ഭക്ഷണം | cafe, restaurant, bakery | biriyani, meals, curries, sandwiches, prepared snacks | CORE | Research synthesis for restaurant/cafe target. Food-service sources confirm plate/cup/piece presentation. |
| `stationery_general` | Stationery & General Items | stationery, school & office, general items | mini-mart, local retail, supermarket | notebooks, pens, umbrellas, small general goods | CORE | Supplyco product list includes stationery/general items; JioMart exposes School, Office & Stationery. |

**Recommended CORE count: 12**

### 7.2 SECONDARY presets

| Stable ID | Display Label | Common Aliases | Merchant Types | Example Products | Priority | Notes |
|---|---|---|---|---|---|---|
| `cooking_essentials` | Cooking Essentials | cooking needs | grocery, supermarket | oil, ghee, masala, cooking paste, baking essentials | SECONDARY | Useful where merchant wants to separate staples from cooking ingredients. |
| `tea_coffee` | Tea & Coffee | hot beverages | grocery, cafe, supermarket | tea powder, coffee, malted drinks | SECONDARY | Common retail subfamily; cafes may use it as menu category. |
| `ready_to_cook_eat` | Ready-to-Cook & Ready-to-Eat | RTC, RTE, instant foods | grocery, supermarket, mini-mart | instant mixes, noodles, ready meals | SECONDARY | Common modern retail grouping; avoid regulatory implications. |
| `ice_cream_desserts` | Ice Cream & Desserts | desserts, sweets | bakery, cafe, restaurant, supermarket | ice cream, puddings, payasam, dessert cups | SECONDARY | Overlaps Dairy/Frozen/Bakery; merchant choice decides. |
| `baby_care` | Baby Care | baby products | supermarket, mini-mart, local retail | diapers, baby wipes, baby toiletries | SECONDARY | Strong India retail convention but not universal across target shops. |
| `health_wellness` | Health & Wellness | wellness, health products | supermarket, local retail | nutrition drinks, basic wellness retail items | SECONDARY | Avoid medicines/pharmacy classification. |
| `household_kitchen` | Household & Kitchen | homeware, kitchenware | supermarket, local retail | foil, storage, kitchen tools, disposables | SECONDARY | Useful beyond cleaning products. |
| `pet_care` | Pet Care | pet products | supermarket, local retail | pet food, litter, pet-care items | SECONDARY | Useful but lower-frequency for core Kerala merchant target. |

**Recommended SECONDARY count: 8**

### 7.3 CUSTOM-ONLY / do not preset as default category

| Term / Category Type | Reason |
|---|---|
| GST rate buckets / HSN classifications | Regulatory/accounting classification, not ordinary merchant-facing category taxonomy. |
| Medicines / Pharmacy | Regulated vertical with different operational/compliance requirements; should not be implied by a generic catalog preset. |
| Alcohol | Licensed/regulatory vertical; not appropriate as a default general-retail preset. |
| Tobacco / Nicotine | Restricted/age-regulated goods; should not be normalized into a default convenience taxonomy. |
| Electronics | Outside the primary Phase 1 merchant focus; merchant may create custom category. |
| Fashion / Apparel | Outside the primary Phase 1 merchant focus; merchant may create custom category. |
| Religious / festival-specific categories | Seasonal and merchant-specific; custom creation is more respectful and flexible. |
| Brand names as categories | Brands are not stable product categories and create lock-in/confusion. |
| Very granular food taxonomy | Increases cognitive load and contradicts the flat, merchant-controlled Build Now model. |

---

## 8. Category Synonym / Alias Table

Aliases are for search/typeahead guidance only.

| Alias / Local Wording | Suggested Preset Match | Confidence | Notes |
|---|---|---:|---|
| provisions / grocery / പലചരക്ക് | Grocery & Staples | High | `Provisions` remains common Indian retail wording. |
| branded foods / packaged foods | Snacks & Packaged Foods | High | Some retailers group biscuits/drinks/snacks together. |
| drinks / cool drinks / പാനീയങ്ങൾ | Beverages | High | `Cool drinks` is narrower; do not rename silently. |
| milk products / പാൽ ഉൽപ്പന്നങ്ങൾ | Dairy & Chilled | High | MILMA product families support dairy grouping. |
| confectionery / cakes / bakery items | Bakery & Sweets | High | Merchant may create separate Bakery or Sweets category. |
| fresh / produce / പഴം പച്ചക്കറി | Fruits & Vegetables | High | — |
| non-veg / seafood | Meat, Fish & Eggs | Medium | `Non-veg` can include prepared food; search hint only. |
| freezer items | Frozen Foods | High | — |
| toiletries / grooming | Personal Care | High | — |
| household cleaning / cleaning products | Home Care & Cleaning | High | Do not absorb kitchenware automatically. |
| meals / dishes / ready food | Prepared Food & Meals | Medium | Restaurant/cafe-specific synthesis. |
| school & office | Stationery & General Items | High | General Items is broader than stationery. |

---

## 9. Merchant-Type Applicability Matrix

Legend: `H` = high relevance, `M` = moderate relevance, `L` = lower/occasional relevance.

| Category Preset | Grocery | Mini-Mart | Supermarket | Bakery | Cafe | Restaurant | Local Retail |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Grocery & Staples | H | H | H | M | L | M | M |
| Snacks & Packaged Foods | H | H | H | M | H | M | H |
| Beverages | H | H | H | H | H | H | H |
| Dairy & Chilled | H | H | H | H | H | M | M |
| Bakery & Sweets | M | H | H | H | H | M | M |
| Fruits & Vegetables | H | M | H | L | M | M | M |
| Meat, Fish & Eggs | M | L | H | L | L | H | L |
| Frozen Foods | M | M | H | M | M | M | L |
| Personal Care | H | H | H | L | L | L | H |
| Home Care & Cleaning | H | H | H | L | L | L | H |
| Prepared Food & Meals | L | M | M | H | H | H | M |
| Stationery & General Items | M | H | H | L | L | L | H |

---

## 10. Malayalam / Local-Language Notes

The product should treat Malayalam/local terms as **search aids and optional secondary labels**, not mandatory canonical names.

Recommended language behavior:

- English remains the stable display/canonical label for the initial preset set.
- Common Malayalam terms may appear as search aliases or supporting hints.
- Merchant-created category names may be English, Malayalam, Manglish, or mixed language.
- Search should not reject a valid merchant term simply because it differs from the preset vocabulary.
- Local commodity terms such as `kadala`, `uzhunnu`, `cherupayar`, `mulaku`, `malli`, `jeerakam`, `kaduku`, `vanpayar`, and `thuvara parippu` are valuable evidence that mixed-language search is normal in Kerala retail.

The translations in this glossary are usability aids, not a linguistic standardization mandate.

---

## 11. Terms Deliberately Excluded and Why

### 11.1 Excluded from default Selling Unit presets

- relative size terms such as Half/Full/Small/Medium/Large;
- context-dependent serving terms such as Scoop/Glass/Serving;
- wholesale-oriented units such as Quintal/Case;
- Dozen as a default canonical value because Legal Metrology prohibits dozen as packaged net-quantity expression and the UI should avoid blurring legal package quantity with a merchant-defined sale unit.

### 11.2 Excluded from default Category presets

- legal/tax classifications;
- regulated verticals such as pharmacy, alcohol and tobacco;
- categories far outside the locked target merchant scope;
- granular hierarchies copied from large e-commerce systems;
- brand-specific categories.

---

## 12. Implementation Guidance for Selector Behavior

### 12.1 Selling Unit selector

Recommended future behavior:

1. Show CORE presets first.
2. Search should match aliases (`kg`, `gm`, `pkt`, `ltr`, etc.).
3. Secondary presets appear through search or a `More units` section.
4. Always show `Custom unit`.
5. Choosing `Custom unit` allows merchant-entered text.
6. Never convert quantities automatically.
7. Never silently replace an existing custom unit because it resembles a preset.
8. If a linked Inventory item governs the product unit under D-005, the selector must respect that lock and not create a second unit authority.

### 12.2 Category selector

Recommended future behavior:

1. Existing business-owned categories should appear first or in a clearly marked section.
2. CORE preset suggestions should be available without creating all presets in advance.
3. Search should match aliases/local wording.
4. Selecting a preset should follow the later Engineering specification for creating/reusing a normal business-owned category.
5. Show `Create new category` at all times.
6. `Uncategorized` remains valid because D-006 makes category optional.
7. Do not create duplicates that differ only by casing/normalization.
8. Do not auto-classify a product based on its name, barcode, image, or description.

---

## 13. Ordering and Mobile UX Recommendations

### Selling Unit order

Recommended initial visible order:

1. Piece
2. Packet
3. Bottle
4. Kilogram
5. Gram
6. Litre
7. Millilitre
8. Box
9. Plate
10. Cup

This order balances general retail with food-service needs. Engineering may use merchant-type-aware ordering later only if separately authorized; this glossary does not authorize personalization logic.

### Category order

Recommended initial visible order:

1. Grocery & Staples
2. Snacks & Packaged Foods
3. Beverages
4. Dairy & Chilled
5. Bakery & Sweets
6. Fruits & Vegetables
7. Prepared Food & Meals
8. Meat, Fish & Eggs
9. Frozen Foods
10. Personal Care
11. Home Care & Cleaning
12. Stationery & General Items

### Mobile principle

Do not render all CORE + SECONDARY values as a long static menu. Prefer searchable selection with a short default list, then secondary matches as the merchant types.

---

## 14. Machine-Friendly Section — Recommended Selling Unit Presets

| id | display_label | common_aliases | priority | notes |
|---|---|---|---|---|
| `piece` | Piece | `pc, pcs, piece, pieces, each, no, nos` | CORE | General count unit; no silent normalization. |
| `packet` | Packet | `pkt, packet, pack` | CORE | Common FMCG selling form. |
| `bottle` | Bottle | `btl, bottle` | CORE | Common liquids/package form. |
| `box` | Box | `box, bx` | CORE | Retail/bakery/confectionery packaging. |
| `kilogram` | Kilogram | `kg, kilo, kilogram` | CORE | Metric weight; no conversion. |
| `gram` | Gram | `g, gm, gram, grams` | CORE | Metric weight; `gm` search alias. |
| `litre` | Litre | `l, L, ltr, litre, liter` | CORE | Metric volume; no conversion. |
| `millilitre` | Millilitre | `ml, mL, millilitre, milliliter` | CORE | Metric volume; no conversion. |
| `plate` | Plate | `plate, per plate` | CORE | Food-service unit. |
| `cup` | Cup | `cup, per cup` | CORE | Food-service/beverage unit. |
| `pouch` | Pouch | `pouch, sachet` | SECONDARY | Packaging form. |
| `tin` | Tin | `tin, can` | SECONDARY | Packaged food/general retail. |
| `tray` | Tray | `tray` | SECONDARY | Eggs/bakery/meat/prepared food. |
| `bowl` | Bowl | `bowl, per bowl` | SECONDARY | Food-service unit. |
| `pair` | Pair | `pair, pr` | SECONDARY | Count grouping. |
| `set` | Set | `set` | SECONDARY | Count grouping. |
| `roll` | Roll | `roll` | SECONDARY | Foil/tissue/stationery/general retail. |
| `metre` | Metre | `m, meter, metre` | SECONDARY | Length-based retail; no conversion. |
| `carton` | Carton | `carton, ctn` | SECONDARY | Secondary/wholesale packaging. |
| `bundle` | Bundle | `bundle, bunch` | SECONDARY | Ambiguous grouping; custom path remains. |

---

## 15. Machine-Friendly Section — Recommended Category Presets

| id | display_label | aliases | merchant_types | priority | notes |
|---|---|---|---|---|---|
| `grocery_staples` | Grocery & Staples | `grocery, staples, provisions, പലചരക്ക്` | `grocery, mini-mart, supermarket, local-retail` | CORE | Broad everyday essentials. |
| `snacks_packaged_foods` | Snacks & Packaged Foods | `snacks, packaged foods, branded foods` | `grocery, mini-mart, supermarket, cafe` | CORE | Biscuits/chips/chocolates/packaged snacks. |
| `beverages` | Beverages | `drinks, cool drinks, പാനീയങ്ങൾ` | `all-target-types` | CORE | Broad beverage family. |
| `dairy_chilled` | Dairy & Chilled | `dairy, milk products, പാൽ ഉൽപ്പന്നങ്ങൾ` | `grocery, supermarket, bakery, cafe` | CORE | Milk/curd/butter/paneer/yoghurt. |
| `bakery_sweets` | Bakery & Sweets | `bakery, confectionery, cakes, sweets, പലഹാരം` | `bakery, grocery, cafe, supermarket` | CORE | Merchant may split later. |
| `fruits_vegetables` | Fruits & Vegetables | `fresh, produce, പഴം പച്ചക്കറി` | `grocery, supermarket, mini-mart, restaurant` | CORE | Fresh produce. |
| `meat_fish_eggs` | Meat, Fish & Eggs | `non-veg, seafood, fish` | `supermarket, restaurant, specialty-retail` | CORE | Merchant may split by protein type. |
| `frozen_foods` | Frozen Foods | `frozen, freezer items` | `supermarket, mini-mart, cafe, restaurant` | CORE | Frozen foods/ice cream overlap accepted. |
| `personal_care` | Personal Care | `toiletries, grooming` | `grocery, mini-mart, supermarket, local-retail` | CORE | Soap/shampoo/oral care etc. |
| `home_care_cleaning` | Home Care & Cleaning | `household cleaning, cleaning products` | `grocery, mini-mart, supermarket, local-retail` | CORE | Detergents/cleaners. |
| `prepared_food_meals` | Prepared Food & Meals | `ready food, meals, dishes, ഭക്ഷണം` | `restaurant, cafe, bakery` | CORE | Restaurant/cafe-oriented synthesis. |
| `stationery_general` | Stationery & General Items | `stationery, school & office, general items` | `mini-mart, supermarket, local-retail` | CORE | Notebooks/pens/small general goods. |
| `cooking_essentials` | Cooking Essentials | `cooking needs` | `grocery, supermarket` | SECONDARY | Oils/ghee/masala/baking essentials. |
| `tea_coffee` | Tea & Coffee | `hot beverages` | `grocery, cafe, supermarket` | SECONDARY | Tea/coffee products. |
| `ready_to_cook_eat` | Ready-to-Cook & Ready-to-Eat | `RTC, RTE, instant foods` | `grocery, supermarket, mini-mart` | SECONDARY | Modern retail subfamily. |
| `ice_cream_desserts` | Ice Cream & Desserts | `desserts, sweets` | `bakery, cafe, restaurant, supermarket` | SECONDARY | Overlap is merchant-controlled. |
| `baby_care` | Baby Care | `baby products` | `supermarket, mini-mart, local-retail` | SECONDARY | Common but not universal. |
| `health_wellness` | Health & Wellness | `wellness, health products` | `supermarket, local-retail` | SECONDARY | Excludes medicine/pharmacy. |
| `household_kitchen` | Household & Kitchen | `homeware, kitchenware` | `supermarket, local-retail` | SECONDARY | Kitchen/general household goods. |
| `pet_care` | Pet Care | `pet products` | `supermarket, local-retail` | SECONDARY | Lower-frequency but recognizable. |

---

## 16. Confidence Notes and Unresolved Ambiguities

### High confidence

- kg/g/litre/ml are foundational measurement presets.
- Piece, Packet, Bottle and Box are strongly recognizable retail selling forms.
- Plate and Cup are directly evidenced in Kerala food-service listings.
- Grocery/Staples, Snacks/Packaged Foods, Beverages, Dairy, Bakery, Fruits & Vegetables, Personal Care and Home Care are strongly supported broad category concepts.

### Medium confidence

- Prepared Food & Meals is the best broad restaurant/cafe preset label. The need is clear from target users and Kerala food-service evidence, but no single official Kerala source defines this exact taxonomy label.
- Stationery & General Items intentionally combines two patterns to avoid creating too many top-level presets.
- `Tin` with `Can` as an alias is pragmatic but some merchants may distinguish the physical forms.
- Bundle/Bunch is highly contextual.

### Research cautions

- No direct field interview or statistically representative merchant survey was performed under this web-research mission.
- Malayalam translations are usability aids, not proof of preferred merchant UI language.
- Large-retailer taxonomies are intentionally simplified to avoid feature bloat and preserve D-008.
- Engineering should not turn this research list into compulsory database seed data without a separately reviewed implementation design.

---

## 17. Source List

All sources retrieved 2026-08-09 unless otherwise stated.

### Kerala / first-party

1. Kerala State Civil Supplies Corporation (Supplyco), **Our Products**  
   https://supplycokerala.com/our-products  
   Evidence: mixed English/local commodity terms; pack-size and packaging vocabulary including gm, kg, ml, litre, pkt, bottle.

2. Kerala State Civil Supplies Corporation (Supplyco), **Price List**  
   https://supplycokerala.com/price-list  
   Evidence: Kerala-local commodity vocabulary such as kadala, uzhunnu, mulaku, malli, cherupayar, vanpayar, thuvara parippu.

3. Kerala State Civil Supplies Corporation, **Corporate / operational divisions**  
   https://www.supplycokerala.com/whoiswho.php/bod.php  
   Evidence: Supplyco handles Pulses, Spices, Sugar, Rice, FMCG, tea, curry powders, coconut oil, salt, washing soap, stationery and other retail lines.

4. Kerala Co-operative Milk Marketing Federation (MILMA), **All Products**  
   https://milma.com/allproducts  
   Evidence: g/ml/litre product presentation; packets, cups, packs, tins, pouches; dairy, beverages, sweets, bakery-type products.

5. MILMA, **Home / Product Families**  
   https://milma.com/  
   Evidence: Milk Packets, Fermented Dairy Products, Fat Rich Dairy Products, Frozen Dairy Products, Milk Based Sweets & Confectionery, Refreshing Beverages, Chocolates, Milk Powder.

6. MILMA, **Milk & Ghee Product Rates**  
   https://milma.com/ratedetails/mrcmpu  
   Evidence: retail presentation using ml, litre and bulk variants.

7. Kerala Tourism Responsible Tourism, **Koo Koo's Food Court / Ethnic Cuisine**  
   https://www.keralatourism.org/responsible-tourism/ethnic-cuisine/unit/koo-koos-food-court/1115  
   Evidence: repeated `per plate`, `per cup`, `per bowl`, `per piece` food-service units.

8. Kerala Tourism Responsible Tourism, **Sunitha Sunilkumar A V / Ethnic Cuisine**  
   https://www.keralatourism.org/responsible-tourism/ethnic-cuisine/unit/sunitha-sunilkumar-a-v/370  
   Evidence: plate, piece, litre and single as food-service presentation forms.

9. Reliance SMART Bazaar, **Edappally, Kochi official store page**  
   https://stores.reliancesmartbazaar.com/reliance-smart-bazaar-hypermarket-edappally-kochi-294129/Home  
   Evidence: Kerala store product families — Fruits & Vegetables, Staples, Dairy, Packaged Food, Home & Personal Care.

10. Reliance SMART Bazaar, **Koyilandy, Calicut official store page**  
    https://stores.reliancesmartbazaar.com/reliance-smart-bazaar-smart-koyilandy-hypermarket-koyilandy-calicut-553723/Home  
    Evidence: same broad families in another Kerala retail location.

### India-wide retail / first-party

11. Lulu Hypermarket India, **Return Policy category listing**  
    https://www.luluhypermarket.in/cms/return-policy  
    Evidence: Fruits & Vegetables, Dairy & Bakery, Snacks, Meat & Frozen, Staples and Other Grocery Foods, Personal Care and detailed subfamilies.

12. JioMart, **Staples / Popular Categories**  
    https://www.jiomart.com/staples  
    Evidence: Biscuits, Drinks & Packaged Foods; Fruits & Vegetables; Cooking Essentials; Dairy & Bakery; Personal Care; Home; Mom & Baby Care; School, Office & Stationery.

13. JioMart, **Products / Popular Categories**  
    https://www.jiomart.com/products  
    Evidence: broad Indian retail category conventions including Fresh, Packaged Foods, Cooking Essentials, Personal Care, Home, Kitchenware, Tableware, School/Office/Stationery.

14. JioMart, **Home Essentials**  
    https://www.jiomart.com/sections/home-essentials  
    Evidence: retail use of roll/metre-style product presentation for foil and related goods.

### Official metrology / standards

15. Kerala Legal Metrology Department, **Relevant Rules — Statement of units of weight, measure or number**  
    https://lmd.kerala.gov.in/2025/06/09/relevant-rules/  
    Evidence: gram/kilogram, millilitre/litre thresholds; number/unit/piece/pair/set wording; packaged-commodity caution on dozen.

16. Kerala Legal Metrology Department, **Acts and Rules**  
    https://lmd.kerala.gov.in/acts-and-rules/  
    Evidence: authoritative location of Legal Metrology Act and Packaged Commodities Rules.

17. Department of Consumer Affairs, Government of India, **Weight and Measures**  
    https://consumeraffairs.gov.in/pages/weight-and-measures  
    Evidence: Indian metric/SI basis including kilogram and metre.

18. India Code, **Legal Metrology Act, 2009**  
    https://www.indiacode.nic.in/handle/123456789/2102?locale=en  
    Evidence: statutory source and associated Legal Metrology rules.

---

## 18. Final Research Recommendation

Use **10 CORE Selling Unit presets + 10 SECONDARY Selling Unit presets**, always retaining Custom Unit.

Use **12 CORE Category presets + 8 SECONDARY Category presets**, always retaining existing merchant categories, `Create new category`, and Uncategorized.

The machine-friendly tables in Sections 14 and 15 are suitable as canonical research input to the next Engineering Implementation Specification.

The glossary is intentionally a **small practical vocabulary**, not an attempt to encode every retail unit or category found in Kerala.

**Research verdict:** `PASS WITH RESEARCH CAUTIONS — GLOSSARY READY FOR IMPLEMENTATION SPECIFICATION`
