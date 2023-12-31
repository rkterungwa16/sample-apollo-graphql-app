/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import { Todos } from './Todos';
import { TestTodoForm } from './Test.Components';
import { TodosFormProps } from './types';
import { FormTexts, TodoTexts } from './constants';
import { sampleTodos } from './test.utils';
import { DELETE_TODO, UPDATE_TODO } from '../../graphql/todos';
import { MockedProvider } from '@apollo/client/testing';

const mocks = [
  {
    request: {
      query: UPDATE_TODO,
      variables: {
        todo: {
          id: '1',
          status: 'DONE'
        }
      }
    },
    result: {
      data: {}
    }
  },
  {
    request: {
      query: DELETE_TODO,
      variables: {
        id: '1'
      }
    },
    result: {
      data: {}
    }
  }
];

describe('Todos', () => {
  it('exists', () => {
    expect(Todos).toBeDefined();
  });

  it('renders text for empty list', () => {
    const { getByText } = render(
      <Todos
        form={(props: TodosFormProps) => {
          return <TestTodoForm handleTodo={props.handleTodo} />;
        }}
      />
    );
    const emptyTodoListText = getByText(TodoTexts.EMPTY_TODOS_MESSAGE);
    expect(emptyTodoListText).toBeInTheDocument();
  });

  it('renders a list with todo item', () => {
    const { getByRole, getByText, getByTestId } = render(
      <MockedProvider mocks={mocks}>
        <Todos
          form={(props: TodosFormProps) => {
            return <TestTodoForm handleTodo={props.handleTodo} />;
          }}
        />
      </MockedProvider>
    );

    const createTodoButton = getByRole('button', { name: FormTexts.CREATE_TODO_BUTTON });
    fireEvent.click(createTodoButton);
    const todoItemContent = getByText(sampleTodos[0].content);
    const todoItemDoneText = getByText(TodoTexts.TODO_DONE);
    expect(todoItemContent).toBeInTheDocument();
    expect(todoItemDoneText).toBeInTheDocument();
    const changeItemStatusButton = getByTestId('todo-item-1');
    fireEvent.click(changeItemStatusButton);
    const todoItemRemoveButton = getByRole('button', { name: TodoTexts.TODO_REMOVE });
    const todoItemEditButton = getByRole('button', { name: TodoTexts.TODO_EDIT });
    expect(todoItemRemoveButton).toBeInTheDocument();
    expect(todoItemEditButton).toBeInTheDocument();
  });
});
