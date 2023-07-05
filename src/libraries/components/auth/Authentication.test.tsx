/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import { AuthenticationForm } from './Authentication';
import { MockedProvider } from '@apollo/client/testing';
import { MemoryRouter } from 'react-router-dom';
import { FormTexts } from './constants';
import { ValidationErrorTexts } from '../../utils/validation-schema';
import { LOGIN_USER } from '../../graphql/login';

const mocks = [
  {
    request: {
      query: LOGIN_USER,
      variables: {
        email: 'terungwakombol@gmail.com',
        password: 'password12345'
      }
    },
    result: {
      data: {
        token: 'token__12345'
      }
    }
  }
];

// const appolloClientMock = jest.mock('@apollo/client', () => {
//   const original = jest.requireActual('@apollo/client');
//   return jest.fn(() => ({
//     ...original,
//     useMutation: [jest.fn().mockImplementation((values) => { return {
//       data: {
//         token: "token__12345"
//       }
//     }})],
//     gql: jest.fn()
//   }));
// });

// appolloClientMock.genMockFromModule('@apollo/client');

// const mockedLocalStorageSetItem = jest.spyOn(window.localStorage, 'setItem');
describe('AuthenticationForm', () => {
  it('exists', () => {
    expect(AuthenticationForm).toBeDefined();
  });

  it('renders the correct buttons', () => {
    const { getAllByRole } = render(
      <MockedProvider>
        <MemoryRouter>
          <AuthenticationForm />
        </MemoryRouter>
      </MockedProvider>
    );
    const buttons = getAllByRole('button');
    expect(buttons.length).toEqual(2);
    expect(buttons[0].textContent).toEqual(FormTexts.LOGIN_BUTTON);
    expect(buttons[1].textContent).toEqual(FormTexts.SIGNUP_BUTTON);
  });

  it('renders text for invalid email', () => {
    const { getByPlaceholderText, getByText } = render(
      <MockedProvider>
        <MemoryRouter>
          <AuthenticationForm />
        </MemoryRouter>
      </MockedProvider>
    );
    const email = getByPlaceholderText(FormTexts.EMAIL_PLACEHOLDER);
    fireEvent.input(email, { target: { value: 'terun' } });
    const invalidEmailText = getByText(ValidationErrorTexts.INVALID_EMAIL);
    expect(invalidEmailText).toBeInTheDocument();
    expect(invalidEmailText.textContent).toEqual(ValidationErrorTexts.INVALID_EMAIL);
  });

  it('renders text for empty email', () => {
    const { getByPlaceholderText, getByText } = render(
      <MockedProvider>
        <MemoryRouter>
          <AuthenticationForm />
        </MemoryRouter>
      </MockedProvider>
    );
    const email = getByPlaceholderText(FormTexts.EMAIL_PLACEHOLDER);
    fireEvent.input(email, { target: { value: 'terun' } });
    fireEvent.input(email, { target: { value: '' } });
    const emptyEmailText = getByText(ValidationErrorTexts.EMAIL_IS_EMPTY);
    expect(emptyEmailText).toBeInTheDocument();
    expect(emptyEmailText.textContent).toEqual(ValidationErrorTexts.EMAIL_IS_EMPTY);
  });

  it('renders text for invalid password', () => {
    const { getByPlaceholderText, getByText } = render(
      <MockedProvider>
        <MemoryRouter>
          <AuthenticationForm />
        </MemoryRouter>
      </MockedProvider>
    );

    const password = getByPlaceholderText(FormTexts.PASSWORD_PLACEHOLDER);
    fireEvent.input(password, { target: { value: 'terun' } });
    const invalidPasswordText = getByText(ValidationErrorTexts.INVALID_PASSWORD);
    expect(invalidPasswordText).toBeInTheDocument();
    expect(invalidPasswordText.textContent).toEqual(ValidationErrorTexts.INVALID_PASSWORD);
  });
  it('renders text for empty password', () => {
    const { getByPlaceholderText, getByText } = render(
      <MockedProvider>
        <MemoryRouter>
          <AuthenticationForm />
        </MemoryRouter>
      </MockedProvider>
    );

    const password = getByPlaceholderText(FormTexts.PASSWORD_PLACEHOLDER);
    fireEvent.input(password, { target: { value: 't' } });
    fireEvent.input(password, { target: { value: '' } });
    const emptyPasswordText = getByText(ValidationErrorTexts.PASSWORD_EMPTY);
    expect(emptyPasswordText).toBeInTheDocument();
    expect(emptyPasswordText.textContent).toEqual(ValidationErrorTexts.PASSWORD_EMPTY);
  });

  it('login user', () => {
    const { getByRole, getByPlaceholderText } = render(
      <MockedProvider mocks={mocks}>
        <MemoryRouter>
          <AuthenticationForm />
        </MemoryRouter>
      </MockedProvider>
    );

    const loginButton = getByRole('button', { name: FormTexts.LOGIN_BUTTON });
    const email = getByPlaceholderText(FormTexts.EMAIL_PLACEHOLDER);
    fireEvent.input(email, { target: { value: 'terungwakombol@gmail.com' } });
    const password = getByPlaceholderText(FormTexts.PASSWORD_PLACEHOLDER);
    fireEvent.input(password, { target: { value: 'password12345' } });
    fireEvent.click(loginButton);
    // console.log('mockedUseMutation', mockedUseMutation.mock.calls[0][0]);
    // console.log('mockedUseMutation', mockedUseMutation.mock.calls[1][0]);
    // console.log('localStorage__', mockedLocalStorageSetItem.mock)
    // expect(mockedUseMutation).toBeCalled();
  });
});
