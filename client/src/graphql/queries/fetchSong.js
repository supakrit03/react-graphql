import { gql } from "@apollo/client";

export const FETCH_SONG = gql`
  query SongQuery($id: String!) {
    song(id: $id) {
      id
      name
      lyrics {
        id
        text
      }
    }
  }
`;
