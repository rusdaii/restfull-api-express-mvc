ALTER TABLE movies
ADD COLUMN "createdAt" TIMESTAMP,
ADD COLUMN "updatedAt" TIMESTAMP;

ALTER TABLE users
ADD COLUMN "createdAt" TIMESTAMP,
ADD COLUMN "updatedAt" TIMESTAMP;

ALTER TABLE movies
ALTER COLUMN photo TYPE VARCHAR(255);

ALTER TABLE users
ALTER COLUMN password
TYPE varchar(255)