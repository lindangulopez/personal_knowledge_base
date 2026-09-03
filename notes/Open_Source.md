# Open Source

**Summary**: Open-source project contribution workflows, governance, and community tooling.
**Last updated**: 2026-09-03

---

- [Fixed #99999 -- Added a shortcut function to make toast. (PR #21880)](https://github.com/django/django/pull/21880): Linda's first practice contribution to Django, working through the project's classic tutorial exercise (adding a trivial `make_toast()` shortcut function, docs, and a test) to learn the real contribution pipeline end to end. The `github-actions` bot auto-closed the PR for failing Django's submission checklist — missing Trac ticket link, missing PR description, an undisclosed-AI-tool-usage error, and an incomplete checklist — leaving unmerged commits on the `ticket_99999` branch. Notable for Django's explicit "AI Assistance Disclosure (REQUIRED)" checkbox, which requires contributors to state whether AI tools were used and confirm they reviewed/verified the output — a concrete, enforced instance of the AI-disclosure practices already tracked in [[Reproducible_Science]] and the disclosure workflow Linda uses on her own Côa project, per [[Agentic_Coding]]. Keywords: Django, open source contribution, first patch, Trac, CI bot, AI disclosure, PR checklist. Related: [[Reproducible_Science]], [[Agentic_Coding]].
