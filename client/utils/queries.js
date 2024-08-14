import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  {
    user {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;