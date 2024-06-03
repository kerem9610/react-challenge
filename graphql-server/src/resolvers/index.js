const userResolver = require('./user');
const favoriteCountryResolver = require('./favoriteCountry');

module.exports = {
    Query: {
        ...userResolver.Query,
        ...favoriteCountryResolver.Query,
    },
    Mutation: {
        ...userResolver.Mutation,
        ...favoriteCountryResolver.Mutation,
    },
};