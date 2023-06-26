import { gql } from '@apollo/client';

export const SEARCH = gql`
  query Search($term: String!) {
    userTodos(term: $term) {
      id
      content
      status
      createdAt
      updatedAt
    }
  }
`;
