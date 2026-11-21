---
name: terraria-wiki-editor
description: Edit and review Terraria and tModLoader mod wiki articles in neutral, precise Terraria Wiki-style English. Use for EaC:Re wiki pages, Companions, Factors, Medallions, game systems, glossary, and English/Japanese consistency checks. Preserve mechanics and game terminology.
---

# Terraria Wiki Editor

Requested alias: `terraria_wiki_editor`. The canonical Agent Skills name is `terraria-wiki-editor`, because Agent Skills identifiers allow lowercase letters, digits and hyphens.

## Purpose

Edit **player-facing wiki articles**, not promotional copy or in-game tooltips. Follow the *Official Terraria Wiki: Style guide* for tone and formatting while preserving the mod's implementation and the author's meaning. Work article by article, using the correct template for the page type.

Primary reference: https://terraria.wiki.gg/wiki/Terraria_Wiki:Style_guide  
Comparative examples: https://terraria.wiki.gg/wiki/Slimes ; https://terraria.wiki.gg/wiki/Guide ; https://terraria.wiki.gg/wiki/Accessories ; https://terraria.wiki.gg/wiki/Buffs

This is an editorial interpretation for a **separate mod wiki**, not a claim that the mod's wiki is operated by the Official Terraria Wiki.

## Non-negotiable style

1. Use **American English**, correct grammar, and a neutral encyclopedic voice. Use the present tense for current mechanics.
2. Avoid first and second person in reference articles: no "you", "your", "we", "our", greetings, rhetorical questions, hype, or subjective praise. Prefer "the player", "the Companion", "the wearer", and the named item/entity. Imperatives may be used sparingly in numbered *how-to* steps, but impersonal instructions are usually better.
3. Avoid contractions, vague qualifiers, flavor presented as mechanics, promotional wording, and internal developer commentary such as "the current implementation" unless a version distinction is essential.
4. Use **sentence case** for ordinary headings ("Getting started", "Growth and Grade", "Combat roles"). Preserve the exact case of proper names, named buffs, and UI labels.
5. Preserve in-game capitalization. Do not capitalize generic enemy groups, projectiles, stats, or common nouns unnecessarily. Do not rename project-specific terms: **Companion, Contract, Empty Contract, Factor, Medallion, Grade, Rank, MASTER, AP, ATK, DEF, HP, Essence, Tactics, Technique, Body, Kin, Anomaly, Attack, Defense, Apoyar, Direct**, or other exact in-game identifiers without evidence.
6. Use the multiplication sign **×**, digits for gameplay statistics, standard percent signs, readable number ranges, and accurate units (HP/s, seconds, tiles, percentage points). Do not silently equate +10 percentage points with +10%.
7. Use straight quotation marks and apostrophes in newly edited English prose where feasible. Keep typographic characters deliberately required for user-facing formatting only.
8. Distinguish **vanilla Terraria behavior** from **Companion behavior**. A Terraria Bestiary or trivia note is not evidence that the mod implements that mechanic.
9. Prefer short, declarative sentences. Keep the main effect first, then target/trigger, Rank/aptitude scaling, exclusions, and acquisition, when applicable.
10. **Never invent, round, simplify away, or 'correct' a gameplay fact by intuition.** If code or source evidence is missing, mark for verification instead of silently changing it.

## Page-specific editing templates

### Main page / navigation (`#home`)

- One factual lead explaining what the mod adds.
- Brief overview of the supported mechanics and links to the detailed articles.
- Put restrictions under requirements or compatibility; avoid advertisements, welcomes, and slogans.
- Example: "Enemies as Companions: Reforged allows supported enemies to be registered as Companions and assigned to teams."

### Game systems (`#systems`)

- Start with the mechanic's definition and purpose; follow with steps and objective conditions.
- Keep recipe ingredients, UI gestures, capture formulas, growth, Grade limits, and battle restrictions exact.
- Separate prerequisites, acquisition, controls, role effects, and exceptions. Use examples only to clarify a specific rule.
- Use player-centric terminology rather than internal controller, hook, implementation, or NPC-slot terminology unless that detail directly changes gameplay.

### Glossary (`#terms`)

- Define the term in one direct sentence, then add one or two sentences for the most important limitations.
- Avoid circular definitions and narrating the player's actions.
- Cross-check counts against source data: `data.companions.length`, `data.factors.length` rather than stale hardcoded totals.
- Do not misrepresent design plans as currently implemented.

### Companion list and species profiles (`#companions`, `#companion/<id>`)

- Lead with the entity and its **Companion-specific movement/attack behavior**.
- Keep base statistics, command cost, reference Grade, aptitude and default innate Factor distinct from a captured individual's stats.
- Describe unique mechanics or variants after basic behavior. Avoid filler like "A darting flying Companion" when a more precise behavior is known.
- Never attribute an effect supplied by an equipped Factor to the companion's intrinsic AI.
- Preserve differences among vanilla sprite/trivia, acquired Contract properties, and actual combat behavior.

### Factor list and Factor pages (`#factors`, `#factor/<key>`)

- First sentence: principal effect in a form helpful when scanned in the **list** (the list displays only the first line). Prefer a descriptive statement over an implementation formula.
- Subsequent lines: exact trigger, cooldown, targets, Rank progression, aptitude scaling, caps, stacking, DoT rules, restrictions, and persistence.
- Do **not** remove critical exceptions to make an effect sound simpler. Numbers and relationship keywords such as "once", "per", "only", "up to", "does not", "including", and "excluding" must survive.
- Preserve `name`, `key`, `id`, Grade, ranks, formula and acquisition facts unless separately verified.
- Distinguish **Rank** from **aptitude**; **damage** from **ATK**; **percentage** from **percentage points**; **natural regeneration** from direct healing.
- Factor pages can be more technical than the main page, but still should not read as source-code comments.

### Medallions (`#medallions`)

- State the team-wide effect, triggering conditions, exact values, caps and any boss/event interactions.
- List acquisition as a separate, verifiable condition. Do not blur the Reward unlock with subsequent shop purchases.
- Do not imply an effect works in multiplayer or against unsupported bosses unless confirmed.

### Buffs and debuffs (`status-data.js`)

- State the affected target and gameplay effect; include dependencies, stacking and immunity interactions when important.
- Describe observable effects, not internal state machines or icon rendering.
- Preserve the actual status classification; do not change `kind`, IDs, or icon paths as a style edit.

### Terraria trivia (`companion-flavor.js`)

- Treat these as **vanilla Terraria** notes separate from mod mechanics.
- Attribute Bestiary claims to the Bestiary when lore is involved.
- Remove editorial commentary, speculation, and hype; never invent lore or claim a reference exists without checking.
- Keep source references attached to the relevant vanilla pages.

## EaC:Re repository map

- `app.js`: bilingual UI strings, landing page, systems article, glossary, list and detail templates, Medallion article.
- `data.js`: species stats and Factor entries (includes `description` / `descriptionJa`).
- `companion-notes.js`: Companion behavior and Japanese equivalents.
- `companion-flavor.js`: Terraria trivia and Bestiary descriptions, **not** mod mechanics.
- `status-data.js`: buffs, debuffs, cross-Factor status relationships.
- `index.html`: metadata and navigation labels.
- `style.css` and `assets/`: out of scope for prose-only editing.

These are JavaScript data files, not Markdown articles. Article URLs are rendered through hash routes. **Do not change route keys, generated links, escaping, or HTML markup while editing prose.**

## Workflow

1. Inventory current article categories and data counts. Identify where every visible English string originates.
2. Read the Official Terraria Wiki style guide and sample pages appropriate to each article type. If inaccessible, use directly verified search excerpts and state the limitation.
3. For each article, separate **fact**, **terminology**, **tone**, **structure**, and **unverified statement**.
4. Compare every proposed factual sentence with the current data and, if gameplay mechanics are uncertain, the mod's source code. Keep unverified mechanics unchanged and record them for follow-up.
5. Make the smallest editorial change that improves clarity; retain numerical values, temporal order, target conditions and exceptions.
6. Check the Japanese string after changing English. Update it when required to retain equivalence; do not present translated Japanese as an official localization.
7. Verify JavaScript syntax, data counts, IDs, cross-links, all replaced strings and any testable rendering. Run a second pass for unintended second-person language and obsolete hardcoded totals.
8. Produce an article-type audit and a compact change log with before/after examples. Do not claim runtime/code validation when only static inspection was possible.

## Editorial examples

**Landing page**  
Before: "Turn supported enemies into Companions, customize their abilities, and lead them into battle!"  
After: "Supported enemies can be registered as Companions, developed with Factors, and deployed in teams."

**System guide**  
Before: "Ready to bring a familiar face along on your journey?"  
After: "Companions are obtained by defeating supported enemies with an Empty Contract."

**Companion behavior**  
Before: "Uses the shared caster lifecycle: travels as a Soul, materializes, and fires one to three seeds."  
After: "Travels in Soul form and materializes to fire one to three seeds."

**Factor list**  
Before: "To calculate the DEF bonus, multiply Rank by the Body aptitude coefficient ..."  
After: "Increases the wearer's DEF based on Rank and Body aptitude."  
*Retain the exact coefficient table and rounding rule immediately after this first-line summary.*

**Medallion**  
Before: "The current implementation gives each Bee base ATK 8 ..."  
After: "Each Bee Token has 8 base ATK ..." (only if confirmed by source).

**Glossary**  
Before: "An enemy registered as your ally."  
After: "An enemy registered as a Companion through a Contract."

## Quality gate

- [ ] Every page type has been reviewed.
- [ ] Lead sentences are descriptive and scan well in list previews.
- [ ] No second-person or promotional prose remains in reference content.
- [ ] All numbers, units, target rules and exceptions remain unchanged.
- [ ] No game behavior has been inferred from a vanilla trivia entry.
- [ ] English and Japanese are semantically aligned.
- [ ] `data.js` parses; JS syntax passes; data IDs remain stable.
- [ ] Routes and HTML generation remain intact.
- [ ] Changes are suitable for a diff/review; unresolved gameplay claims are explicitly listed.
