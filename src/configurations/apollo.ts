import {ApolloServer} from "@apollo/server";

const apollo = new ApolloServer({
    typeDefs: `
        type Query {
            get: String!
        }
    `,
    resolvers: {
        Query: {
            get: () => 'apollo is running'
        }
    }
});

await apollo.start();

export default apollo;