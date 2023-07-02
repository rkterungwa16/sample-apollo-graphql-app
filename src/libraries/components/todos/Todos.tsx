import { TodosForm } from './TodosForm';
import {
  StyledEmptyTodosText,
  StyledTodoItemWrapper,
  StyledTodosCard,
  StyledTodosWrapper
} from './styles';
import { FC, useState } from 'react';
import { TodoTexts } from './constants';
import { Todo } from '../../../generated/graphql';
import { TodosProps } from './types';
import { TodoItem } from './TodoItem';

export const Todos: FC<TodosProps> = ({ form }) => {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const handleTodo = (todo: Todo, type: 'create' | 'update' | 'delete') => {
    if (type === 'create') {
      setTodos([...todos, todo]);
    } else if (type === 'update') {
      const updatedTodos = todos.map((_todo) => {
        if (_todo.id === todo.id) {
          return {
            ...todo
          };
        }
        return _todo;
      });
      setTodos(updatedTodos);
    } else if (type === 'delete') {
      const updatedTodosAfterDelete = todos.filter((_todo) => _todo.id !== todo.id);
      setTodos(updatedTodosAfterDelete);
    }
  };

  const renderForm = () => {
    if (form) {
      return form({
        handleTodo
      });
    }

    return <TodosForm handleTodo={handleTodo} />;
  };

  return (
    <StyledTodosWrapper>
      {renderForm()}
      <StyledTodosCard>
        {!todos.length ? (
          <StyledEmptyTodosText>{TodoTexts.EMPTY_TODOS_MESSAGE}</StyledEmptyTodosText>
        ) : (
          <StyledTodoItemWrapper>
            {todos.map((_todo) => (
              <TodoItem key={_todo.id} todo={_todo} handleTodo={handleTodo} />
            ))}
          </StyledTodoItemWrapper>
        )}
      </StyledTodosCard>
    </StyledTodosWrapper>
  );
};
