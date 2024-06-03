const { ApolloServer, gql } = require('apollo-server');
const resolvers = require('./resolvers');
const fs = require('fs');
const path = require('path');
const { initializeDatabase, pool } = require('./db');

const schemaPath = path.join(__dirname, 'schema/schema.graphql');
const schema = fs.readFileSync(schemaPath, 'utf8');

const server = new ApolloServer({
    typeDefs: gql(schema),
    resolvers,
    context: ({ req }) => {
        const userId = req.headers.userid;
        return { userId, pool };
    },
});

// Initialize the database and start the server
initializeDatabase().then(() => {
    console.log('start server');
    server.listen().then(({ url }) => {
        console.log(`🚀 Server ready at ${url}`);
    });
});

module.exports = server;