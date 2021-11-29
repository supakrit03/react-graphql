import { gql } from "@apollo/client";

export const ADD_LYRIC_TO_SONG = gql`
  mutation AddLyricToSong($songId: String!, $lyricText: String!) {
    addLyricToSong(songId: $songId, lyricText: $lyricText) {
      id
    }
  }
`;

// songId: { type: new GraphQLNonNull(GraphQLString) },
// lyricText: {
