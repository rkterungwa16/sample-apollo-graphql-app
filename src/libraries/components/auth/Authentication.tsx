import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { SIGNUP_USER } from '../../graphql/signup';
import { LOGIN_USER } from '../../graphql/login';
import {
  StyledFormButtonElementsWrapper,
  StyledFormWrapper,
  StyledFormInputElementWrapper,
  StyledInput,
  StyledSignupButton,
  StyledLoginButton,
  StyledInputErrorMessage
} from './styles';
import { useFormValidation } from '../../utils/useFormValidation';
import { authenticationFormValidatorSchema } from '../../utils/validation-schema';
import { FormTexts } from './constants';

export const AuthenticationForm = () => {
  const { handleChange, formValues, errors } = useFormValidation(
    {
      email: '',
      password: ''
    },
    authenticationFormValidatorSchema
  );
  const [createUser] = useMutation(SIGNUP_USER);
  const [getToken] = useMutation(LOGIN_USER);
  const navigate = useNavigate();

  const handleSignup = async () => {
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
        {errors.email[0]?.length && (
          <StyledInputErrorMessage>{errors.email[0]}</StyledInputErrorMessage>
        )}
        <StyledInput
          id={FormTexts.EMAIL}
          name={FormTexts.EMAIL}
          type={FormTexts.EMAIL}
          placeholder={FormTexts.EMAIL_PLACEHOLDER}
          onChange={handleChange}
          value={formValues.email}
        />
      </StyledFormInputElementWrapper>
      <StyledFormInputElementWrapper>
        {errors.password[0]?.length && (
          <StyledInputErrorMessage>{errors.password[0]}</StyledInputErrorMessage>
        )}
        <StyledInput
          id={FormTexts.PASSWORD}
          name={FormTexts.PASSWORD}
          type={FormTexts.PASSWORD}
          placeholder={FormTexts.PASSWORD_PLACEHOLDER}
          onChange={handleChange}
          value={formValues.password}
        />
      </StyledFormInputElementWrapper>

      <StyledFormButtonElementsWrapper>
        <StyledLoginButton onClick={handleLogin}>{FormTexts.LOGIN_BUTTON}</StyledLoginButton>
        <StyledSignupButton onClick={handleSignup}>{FormTexts.SIGNUP_BUTTON}</StyledSignupButton>
      </StyledFormButtonElementsWrapper>
    </StyledFormWrapper>
  );
};
