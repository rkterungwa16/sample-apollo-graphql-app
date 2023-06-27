import { gql } from '@apollo/client';

export const FETCH_USER_TODOS = gql`
  query FetchUserTodos {
    userTodos {
      id
      content
      status
      createdAt
      updatedAt
    }
  }
`;

export const CREATE_TODO = gql`
  mutation CreateTodo($content: String!) {
    createTodo(content: $content) {
      id
      content
      user {
        email
      }
      status
      createdAt
      updatedAt
    }
  }
`;
