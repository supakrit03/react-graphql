import { gql } from "@apollo/client";

export const DELETE_SONG = gql`
  mutation DeleteSong($id: String!) {
    deleteSong(id: $id) {
      id
    }
  }
`;
