-- Verify preact-template:uuid on pg

BEGIN;

SELECT uuid_generate_v4();

ROLLBACK;
