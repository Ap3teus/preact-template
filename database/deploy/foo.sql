-- Deploy preact-template:foo to pg

BEGIN;

CREATE TABLE foo (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  text TEXT,
  PRIMARY KEY (id)
);

COMMIT;
