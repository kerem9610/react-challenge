const db = require('../db');
const { v4: uuidv4 } = require('uuid');

module.exports = {
    Query: {
        getAllFavoriteCountries: async (_, __, { pool }) => {
            try {
                const client = await pool.connect();
                const result = await client.query('SELECT * FROM FavoriteCountry');
                client.release();
                return result.rows;
            } catch (error) {
                console.error('Error executing query:', error);
                throw error;
            }
        },
        favoriteCountries: async (_, __, { userId, pool }) => {
            try {
                const client = await pool.connect();
                const result = await client.query('SELECT * FROM "FavoriteCountry" WHERE userId = $1', [userId]);

                client.release();

                const favoriteCountries = result.rows.map(row => ({
                    ...row,
                    countryId: row.countryid || '' // Provide a default value if countryId is null
                }));

                return favoriteCountries;
            } catch (error) {
                console.error('Error executing query:', error);
                throw error;
            }
        },
    },
    Mutation: {
        toggleFavoriteCountry: async (_, { countryId, notes }, { pool, userId }) => {
            const client = await pool.connect();

            try {
                const selectQuery = 'SELECT id FROM "FavoriteCountry" WHERE userId = $1 AND countryId = $2';
                const { rows } = await client.query(selectQuery, [userId, countryId]);
                const favoriteCountryExists = rows.length > 0;

                if (favoriteCountryExists) {
                    await client.query('DELETE FROM "FavoriteCountry" WHERE userId = $1 AND countryId = $2', [userId, countryId]);

                    return
                } else {
                    const id = uuidv4();
                    const insertText = 'INSERT INTO "FavoriteCountry" (id, userId, countryId, notes) VALUES ($1, $2, $3, $4) RETURNING *';
                    const result = await client.query(insertText, [id, userId, countryId, notes]);
                    return result.rows[0];
                }
            } catch (error) {
                // Rollback the transaction on error
                await client.query('ROLLBACK');
                console.error('Error toggling favorite country:', error);
                throw error;
            } finally {
                client.release();
            }
        },
    },
};