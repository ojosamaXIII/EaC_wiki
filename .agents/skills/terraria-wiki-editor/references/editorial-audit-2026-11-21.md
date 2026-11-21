# EaC:Re wiki editorial audit (2026-11-21)

Repository: `ojosamaXIII/EaC_wiki`  
Scope: English player-facing prose and aligned Japanese strings. **This is a static editorial audit; it is not an in-game behavior test.**

## Inventory

The wiki is a hash-routed single-page JavaScript site, not a folder of individual Markdown articles.

| Page type | Route(s) | Content source | Inventory and review |
| --- | --- | --- | --- |
| Main page | `#home` | `app.js` | Revised promotional greeting, first/second-person language and landing-page summary |
| Systems | `#systems` | `app.js` | Revised opening, steps, Contract scholar description, and internal implementation wording; retained capture and training numbers |
| Glossary | `#terms` | `app.js` | Removed second-person definitions and changed an obsolete 92-Factor count to `data.factors.length` |
| Companion directory | `#companions` | `app.js`, `data.js` | **87** species; clarified that species stats are not guaranteed captured stats and renamed "Starting Grade" to "Reference Grade" |
| Companion profiles | `#companion/<id>` | `data.js`, `companion-notes.js`, `companion-flavor.js` | Reviewed page template, **68** behavior-note entries, and vanilla trivia text; revised internal-controller jargon |
| Factor directory | `#factors` | `app.js`, `data.js` | **90** Factors; first description line is the list preview, so it must lead with the actual effect |
| Factor profiles | `#factor/<key>` | `data.js`, `status-data.js` | Added effect-first lead sentences to **38** entries; kept all previous mechanics paragraphs intact |
| Medallions | `#medallions` | `app.js` | **10** Medallions; removed "current implementation" wording from Bee Token description; made Reward instructions factual |
| Named statuses | embedded in Factor pages | `status-data.js` | Reviewed concise definitions and kept IDs, descriptions and classification unchanged |
| Vanilla trivia | embedded in Companion pages | `companion-flavor.js` | Reworded overly conversational entries and linked to source articles rather than unverified `#Trivia` anchors |

## 38 revised Factor leads

Initial 20: Big Boned, Light Shell, Feather, Gladiator, Cold, Jiggle, Fungal Infection, Torrential Rain, Lightning Strike, Thunderbolt, Predatory Feeding, Spiderling, Natural Poison, Quick to Anger, Nature, Predation, Eightfold Frost, Detection, Red Heat, Weapon Master.

Additional 18 long list previews: Bubble Shield, Dependency, Flame, Greater Demon, Host, Lesser Demon, Maternal Colony, Moisture, Mushroom Bomb, Poison Carrier, Rank and File, Revenge, Sandpit, Snake Venom, Spore, Stare, Tick, Yo-Yoyo.

The other 52 Factor lead sentences were screened and retained because they already began with a descriptive mechanic, or revising them would have required unsupported mechanics interpretation. The original explanations were retained below all 38 new lead sentences; this intentionally favors accuracy over aggressively shortening the full article.

## Companion coverage and unresolved completeness

The site contains 87 Companion profiles, but only 68 entries in `companion-notes.js` currently provide a separate "Behavior" section. The remaining 19 are:

`angry_bones`, `blood_zombie`, `blue_slime`, `crab`, `demon_eye`, `doctor_bones`, `face_monster`, `zombie_eskimo`, `goblin_peon`, `goblin_scout`, `goblin_thief`, `goblin_warrior`, `green_slime`, `raincoat_zombie`, `skeleton`, `spore_skeleton`, `the_groom`, `undead_miner`, `zombie`.

Do not fill these with invented combat behaviors. A future mechanics-based pass may add descriptions after checking the corresponding Companion runtime classes.

## Examples and rationale

- Landing page: imperative promotion -> factual definition of available mechanics.
- Systems: "Ready to bring a familiar face along on your journey?" -> definition of Empty Contract recruitment.
- Companion behavior: "shared caster lifecycle" -> visible Soul-form travel and materialization.
- Factor: "To calculate the DEF bonus, multiply ..." -> a short benefit statement on the list page, with the original formula retained in the full article.
- Medallion: "The current implementation ..." -> current observable values without a developer-facing qualifier.
- Trivia: opinionated "more than a beachside curiosity" -> concrete observations about the Crab.

## Static validation to run

1. Parse `data.js` and assert 87 unique Companion IDs, 90 unique Factor IDs, and nonempty EN/JA Factor descriptions.
2. Parse every JavaScript file without executing DOM code, using a JavaScript parser or `node --check`.
3. Confirm the glossary count is dynamic rather than hardcoded.
4. Scan reader-facing copy for "you", "your", "we", promotional sentences and internal jargon.
5. Verify the hash navigation, list preview, and both languages in a browser if a browser test environment is available.
6. Verify mod mechanics separately before changing numbers, eligibility, cooldowns, Rank, aptitude, or chance.

## Remaining verification boundaries

- Source English and Japanese Factor mechanics were **not** newly validated against the current EaC:Re gameplay repository. Editorial changes preserved original mechanics text; no gameplay corrections are claimed.
- Specific Terraria Bestiary/trivia facts and source pages should be fact-checked individually if republished as quotations or lore claims.
- Restrictions such as single-player support, other-mod boss compatibility and Luminance version remain as documented, without inferring current runtime compatibility.
- The linked Terraria Wiki was reviewed through accessible search excerpts of its style guide and representative pages; direct page opening was blocked by the source site during this pass.
- JavaScript syntax and data invariants can be tested statically. Browser rendering, actual in-game behavior and runtime links are separate checks.
