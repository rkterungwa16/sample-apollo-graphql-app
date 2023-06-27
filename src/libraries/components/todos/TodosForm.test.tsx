/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import { TodosForm } from './TodosForm';
import { MockedProvider } from '@apollo/client/testing';
import { MemoryRouter } from 'react-router-dom';
import { FormTexts } from './constants';
import { CREATE_TODO, FETCH_USER_TODOS } from '../../graphql/todos';

const mutationFn = jest.fn().mockImplementation((values) => {
  return {
    data: {
      userTodos: [
        {
          id: '1',
          content: 'new todo',
          status: 'TODO',
          createdAt: '',
          updatedAt: '',
          __typename: 'todos'
        }
      ]
    }
  };
});
const mocks = [
  {
    request: {
      query: CREATE_TODO,
      variables: {
        content: 'new todo'
      }
    },
    createTodo: mutationFn
  },
  {
    request: {
      query: FETCH_USER_TODOS
    },
    result: {
      data: {
        userTodos: [
          {
            id: '1',
            content: 'new todo',
            status: 'TODO',
            createdAt: '',
            updatedAt: '',
            __typename: 'todos'
          }
        ]
      }
    }
  }
];

const appolloClientMock = jest.mock('@apollo/client', () => {
  const original = jest.requireActual('@apollo/client');
  return jest.fn(() => ({
    ...original,
    useMutation: jest.fn()
  }));
});

describe('TodosForm', () => {
  it('exists', () => {
    expect(TodosForm).toBeDefined();
  });

  it('renders the correct buttons', () => {
    const { getAllByRole } = render(
      <MockedProvider>
        <MemoryRouter>
          <TodosForm />
        </MemoryRouter>
      </MockedProvider>
    );
    const buttons = getAllByRole('button');
    expect(buttons.length).toEqual(2);
    expect(buttons[0].textContent).toEqual(FormTexts.SEARCH_BUTTON);
    expect(buttons[1].textContent).toEqual(FormTexts.CREATE_TODO_BUTTON);
  });

  it('create todo', async () => {
    const mockedUseMutation: any = appolloClientMock.genMockFromModule('@apollo/client');
    const createTodo = jest.fn().mockResolvedValue({
      data: {
        userTodos: [
          {
            id: '1',
            content: 'new todo',
            status: 'TODO',
            createdAt: '',
            updatedAt: '',
            __typename: 'todos'
          }
        ]
      }
    });

    mockedUseMutation.useMutation.mockReturnValue([createTodo]);
    const handleTodos = jest.fn();
    const { getByRole, getByPlaceholderText } = render(
      <MockedProvider mocks={mocks}>
        <MemoryRouter>
          <TodosForm handleTodos={handleTodos} />
        </MemoryRouter>
      </MockedProvider>
    );

    const createTodoButton = getByRole('button', { name: FormTexts.CREATE_TODO_BUTTON });
    const todoInput = getByPlaceholderText(FormTexts.CREATE_TODO_PLACEHOLDER);
    fireEvent.input(todoInput, { target: { value: 'new todo' } });
    fireEvent.click(createTodoButton);
    // expect(createTodo).toBeCalled();
  });
});
