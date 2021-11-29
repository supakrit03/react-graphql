const { GraphQLObjectType, GraphQLString } = require("graphql");

module.exports = new GraphQLObjectType({
  name: "Lyric",
  fields: {
    id: { type: GraphQLString },
    text: { type: GraphQLString },
  },
});
