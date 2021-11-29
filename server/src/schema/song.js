const { GraphQLObjectType, GraphQLString, GraphQLList } = require("graphql");
const Lyric = require("./lyric");

const LyricModel = require("../models/lyric");

module.exports = new GraphQLObjectType({
  name: "Song",
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    lyrics: {
      type: new GraphQLList(Lyric),
      resolve(parentValue, args) {
        const { id } = parentValue;

        return LyricModel.findAll({ raw: true, where: { song_id: id } });
      },
    },
  },
});
