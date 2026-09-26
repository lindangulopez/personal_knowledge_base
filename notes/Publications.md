# Publications

**Summary**: Status tracker for planned outputs from the Rewilding Portugal / Côa Valley project — papers, StoryMap chapters, illustration plates, and blog posts — as a working list toward Linda's goal of eventually writing articles, publishing natural-history illustrations, and writing blog posts.
**Last updated**: 2026-09-26 (paper #1 posted as a Zenodo preprint)

---

## Draft papers

From `portfolio/paper-abstracts-draft.md` (updated 27 Aug 2026) — 16 candidate papers, each currently a draft abstract only (title/venue are suggestions, not commitments). Full descriptions live on the topic page listed.

| # | Working title | Suggested venue | Status | Topic page |
|---|---|---|---|---|
| 1 | A reproducible, pure-Python connectivity pipeline for a data-sparse rewilding landscape | *Methods in Ecology and Evolution* / *Conservation Science and Practice* | **Preprint posted (v0.1)** — see update below | [[Python]], [[Reproducible_Science]] |
| 2 | Legal geographies of ecological water rights: South Africa's Reserve vs. the Portugal/EU absence | *Environmental Politics* / *Journal of Environmental Law* | Draft abstract | [[Political_Ecology]] |
| 3 | When conservation follows dispossession, not the reverse: Portugal vs. South Africa | *Conservation and Society* / *Human Dimensions of Wildlife* | Draft abstract | [[Political_Ecology]] |
| 4 | From hunting-zone cadastre to safari economics: land-tenure feasibility | *Land Use Policy* / *Biological Conservation* | Draft abstract | [[Political_Ecology]], [[Data]] |
| 5 | The hydropower "safety valve" hypothesis for the 1996 Foz Côa cancellation | *Environmental History* / *Water History* | Draft abstract (research note/perspective piece) | [[Conservation]] |
| 6 | Siting-conditional renewable advocacy in practice: integrated infrastructure proposal | *Energy Policy* / *Ecological Economics* | Draft abstract | [[Climate_Change]], [[Urban_Planning]] |
| 7 | A multi-layer field-survey and heritage-protection geodatabase for the Greater Côa Valley | *Data in Brief* / *Scientific Data* | Draft abstract (data descriptor) | [[Data]] |
| 8 | Whose framework? Correcting epistemic attribution in "safe and just" | Environmental social-science / STS venue, or *Environmental Science & Policy* | Draft abstract | [[Safe_and_Just]] |
| 9 | Ocean currents as the physical infrastructure of empire | *Environmental History* / *Water History* | Draft abstract | [[Decolonial_Ecology]] |
| 10 | Colonial extraction, community resistance, and civil war: Brazil, Mozambique, Angola | *Journal of Political Ecology* / *World Development* | Draft abstract | [[Decolonial_Ecology]] |
| 11 | Remote work, AI, and the future conservation workforce | Conservation-careers / future-of-work venue, or *People and Nature* | Draft abstract | [[Conservation]] |
| 12 | Fire as a landscape-stability precondition: Fontainebleau vs. the Côa Valley | Companion to no. 1, or a fire-ecology venue | Draft abstract | [[Climate_Change]], [[Conservation]] |
| 13 | Zoning without acquisition: the Camargue's stacked-designation governance model | *Land Use Policy*, companion to no. 4 | Draft abstract | [[Political_Ecology]] |
| 14 | A criteria-based residential livability score and real-network visitor-access analysis | *Applied Geography* / *Data in Brief*, companion to nos. 1 and 7 | Draft abstract (data descriptor) | [[Data]], [[Urban_Planning]] |
| 15 | Connectivity-informed translocation siting: auditing Iberian translocations against the pipeline's own current-flow model | *Conservation Science and Practice* / *Animal Conservation* / *Biological Conservation*, companion to no. 1 | Draft abstract | [[Conservation]], [[Data]] |
| 16 | Rural depopulation as both opportunity and constraint for conservation translocations: Portugal-Spain-France | *People and Nature* / *Human Dimensions of Wildlife* / *Journal for Nature Conservation*, companion to nos. 3 and 14 | Draft abstract | [[Conservation]], [[Urban_Planning]] |

**Update, 26 Sept 2026 — paper #1 posted as a preprint.** *"Movement, Water, Connection: a reproducible Python connectivity workflow and field illustration for the Greater Côa Valley rewilding landscape, Portugal"* is now live on Zenodo as a v0.1 preprint (Linda Angulo Lopez, affiliation Rewilding Portugal; [DOI 10.5281/zenodo.22979020](https://doi.org/10.5281/zenodo.22979020), journal-article type, 1.1 MB `article.pdf`). Abstract highlights beyond what's already tracked elsewhere on this vault: ten focal species grouped by movement medium (land/water/air) per the Prima et al. 2024 multi-species framework; Random Forest suitability models on GBIF records converted to resistance surfaces on a 100 m grid over a 10,230 km² catchment-extended study area, solved with a `scipy.sparse` moving-window current-flow solver; three penalties layered on top of the base model — a recency-weighted MODIS fire penalty (2015-July 2025, 10.07% of grid cells burned at least once), a distance-decayed barrier penalty from 22 field-recorded barriers tiered by observed permeability, and a flat penalty over two UNESCO heritage areas; a direction-of-effect sanity check (land resistance 94.0 at fully-blocking barriers vs. 88.6 at easily-crossable ones; water 100.0 vs. 22.7); and an explicit validation caveat ("training accuracies 0.78 to 0.99 are not validation, and we say so"). The strongest combined corridor follows the lower Côa north to the Douro. The abstract's closing line frames the preprint and the [[Cartography|"Movement, Water, Connection" field-illustration gallery]] as two halves of one test: whether a connectivity model can be read, and challenged, by the people who live in the valley. Minor production notes: the DOI briefly 404'd before propagating; a same-day GitHub Actions run adding the preprint link to the `eco-connectivity-workflow` README failed (exit code 1, only unrelated Node.js/runner-image deprecation warnings shown — not yet re-run). Keywords: Zenodo preprint, connectivity model, resistance surfaces, Omniscape, fire penalty, GBIF, Random Forest. Related: [[Conservation]], [[Cartography]], [[Reproducible_Science]].

## StoryMap chapters (public, general-audience track)

From `storyMaps/5-ideas.md` / `scratch.md` — see [[Cartography]] for the full chapter-design notes. Deliberately kept separate from the papers above: same underlying fieldwork, told the other way round (site/species/narrative first, model output as a finished image, not working data).

| Chapter | Theme | Status |
|---|---|---|
| Three Centuries of a Frontier — Almeida | Opening frame | Substantially in hand (desk-heavy) |
| Water Without Borders — Paul de Toirões | Longitudinal/aquatic connectivity | Site visited, species table pending |
| Who Moves Through the Côa — Vale Carapito | Terrestrial connectivity | Site visited, needs most source-checking |
| If the Price Is Biodiversity, Don't Call It Green — Ribeira do Mosteiro | Threat/fragmentation case | Site visited (24-25 Aug reconnaissance) |
| Two Rivers, Two Stories — Porto/Douro comparison | Closing, political frame | Trip done; dam counts now verified — see [[Conservation]] |

## Natural history illustration plates

Per the project's own deliverables tracking (`Post-Development-Plan.md`, `Daily_Observation_Practice.md` — see [[Conservation]]): a triptych of landscape plates, one per StoryMap theme above (Movement/Vale Carapito, Water/Paul de Toirões, Connection/Ribeira do Mosteiro), plus 9-12 supporting organism/habitat sketches. Target: field-residency foundation complete by end of August 2026, with studio refinement continuing afterward — status of individual plates not yet tracked at this granularity in the source repo.

## Blog posts

Not yet drafted anywhere in the source repo — no working titles or topics captured yet. Worth returning to this section once Linda has specific post ideas to track; the papers and StoryMap chapters above are natural source material to pull from.
