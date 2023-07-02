import { FC, MouseEventHandler } from 'react';
import { StyledCheckboxWrapper, StyledCheckboxMark, StyledCheckbox } from './styles';
import { TodoStatus } from '../../../generated/graphql';

export interface TodoCheckboxProps {
  status: TodoStatus;
  handleUpdate?: (prop: 'status' | 'content', value: string) => void;
  id?: string;
}
export const TodoCheckbox: FC<TodoCheckboxProps> = ({ status, handleUpdate, id }) => {
  const handleClick: MouseEventHandler<HTMLElement> = () => {
    const currentstatus = status === TodoStatus.Done ? TodoStatus.Todo : TodoStatus.Done;
    handleUpdate?.('status', currentstatus);
  };
  return (
    <StyledCheckboxWrapper>
      <StyledCheckbox data-testid={`todo-item-${id}`} role="button" onClick={handleClick}>
        {status === TodoStatus.Done && <StyledCheckboxMark data-testid="checkbox-done" />}
      </StyledCheckbox>
    </StyledCheckboxWrapper>
  );
};
