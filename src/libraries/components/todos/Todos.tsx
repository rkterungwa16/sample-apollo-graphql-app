import { TodosForm } from './TodosForm';
import {
  StyledEmptyTodosText,
  StyledTodoItem,
  StyledTodoItemContent,
  StyledTodoItemSectionWrapper,
  StyledTodoItemStatus,
  StyledTodoItemWrapper,
  StyledTodosCard,
  StyledTodosWrapper
} from './styles';
import { FC, useState } from 'react';
import { TodoTexts } from './constants';
import { Todo, TodoStatus } from '../../../generated/graphql';
import { TodoCheckbox } from './TodoCheckbox';
import { TodosProps } from './types';

export const Todos: FC<TodosProps> = ({ form }) => {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const handleTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  const handleChangeStatus = (id: string) => {
    return () => {
      const updatedTodos = todos.map((_todo) => {
        if (_todo.id === id) {
          return {
            ..._todo,
            status: _todo.status === TodoStatus.Todo ? TodoStatus.Done : TodoStatus.Todo
          };
        }
        return _todo;
      });
      setTodos(updatedTodos);
    };
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
              <StyledTodoItem
                data-testid={`todo-item-${_todo.id}`}
                role="button"
                onClick={handleChangeStatus(_todo.id)}
                key={_todo.id}
              >
                <StyledTodoItemSectionWrapper>
                  <TodoCheckbox status={_todo.status} />
                  <StyledTodoItemContent>{_todo.content}</StyledTodoItemContent>
                </StyledTodoItemSectionWrapper>
                <StyledTodoItemSectionWrapper>
                  {_todo.status === TodoStatus.Done ? (
                    <>
                      <StyledTodoItemStatus role="button">
                        {TodoTexts.TODO_EDIT}
                      </StyledTodoItemStatus>
                      <StyledTodoItemStatus role="button">
                        {TodoTexts.TODO_REMOVE}
                      </StyledTodoItemStatus>
                    </>
                  ) : (
                    <StyledTodoItemStatus>{TodoTexts.TODO_DONE}</StyledTodoItemStatus>
                  )}
                </StyledTodoItemSectionWrapper>
              </StyledTodoItem>
            ))}
          </StyledTodoItemWrapper>
        )}
      </StyledTodosCard>
    </StyledTodosWrapper>
  );
};
