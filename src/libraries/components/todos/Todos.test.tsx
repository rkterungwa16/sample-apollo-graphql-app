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
    const { getByRole, getByText } = render(
      <Todos
        form={(props: TodosFormProps) => {
          return <TestTodoForm handleTodo={props.handleTodo} />;
        }}
      />
    );

    const createTodoButton = getByRole('button', { name: FormTexts.CREATE_TODO_BUTTON });
    fireEvent.click(createTodoButton);
    const todoItemContent = getByText(sampleTodos[0].content);
    expect(todoItemContent).toBeInTheDocument();
  });
});
