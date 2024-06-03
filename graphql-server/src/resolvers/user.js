const { v4: uuidv4 } = require('uuid');

module.exports = {
    Mutation: {
        createUser: async (_, { username, password }, { pool }) => {
            const client = await pool.connect();
            try {
                const id = uuidv4();
                const result = await client.query(
                    'INSERT INTO "User" (id, username, password) VALUES ($1, $2, $3) RETURNING *',
                    [id, username, password]
                );
                return result.rows[0];
            } catch (error) {
                console.error('Error inserting user:', error);
                throw error;
            } finally {
                client.release();
            }
        },
    },
    Query: {
        user: async (_, { username, password }, { pool }) => {
            const client = await pool.connect();
            try {
                const result = await client.query('SELECT * FROM "User" WHERE username = $1 and password = $2', [username, password]);
                return result.rows[0];
            } catch (error) {
                console.error('Error fetching user:', error);
                throw error;
            } finally {
                client.release();
            }
        },
        getUsers: async (_, __, { pool }) => {
            const client = await pool.connect();
            try {
                const result = await client.query('SELECT * FROM "User"');
                return result.rows;
            } catch (error) {
                console.error('Error fetching user:', error);
                throw error;
            } finally {
                client.release();
            }
        },
    },
};