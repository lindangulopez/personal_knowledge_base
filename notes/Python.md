# Python

**Summary**: Python packages, libraries, and code notes.
**Last updated**: 2026-09-30 (CPython time-complexity reference)

---

- [Time complexity of operations on built-in types](https://docs.python.org/3/builtins/time-complexity.html) (Python 3 documentation): The official CPython Big-O reference for `list`, `tuple`, `dict`, `set`/`frozenset`, `str`/`bytes`/`bytearray`, `memoryview`, and `range`. Key points: list append/index/length are *O*(1) but insert/delete near the front are *O*(n) since everything after must shift (use `collections.deque` for both-end queues); dict/set operations are *O*(1) average-case (assuming well-distributed hashes) but degrade to *O*(n) worst-case under hash collisions; `bytearray` supports amortized *O*(1) front-deletion by advancing the buffer start rather than moving bytes; `range` objects compute items on demand so most operations (including slicing) are *O*(1) regardless of range length. Keywords: Python, Big O notation, time complexity, CPython, data structures, algorithmic complexity.
- [QGIS Graphical Modeler](https://docs.qgis.org/3.40/en/docs/user_manual/processing/modeler.html): QGIS documentation for the Processing Graphical Modeler, which lets users chain processing algorithms into repeatable, shareable geoprocessing workflows without scripting. Keywords: QGIS, processing modeler, geoprocessing, workflow automation. Related: [[Professional_Background]].
- *geopandas_kids_interactive.ipynb*: A teaching notebook introducing geopandas-based geospatial analysis in an interactive, kid-friendly format. Keywords: geopandas, teaching notebook, geospatial Python, education.
- *Tutorial: Earth Observation Map for Kids (Trinidad & Tobago edition)*: A teaching notebook adapting an Earth-observation mapping tutorial to a Trinidad & Tobago case study, aimed at introducing EO/geospatial concepts to young learners. Keywords: Earth observation, teaching notebook, Trinidad and Tobago, education. Related: [[Remote_Sensing]].
- See [[Agentic_Coding]] for Linda's "Agentic Coding for Geospatial" certification (Spatial Thoughts, Aug 2026) on planning/building/validating geospatial data science workflows using Claude Code.
- See [[Conservation]] for the Côa Valley Eco-Connectivity notebook's pure-Python (scipy.sparse) circuit-theory pipeline, built to avoid a Julia/Circuitscape runtime dependency.
- See [[Reproducible_Science]] for the reproducibility framing behind that same pipeline choice.
- See [[Agriculture]] for the Agribound package for field boundary delineation.
- See [[Machine_Learning]] for the Text-as-Data with Python seminar (Jihye Park, Instats, Sept 2026), applying Python text-cleaning/record-linkage/topic-modelling methods to ecological and environmental documents.
