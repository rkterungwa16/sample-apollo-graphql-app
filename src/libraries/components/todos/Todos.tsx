import { TodosForm } from './TodosForm';
import { StyledEmptyTodosText, StyledTodosCard, StyledTodosWrapper } from './styles';
import { useState } from 'react';
import { TodoTexts } from './constants';
import { Todo } from '../../../generated/graphql';

export const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  console.log('data___', todos);
  return (
    <StyledTodosWrapper>
      <TodosForm handleTodo={handleTodo} />
      <StyledTodosCard>
        {!todos.length ? (
          <StyledEmptyTodosText>{TodoTexts.EMPTY_TODOS_MESSAGE}</StyledEmptyTodosText>
        ) : null}
      </StyledTodosCard>
    </StyledTodosWrapper>
  );
};
