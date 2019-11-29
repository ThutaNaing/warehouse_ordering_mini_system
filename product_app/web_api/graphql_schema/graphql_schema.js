const { buildSchema } = require('graphql');

const graphql_schema = buildSchema(`
    type Query {
        user: User
    }

    type User {
        id: ID
        name: String
    }
`);
module.exports = graphql_schema;