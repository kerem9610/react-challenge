const db = require('../db');

const createUser = async (username) => {
    try {
        const id = uuidv4();
        const result = await db.query('INSERT INTO "User" (id, username) VALUES ($1, $2) RETURNING *', [id, username]);
        return result.rows[0];
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};

module.exports = {
    createUser,
};