# Publications

**Summary**: Linda's published outputs on Zenodo, and a status tracker for planned outputs from the Rewilding Portugal / Côa Valley project (StoryMap chapters, illustration plates, blog posts), toward her goal of writing articles, publishing natural-history illustrations and writing blog posts.
**Last updated**: 2026-11-07 (Draft papers table dropped; new Zenodo records section, records checked on the Zenodo API; SER 2027 poster now at v0.2); 2026-10-25 (new Conference presentations section: SER 2027 poster deposited, abstracts open 3 Dec 2026); 2026-09-27 (companion synthesis posted as a second Zenodo preprint); 2026-09-26 (paper #1 posted as a Zenodo preprint)

---

## Zenodo records

Every record listing Linda Angulo Lopez as an author (seven deposits, the SER 2027 poster in two versions), checked on the Zenodo API on 7 Nov 2026, newest first. All are CC BY 4.0. Where a record has versions, the "all versions" DOI always resolves to the latest.

| Date | Type | Title | Authors | DOI |
|---|---|---|---|---|
| 6 Nov 2026 | Poster (v0.2) | *Rabbits and wildcats in the Greater Côa Valley: an open connectivity screen for trophic rewilding in northern Portugal*, SER 2027, Lands in Motion | Linda Angulo Lopez, Russell Vance | [10.5281/zenodo.24013744](https://doi.org/10.5281/zenodo.24013744) (all versions: [10.5281/zenodo.23638437](https://doi.org/10.5281/zenodo.23638437)) |
| 25 Oct 2026 | Poster (v0.1) | *Rabbits, wildcats, pond turtles and a free-flowing river: one open connectivity screen for trophic and hydrological rewilding in the Greater Côa Valley, Portugal* | Linda Angulo Lopez | [10.5281/zenodo.23638438](https://doi.org/10.5281/zenodo.23638438) |
| 27 Sept 2026 | Preprint | *Rabbits, wildcats, pond turtles and a river that stayed: a synthesis and research agenda for trophic and hydrological rewilding in the Greater Côa Valley, Portugal* | Linda Angulo Lopez | [10.5281/zenodo.22997241](https://doi.org/10.5281/zenodo.22997241) |
| 26 Sept 2026 | Preprint (v0.1) | *Movement, Water, Connection: a reproducible Python connectivity workflow and field illustration for the Greater Côa Valley rewilding landscape, Portugal* | Linda Angulo Lopez | [10.5281/zenodo.22979020](https://doi.org/10.5281/zenodo.22979020) |
| 18 Sept 2026 | Presentation | *Citer et préserver des codes et logiciels avec SWHID et CodeMeta*, CNRS SIST webinar, 15 Oct 2026 | Linda Angulo Lopez | [10.5281/zenodo.22831096](https://doi.org/10.5281/zenodo.22831096) |
| 17 Sept 2026 | Presentation | *Preserving the Code Behind Bioinformatics*, ECCB 2026 / ELIXIR-W01 | Linda Angulo Lopez | [10.5281/zenodo.22815141](https://doi.org/10.5281/zenodo.22815141) |
| 4 Sept 2026 | Presentation | *Making Research Software FAIR with CodeMeta [Part I]*, RSECon26, Sheffield | Esteban Gonzalez, Linda Angulo Lopez, Anas El Hounsri, Aida Jafarbigloo, Daniel Garijo | [10.5281/zenodo.22298094](https://doi.org/10.5281/zenodo.22298094) |
| 25 Mar 2026 | Report | *OSPO-RADAR Metadata Workshop: Summary Report* | Emilie Nguyen Van Yen, Morane Gruenpeter, Renaud Boyer, Linda Angulo Lopez | [10.5281/zenodo.19219619](https://doi.org/10.5281/zenodo.19219619) |

The two posters are versions of one deposit. The Côa Valley outputs are described below and on [[Conservation]]; the Software Heritage talks on [[Reproducible_Science]] and [[Professional_Background]]. Keywords: Zenodo, DOI, preprints, posters, presentations, CodeMeta.

## Preprints in detail

**26 Sept 2026, the connectivity workflow preprint.** *"Movement, Water, Connection: a reproducible Python connectivity workflow and field illustration for the Greater Côa Valley rewilding landscape, Portugal"* is now live on Zenodo as a v0.1 preprint (Linda Angulo Lopez, affiliation Rewilding Portugal; [DOI 10.5281/zenodo.22979020](https://doi.org/10.5281/zenodo.22979020), journal-article type, 1.1 MB `article.pdf`). Abstract highlights beyond what's already tracked elsewhere on this vault: ten focal species grouped by movement medium (land/water/air) per the Prima et al. 2024 multi-species framework; Random Forest suitability models on GBIF records converted to resistance surfaces on a 100 m grid over a 10,230 km² catchment-extended study area, solved with a `scipy.sparse` moving-window current-flow solver; three penalties layered on top of the base model — a recency-weighted MODIS fire penalty (2015-July 2025, 10.07% of grid cells burned at least once), a distance-decayed barrier penalty from 22 field-recorded barriers tiered by observed permeability, and a flat penalty over two UNESCO heritage areas; a direction-of-effect sanity check (land resistance 94.0 at fully-blocking barriers vs. 88.6 at easily-crossable ones; water 100.0 vs. 22.7); and an explicit validation caveat ("training accuracies 0.78 to 0.99 are not validation, and we say so"). The strongest combined corridor follows the lower Côa north to the Douro. The abstract's closing line frames the preprint and the [[Cartography|"Movement, Water, Connection" field-illustration gallery]] as two halves of one test: whether a connectivity model can be read, and challenged, by the people who live in the valley. Minor production notes: the DOI briefly 404'd before propagating; a same-day GitHub Actions run adding the preprint link to the `eco-connectivity-workflow` README failed (exit code 1, only unrelated Node.js/runner-image deprecation warnings shown — not yet re-run). Keywords: Zenodo preprint, connectivity model, resistance surfaces, Omniscape, fire penalty, GBIF, Random Forest. Related: [[Conservation]], [[Cartography]], [[Reproducible_Science]].

**27 Sept 2026, the companion synthesis.** [*Rabbits, wildcats, pond turtles and a river that stayed: a synthesis and research agenda for trophic and hydrological rewilding in the Greater Côa Valley, Portugal*](https://zenodo.org/records/22997241): Linda Angulo Lopez, Zenodo preprint, 27 Sept 2026, CC BY 4.0, [DOI 10.5281/zenodo.22997241](https://doi.org/10.5281/zenodo.22997241). A literature synthesis (about 45 references) built around three linked species: the European rabbit as keystone prey, the European wildcat that depends on it, and the Mediterranean pond turtle as the river-side animal that needs summer pools. It joins predator and mesopredator cascades, the rabbit's "conservation paradox" and rewilding's effects on the water cycle into one chain of links for the valley, and sets out seven testable hypotheses, each tied to a step in the connectivity workflow preprint. It opens from South Africa's National Water Act of 1998 and its ecological Reserve, as a catchment view and a move towards earth law. Section 8 is an illustration method, drawing the three animals in the fine-line style of the Côa's Iron Age engravings; the plates are for the [[Cartography|"Movement, Water, Connection" gallery]] during Global Artivism Month. Source files: [`research/rewilding-dynamics`](https://github.com/coa-connectivity-lab/Solo-field-illustrator-project-for-Rewilding-Portugal/tree/main/research/rewilding-dynamics). Keywords: Zenodo preprint, trophic rewilding, European rabbit, European wildcat, Mediterranean pond turtle, Iron Age engravings. Related: [[Conservation]], [[Safe_and_Just]].

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

## Conference presentations

- **SER 2027, 12th World Conference on Ecological Restoration** (Lisbon, 30 Aug to 3 Sep 2027). Poster deposited: v0.1 on 25 Oct ([doi:10.5281/zenodo.23638438](https://doi.org/10.5281/zenodo.23638438)), **v0.2 on 6 Nov 2026** with Russell Vance as co-author, retitled *Rabbits and wildcats in the Greater Côa Valley* ([doi:10.5281/zenodo.24013744](https://doi.org/10.5281/zenodo.24013744); all versions [10.5281/zenodo.23638437](https://doi.org/10.5281/zenodo.23638437)), source in [coa-connectivity-lab/ser2027](https://github.com/coa-connectivity-lab/ser2027). The proposals call (symposia and training courses) closed in October 2026; the route for a poster is the **Call for Abstracts, which opens 3 December 2026** on the [same page](https://ser2027.org/call-for-proposals/), for oral presentations, lightning talks and posters. Target series: **Lands in Motion**. All presentations are in person in Lisbon, with no virtual option. Full thematic-series detail and the committee's evaluation criteria are on [[Conservation]].

## Blog posts

Not yet drafted anywhere in the source repo — no working titles or topics captured yet. Worth returning to this section once Linda has specific post ideas to track; the preprints and StoryMap chapters above are natural source material to pull from.
