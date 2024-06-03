require('dotenv').config();
const { Pool } = require('pg');

// Create a PostgreSQL connection pool
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

const initializeDatabase = async () => {
    const client = await pool.connect();
    try {
        // Perform database initialization tasks, such as creating tables
        await client.query(`
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
      `);
        console.log('initialised DB');
    } catch (error) {
        console.error('Error initializing database:', error);
        throw error;
    } finally {
        client.release();
    }
};

module.exports = {
    pool,
    initializeDatabase,
};