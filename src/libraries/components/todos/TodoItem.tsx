import { FC, useState } from 'react';
import { Todo, TodoStatus } from '../../../generated/graphql';
import { TodoCheckbox } from './TodoCheckbox';
import { TodoTexts } from './constants';
import {
  StyledTodoItem,
  StyledTodoItemSectionWrapper,
  StyledTodoItemContent,
  StyledTodoItemStatus
} from './styles';
import { useMutation } from '@apollo/client';
import { DELETE_TODO, UPDATE_TODO } from '../../graphql/todos';
import { TodoItemEditInput } from './TodoItemEditInput';

export interface TodoItemProps {
  todo: Todo;
  handleTodo?: (todo: Todo, type: 'create' | 'update' | 'delete') => void;
}

export const TodoItem: FC<TodoItemProps> = ({ handleTodo, todo }) => {
  const { id, content, status } = todo;
  const [isEditing, setIsEditing] = useState(false);
  const [updateTodo] = useMutation(UPDATE_TODO);
  const [deleteTodo] = useMutation(DELETE_TODO);

  const handleUpdateTodo = async (prop: 'status' | 'content', value: string) => {
    try {
      const {
        data: { updateTodo: updatedTodo }
      } = await updateTodo({
        variables: {
          todo: {
            id,
            [prop]: value
          }
        }
      });

      if (updatedTodo) {
        handleTodo?.(updatedTodo, 'update');
        setIsEditing(false);
      }
    } catch (e) {
      console.log('e____', e);
      // setStatus(e);
    }
  };

  const handleDeleteTodo = async () => {
    try {
      const {
        data: { deleteTodo: deletedTodoStatus }
      } = await deleteTodo({
        variables: {
          id
        }
      });
      if (deletedTodoStatus === true) {
        handleTodo?.(todo, 'delete');
      }
    } catch (e) {
      console.log('e____', e);
      // setStatus(e);
    }
  };
  const handleTodoEditClick = () => {
    setIsEditing(!isEditing);
  };
  return (
    <StyledTodoItem>
      {isEditing ? (
        <TodoItemEditInput
          handleToggleEditInput={handleTodoEditClick}
          handleUpdate={handleUpdateTodo}
          todo={todo}
        />
      ) : (
        <>
          <StyledTodoItemSectionWrapper>
            <TodoCheckbox id={id} handleUpdate={handleUpdateTodo} status={status} />
            <StyledTodoItemContent isDone={status === TodoStatus.Done}>
              {content}
            </StyledTodoItemContent>
          </StyledTodoItemSectionWrapper>
          <StyledTodoItemSectionWrapper>
            <StyledTodoItemStatus onClick={handleTodoEditClick} role="button">
              {TodoTexts.TODO_EDIT}
            </StyledTodoItemStatus>
            <StyledTodoItemStatus onClick={handleDeleteTodo} role="button">
              {TodoTexts.TODO_REMOVE}
            </StyledTodoItemStatus>
            {status === TodoStatus.Done && (
              <StyledTodoItemStatus>{TodoTexts.TODO_DONE}</StyledTodoItemStatus>
            )}
          </StyledTodoItemSectionWrapper>
        </>
      )}
    </StyledTodoItem>
  );
};
