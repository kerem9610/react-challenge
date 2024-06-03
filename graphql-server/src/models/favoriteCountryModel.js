const getFavoriteCountries = async () => {
    try {
        const result = await db.query('SELECT * FROM FavoriteCountry');
        return result.rows;
    } catch (error) {
        console.error('Error fetching favorite countries:', error);
        throw error;
    }
};

const createFavoriteCountry = async (user_id, country_id, notes) => {
    try {
        const id = uuidv4();
        const result = await db.query(
            'INSERT INTO FavoriteCountry (id, user_id, country_id, notes) VALUES ($1, $2, $3, $4) RETURNING *',
            [id, user_id, country_id, notes]
        );
        return result.rows[0];
    } catch (error) {
        console.error('Error creating favorite country:', error);
        throw error;
    }
};

module.exports = {
    getFavoriteCountries,
    createFavoriteCountry,
};