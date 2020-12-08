import { gql } from 'graphql-request';

const GET_POSTS = gql`
  query Posts {
    posts {
      edges {
        node {
          id
          title
          body
          createdOn
          author {
            fullName
          }
        }
      }
    }
  }
`;

export { GET_POSTS };
