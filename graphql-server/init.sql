CREATE TABLE IF NOT EXISTS "User" (
            id UUID PRIMARY KEY,
            username VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
        );

CREATE TABLE IF NOT EXISTS "FavoriteCountry" (
    id UUID PRIMARY KEY,
    userId UUID REFERENCES "User" (id),
    countryId VARCHAR(255),
    notes TEXT
);