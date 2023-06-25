import { AuthenticationForm } from './libraries/components/auth/Authentication';
import { Layout } from './libraries/components/layout/Layout';

export const Root = () => {
  // email: "test@skand.io", password: "testtest"
  // to log in, get a json web token
  // this account has been seeded to the database in advance

  return (
    <Layout>
      <AuthenticationForm />
    </Layout>
  );
};
