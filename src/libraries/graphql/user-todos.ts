import { gql } from '@apollo/client';

export const orders = gql`
  query Orders {
    userTodos()
  }
`;
