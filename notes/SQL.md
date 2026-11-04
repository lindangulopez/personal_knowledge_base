# SQL

**Summary**: Database systems and SQL notes.
**Last updated**: 2026-11-04 (rBDD webinar on TimescaleDB, 12 Nov); 2026-09-29 (RocksDB)

---

- *rBDD webinar: TimescaleDB* (Annick Battais for the rBDD network's organising team, email to the rbdd and sist lists, 3 Nov 2026; no event page found on [rbdd.cnrs.fr](https://rbdd.cnrs.fr/) on 4 Nov): "Le réseau rBDD vous invite à découvrir TimescaleDB lors d'un webinaire organisé le jeudi 12 novembre 2026 à 10:00 ! Une Extension de PostgreSQL spécialisée dans la gestion des séries temporelles, TimescaleDB propose des fonctionnalités avancées de partitionnement, de compression et d'analyse des données, particulièrement intéressantes pour les applications scientifiques, l'instrumentation et la supervision." Programme: 20 min overview of TimescaleDB and its main features, 25 min on a real deployment (setup, uses, lessons learned), 15 min of questions. **Thu 12 Nov 2026, 10:00-11:00**, by video call; the link is sent at the start of that week. rBDD is the CNRS network for people working on databases, run by MITI's networks platform. Keywords: TimescaleDB, PostgreSQL, time series, rBDD, CNRS, webinar. Related: [[Data]], [[Reproducible_Science]].

- [PostgreSQL](https://www.postgresql.org/): Homepage for PostgreSQL, described as "the world's most advanced open source relational database," with over 35 years of active development. Keywords: PostgreSQL, relational database, open source. Related: [[Data]], [[Python]].

- [RocksDB: Getting Started](https://rocksdb.org/docs/getting-started.html) (captured 29 Sept 2026): A persistent embedded key-value store (arbitrary byte-array keys/values, user-specified ordering comparator), maintained by the Facebook Database Engineering Team and based on Google's LevelDB. Not a SQL database — a lower-level storage engine, C++ API, opened as a named directory with `Put`/`Get`/`Delete` operations and a `Status` result type for error handling. Widely used as the storage layer underneath other databases. Keywords: RocksDB, key-value store, LevelDB, embedded database, storage engine. Related: [[Data]].
