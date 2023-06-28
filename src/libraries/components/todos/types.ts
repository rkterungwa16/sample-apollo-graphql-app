import { ReactElement } from "react";
import { Todo } from "../../../generated/graphql";

export interface TodosFormProps {
  handleTodos?: (todo: Todo[]) => void;
  handleTodo?: (todo: Todo) => void;
}

export interface TodosProps {
  form?: (props: TodosFormProps) => ReactElement;
}
