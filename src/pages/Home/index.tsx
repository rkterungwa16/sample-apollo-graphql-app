import { AuthenticationForm } from '../../libraries/components/auth/Authentication';
import { Layout } from '../../libraries/components/layout/Layout';
import { StyledHomePageHeaderWrapper } from './styles';

export const Home = () => {
  // email: "test@skand.io", password: "testtest"
  // to log in, get a json web token
  // this account has been seeded to the database in advance

  return (
    <Layout>
      <StyledHomePageHeaderWrapper>
        <h3>Sign Up or Log In</h3>
      </StyledHomePageHeaderWrapper>
      <AuthenticationForm />
    </Layout>
  );
};
