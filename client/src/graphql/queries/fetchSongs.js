import { gql } from "@apollo/client";

export default gql`
  {
    songs {
      id
      name
      lyrics {
        id
        text
      }
    }
  }
`;
