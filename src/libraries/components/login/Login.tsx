import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import { LOGIN_USER } from '../../graphql/login';
// export const Form = () => {

// }
export const LoginForm = () => {
  const [getToken] = useMutation(LOGIN_USER);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      password: '',
      email: ''
    },
    onSubmit: async ({ email, password }, { setErrors, setStatus }) => {
      try {
        const {
          data: { token }
        } = await getToken({
          variables: {
            email,
            password
          }
        });
        localStorage.setItem('token', token);
        navigate('/todos', { replace: true });
      } catch (e) {
        setStatus(e);
      }
    }
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <button type="submit" data-id="login">Submit</button>
    </form>
  );
};
