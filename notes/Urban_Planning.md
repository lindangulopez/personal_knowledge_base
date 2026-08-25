# Urban Planning

**Summary**: Cities, urban form, and the environmental and social dynamics that shape them.
**Last updated**: 2026-08-25 (linked to Conservation/Data naturalist-livability study)

---

- See [[Conservation]] and [[Data]] for the eco-connectivity notebook's v6 naturalist-livability score — 251 apartment buildings across Guarda, Pinhel, and Vila Nova de Foz Côa weighted for nature access, amenities, parking, and transit — a rare case in this project of scoring the *human* settlement side of a rewilding landscape rather than the ecological one.
- *An Integrated Infrastructure Proposal for the Côa Valley* (`field-trips/deskStudy/integrated-infrastructure-proposal-coa-valley.md`): Answers [[Climate_Change|the SOPHIA-siting question]] with a concrete two-part proposal, applying Rewilding Portugal's own "build on what's already disturbed" principle to both energy and tourism infrastructure. Part 1: elevated agrivoltaic-style solar canopies over reserves' own already-graded access tracks (Vale Carapito, Ermo das Águias, Faia Brava candidates), the same structural technique already proven over cropland, sited to add zero new habitat footprint. Part 2: a Timbavati-style photographic-tourism conservation levy funding small boutique lodges (6-12 rooms) at the project's own connectivity data's *low*-connectivity sites (explicitly not the high-connectivity Penascosa/Rapoula/Lageosa sites the same data flags as ecologically valuable, per `tourism_sites.gpkg`'s `not_yet_visited`/`potential_ecotourism_sites` layers — see [[Data]]), scaled honestly down ~2 orders of magnitude from Timbavati's South African scale, and excludes trophy hunting from the model. Illustrative order-of-magnitude economics only, not a feasibility study. Keywords: agrivoltaics, solar canopy, conservation levy, ecotourism lodges, infrastructure siting, Timbavati model. Related: [[Climate_Change]], [[Conservation]], [[Data]].
- [LinkedIn post: "Please stop" using satellite LST as an urban heat hazard proxy](https://www.linkedin.com/feed/update/urn:li:activity:7478690057026207745/) — Tirthankar "TC" Chakraborty: Argues that satellite-derived land surface temperature (LST) maps, widely shared during heatwaves, are routinely mistaken for air temperature. LST is the radiometric "skin" temperature of whatever the satellite sees (rooftops, asphalt, tree canopy tops), which runs far hotter than the air people actually feel; using it also overstates how much trees cool the air (versus the ground beneath them) and has led to overestimated heat hazard and income-based heat disparities in prior studies. Calls for using LST only in clearly qualified, qualitative ways rather than as a direct stand-in for air temperature or heat hazard.

  Post text (verbatim):
  > The northern hemisphere #summer is underway, & with it, expectedly, we have a new crop of record-breaking temperatures & #heatwaves in various parts of the world (#climatechange et al.)
  >
  > And with discussions of #extremeheat come, every single year, maps of #satellite-derived #landsurfacetemperature (LST). These maps show massive #temperature values compared to the #airtemperature used in #weather reports. LST maps also show extreme differences across regions & land cover types, especially within cities. And social media is filled with these "55°C in Madrid; 27°C in a nearby forest" type posts; not just from random engagement farmers, but also from so-called authoritative sources.
  >
  > The problem is that LST values are almost never equivalent to the temperature of the air around us. LST represents the bulk radiometric "skin" temperature of whatever a satellite sees, which, in #urban settings, includes an amalgamation of rooftops, tops of tree canopies, asphalt roads, parking lots, etc. As surfaces absorb solar radiation throughout the daytime, they get much warmer than the air above them. But unless you're walking barefoot on that surface, that's not the magnitude of heat you feel. We interact with the air around us, which is almost always much cooler than most surfaces during daytime. And while LST (rather, skin temperature) does modulate emitted thermal radiation from the ground, remember that there is a huge difference in heat when touching a heated pan versus hovering your hand near it.
  >
  > Using LST also overstates the benefits of #trees on air temperature. Trees provide critical shade, which drastically lowers the LST of the ground right underneath them. But when it comes to reducing air temperature during the day, that reduction is an order of magnitude smaller (& shading benefits are hyper-local + these posts rarely focus on heat metrics that explicitly account for radiation). Furthermore, when we use satellites to estimate cooling efficiency of trees, we don't even see the ground underneath the tree. We are basically comparing the LST of tops of tree canopies, which are actively transpiring, against heated #asphalt roads & #parkinglots.
  >
  > Many of these posts add disclaimers like "this is surface temperature, not air temperature, but..." & then continue talking about those massive numbers, creating an anchoring effect. It shocks people into overestimating the heat hazard. More importantly, when people's lived experience of outdoor conditions doesn't match what they assume 50°C might feel like, it reduces trust in the data & the science, which is an ongoing concern in this area.
  >
  > This is not a new issue. It's been happening for years as satellite data have become easier to access & visualize, not just in public-facing media, but also in scientific papers.
  >
  > Basically, using LST to quantify #heat hazard is actively misleading those who are not scientifically trained to understand the nuances in that variable.
  >
  > Please stop.

  Sources cited by the author in replies:
  - On differences between urban heat signals (#urbanheatislands) for air temperature and LST: https://doi.org/10.1126/sciadv.abb9569
  - On mismatches between urban humid heat metrics and common LST-based patterns across scales: https://doi.org/10.1029/2022AV000729
  - On discrepancies in cooling efficiency of urban tree cover for LST versus air temperature: https://doi.org/10.1088/1748-9326/ad30a3
  - On overestimation of income-based #urbanheat disparities when using LST: https://doi.org/10.1016/j.oneear.2023.05.016
  - Comprehensive critique of using LST as a proxy for urban heat hazard: https://doi.org/10.48550/arXiv.2509.16568

  Notable reply thread: Tirthankar "TC" Chakraborty clarified that the target isn't the underlying research using LST as a proxy, but the practice of sharing raw LST values on social media without transparent caveats about their limitations — he'd rather see better data-limitation disclosure than a halt to the research itself. Justine Kojo added that sparse urban weather-station coverage is a deliberate design choice (to avoid contaminating broader climate signals, not unique to any one region), and that LST/air-temperature agreement seen in broad, cross-city aggregates doesn't necessarily hold for any single city, which matters for city-level policy use.

  Keywords: land surface temperature, LST, urban heat island, air temperature, remote sensing, urban trees, heat hazard, climate change. Related: [[Remote_Sensing]], [[Climate_Change]].
