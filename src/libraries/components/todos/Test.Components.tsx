import { FC } from 'react';
import { TodosFormProps } from './types';
import { sampleTodos } from './test.utils';
import { FormTexts } from './constants';

export const TestTodoForm: FC<TodosFormProps> = ({ handleTodo }) => {
  const handleClick = () => {
    const todo = sampleTodos[0];
    handleTodo?.(todo, 'create');
  };
  return <button onClick={handleClick}>{FormTexts.CREATE_TODO_BUTTON}</button>;
};
