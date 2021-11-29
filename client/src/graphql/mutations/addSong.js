import { gql } from "@apollo/client";

export const ADD_SONG = gql`
  mutation AddSong($name: String!) {
    addSong(name: $name) {
      id
    }
  }
`;
