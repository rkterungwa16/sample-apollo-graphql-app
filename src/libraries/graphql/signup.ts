import { gql } from '@apollo/client';

export const SIGNUP_USER = gql`
  mutation SignUp($email: String!, $password: String!) {
    createUser(email: $email, password: $password)
  }
`;
