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

const appolloClientMock = jest.mock('@apollo/client', () => {
  const original = jest.requireActual('@apollo/client');
  return jest.fn(() => ({
    ...original,
    useMutation: [jest.fn()],
    gql: jest.fn()
  }));
});

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
});
