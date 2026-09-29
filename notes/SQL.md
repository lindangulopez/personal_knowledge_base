# SQL

**Summary**: Database systems and SQL notes.
**Last updated**: 2026-09-29 (RocksDB)

---

- [PostgreSQL](https://www.postgresql.org/): Homepage for PostgreSQL, described as "the world's most advanced open source relational database," with over 35 years of active development. Keywords: PostgreSQL, relational database, open source. Related: [[Data]], [[Python]].

- [RocksDB: Getting Started](https://rocksdb.org/docs/getting-started.html) (captured 29 Sept 2026): A persistent embedded key-value store (arbitrary byte-array keys/values, user-specified ordering comparator), maintained by the Facebook Database Engineering Team and based on Google's LevelDB. Not a SQL database — a lower-level storage engine, C++ API, opened as a named directory with `Put`/`Get`/`Delete` operations and a `Status` result type for error handling. Widely used as the storage layer underneath other databases. Keywords: RocksDB, key-value store, LevelDB, embedded database, storage engine. Related: [[Data]].
