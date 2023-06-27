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
import { useState } from 'react';
import { TodoTexts } from './constants';
import { Todo, TodoStatus } from '../../../generated/graphql';
import { TodoCheckbox } from './TodoCheckbox';

export const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  const handleMarkComplete = (id: string) => {
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

  console.log('data___', todos);
  return (
    <StyledTodosWrapper>
      <TodosForm handleTodo={handleTodo} />
      <StyledTodosCard>
        {!todos.length ? (
          <StyledEmptyTodosText>{TodoTexts.EMPTY_TODOS_MESSAGE}</StyledEmptyTodosText>
        ) : (
          <StyledTodoItemWrapper>
            {todos.map((_todo) => (
              <StyledTodoItem role="button" onClick={handleMarkComplete(_todo.id)} key={_todo.id}>
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
