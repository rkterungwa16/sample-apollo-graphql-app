import { gql, useMutation } from '@apollo/client';
import { useEffect } from 'react';

export const Root = () => {
  const [getToken, { data }] = useMutation(gql`
    mutation Token {
      token(email: "test@skand.io", password: "testtest")
    }
  `);

  useEffect(() => {
    getToken();
  }, [getToken]);

  return <>{data?.token}</>;
};
