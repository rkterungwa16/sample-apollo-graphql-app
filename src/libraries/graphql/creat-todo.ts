import { gql } from '@apollo/client';

export const CREATE_TODO = gql`
  mutation CreateTodo($content: String!) {
    createTodo(content: $content) {
      content
      user
      status
      createdAt
      updatedAt
    }
  }
`;
