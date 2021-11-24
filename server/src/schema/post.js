const { GraphQLObjectType, GraphQLString, GraphQLInt } = require("graphql");

module.exports = new GraphQLObjectType({
  name: "Post",
  fields: {
    id: { type: GraphQLString },
    userId: { type: GraphQLString },
    title: { type: GraphQLString },
    body: { type: GraphQLString },
  },
});
