import { useMutation } from '@apollo/client';
import { useEffect } from 'react';
import { LOGIN_USER } from './libraries/graphql/login';
import { LoginForm } from './libraries/components/login/Login';

export const Root = () => {
  // email: "test@skand.io", password: "testtest"
  // to log in, get a json web token
  // this account has been seeded to the database in advance
  const [getToken, { data }] = useMutation(LOGIN_USER, {
    variables: {
      email: 'test@skand.io',
      password: 'testtest'
    }
  });

  useEffect(() => {
    getToken();
  }, [getToken]);

  // simply show the token for now
  return (
    <>
      {data?.token}
      <LoginForm />
    </>
  );
};
