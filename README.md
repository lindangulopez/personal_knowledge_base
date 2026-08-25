# Personal knowledge base

My notes on geospatial data science and environmental governance, organised and cross-linked by Claude Code. Published as a MkDocs site at [lindangulopez.github.io/personal_knowledge_base](https://lindangulopez.github.io/personal_knowledge_base/).

Topics span (i) technical notes on remote sensing, machine learning, embeddings, and reproducible science, and (ii) thematic notes on conservation, climate change, agriculture, and political ecology. Every note is a single bullet point with keywords and wiki-links to related pages, kept close to the original source rather than summarised into something new.

## Structure

- `raw/` — unprocessed notes and bookmarks waiting to be ingested
- `processed/` — source clippings once ingested (gitignored, not published)
- `notes/` — the published topic pages, plus `index.md` (table of contents) and `log.md` (append-only change history)

## Workflow

I drop a link or a note into `raw/`, then ask Claude Code to ingest it. It reads the source, files it under the right topic page, backlinks it to related pages, and updates the index and changelog. `CLAUDE.md` has the full processing instructions.

## Site

The MkDocs site rebuilds and redeploys automatically via GitHub Actions on every push to `main`. To build locally:

```
pip install -r requirements.txt
mkdocs serve
```
