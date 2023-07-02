import { ReactElement } from 'react';
import { Todo } from '../../../generated/graphql';

export interface TodosFormProps {
  handleTodos?: (todo: Todo[]) => void;
  handleTodo?: (todo: Todo, type: 'create' | 'update' | 'delete') => void;
}

export interface TodosProps {
  form?: (props: TodosFormProps) => ReactElement | ReactElement<TodosFormProps>;
}
