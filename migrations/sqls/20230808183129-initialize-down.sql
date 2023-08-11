ALTER TABLE movies
DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

ALTER TABLE users
DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

ALTER TABLE movies
ALTER COLUMN photo TYPE VARCHAR(50);

ALTER TABLE users
ALTER COLUMN password
TYPE varchar(50)