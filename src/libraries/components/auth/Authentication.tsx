import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { SIGNUP_USER } from '../../graphql/signup';
import { LOGIN_USER } from '../../graphql/login';
import {
  StyledFormButtonElementsWrapper,
  StyledFormWrapper,
  StyledFormInputElementWrapper,
  StyledInput
} from './styles';
import { useFormValidation } from '../../utils/useFormValidation';
import { validatorSchema } from '../../utils/validation-schema';

export const AuthenticationForm = () => {
  const { handleChange, formValues, errors } = useFormValidation(
    {
      email: '',
      password: ''
    },
    validatorSchema
  );
  const [createUser] = useMutation(SIGNUP_USER);
  const [getToken] = useMutation(LOGIN_USER);
  const navigate = useNavigate();

  console.log('form values___', formValues);
  console.log('errors___', errors);
  const handleSignup = async () => {
    console.log('signup___');
    try {
      const {
        data: { createUser: user }
      } = await createUser({
        variables: {
          ...formValues
        }
      });

      const {
        data: { token }
      } = await getToken({
        variables: {
          email: user.email,
          password: formValues.password
        }
      });
      localStorage.setItem('token', token);
      navigate('/todos', { replace: true });
    } catch (e) {
      console.log('e____', e);
      // setStatus(e);
    }
  };
  const handleLogin = async () => {
    try {
      const {
        data: { token }
      } = await getToken({
        variables: {
          ...formValues
        }
      });
      localStorage.setItem('token', token);
      navigate('/todos', { replace: true });
    } catch (e) {
      // setStatus(e);
    }
  };

  return (
    <StyledFormWrapper>
      <StyledFormInputElementWrapper>
        <StyledInput
          id="email"
          name="email"
          type="email"
          onChange={handleChange}
          value={formValues.email}
        />
      </StyledFormInputElementWrapper>
      <StyledFormInputElementWrapper>
        <StyledInput
          id="password"
          name="password"
          type="password"
          onChange={handleChange}
          value={formValues.password}
        />
      </StyledFormInputElementWrapper>

      <StyledFormButtonElementsWrapper>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleSignup}>Sign up</button>
      </StyledFormButtonElementsWrapper>
    </StyledFormWrapper>
  );
};
