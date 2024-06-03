import { ApolloClient, InMemoryCache } from "@apollo/client";

export const externalCountryClient = new ApolloClient({
    uri: 'https://countries.trevorblades.com',
    cache: new InMemoryCache()
});

export const internalClient = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache()
});