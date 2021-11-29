const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
} = require("graphql");

const Song = require("./song");
const Lyric = require("./lyric");

const SongModel = require("../models/song");
const LyricModel = require("../models/lyric");

const RootQueryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    songs: {
      type: new GraphQLList(Song),
      resolve(parentValue, args) {
        return SongModel.findAll({ raw: true });
      },
    },
    song: {
      type: Song,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        const { id } = args;
        return SongModel.findOne({ raw: true, where: { id: id } });
      },
    },
  },
});

const RootMutations = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addSong: {
      type: Song,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parentValue, args) {
        const { name } = args;

        return SongModel.create({
          name,
        });
      },
    },
    addLyricToSong: {
      type: Lyric,
      args: {
        songId: { type: new GraphQLNonNull(GraphQLString) },
        lyricText: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parentValue, args) {
        const { songId, lyricText } = args;

        return LyricModel.create({
          song_id: songId,
          text: lyricText,
        });
      },
    },
    deleteSong: {
      type: Song,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parentValue, args) {
        const { id } = args;
        return SongModel.destroy({ where: { id } });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutations,
});
