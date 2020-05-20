-- Verify preact-template:foo on pg

BEGIN;

SELECT * FROM foo;

ROLLBACK;
