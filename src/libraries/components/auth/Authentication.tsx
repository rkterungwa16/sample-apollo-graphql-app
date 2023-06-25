import { ChangeEventHandler, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { SIGNUP_USER } from '../../graphql/signup';
import { LOGIN_USER } from '../../graphql/login';
import { StyledFormButtonElementsWrapper, StyledFormWrapper, StyledFormInputElementWrapper } from './styles';

export const AuthenticationForm = () => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: ''
  });
  const [createUser] = useMutation(SIGNUP_USER);
  const [getToken] = useMutation(LOGIN_USER);
  const navigate = useNavigate();
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.currentTarget.value;
    const name = e.currentTarget.name;
    setUserInfo({
      ...userInfo,
      [name]: value
    });
  };
  const handleSignup = async () => {
    console.log('signup___');
    try {
      const {
        data: { createUser: user }
      } = await createUser({
        variables: {
          ...userInfo
        }
      });

      const {
        data: { token }
      } = await getToken({
        variables: {
          email: user.email,
          password: userInfo.password
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
          ...userInfo
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
        <input
          id="email"
          name="email"
          type="email"
          onChange={handleChange}
          value={userInfo.email}
        />
      </StyledFormInputElementWrapper>
      <StyledFormInputElementWrapper>
        <input
          id="password"
          name="password"
          type="password"
          onChange={handleChange}
          value={userInfo.password}
        />
      </StyledFormInputElementWrapper>

      <StyledFormButtonElementsWrapper>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleSignup}>Sign up</button>
      </StyledFormButtonElementsWrapper>
    </StyledFormWrapper>
  );
};
