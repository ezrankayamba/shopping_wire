import { ApolloClient, InMemoryCache } from '@apollo/client';

const api = new ApolloClient({
    uri: 'http://localhost:8000/graphql',
    cache: new InMemoryCache()
});

export default api