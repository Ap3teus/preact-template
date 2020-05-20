-- Revert preact-template:foo from pg

BEGIN;

DROP TABLE foo;

COMMIT;
