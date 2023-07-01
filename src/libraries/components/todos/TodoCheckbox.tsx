import { FC, MouseEventHandler } from 'react';
import { StyledCheckboxWrapper, StyledCheckboxMark, StyledCheckbox } from './styles';
import { TodoStatus } from '../../../generated/graphql';

export interface TodoCheckboxProps {
  status: TodoStatus;
  handleClick?: MouseEventHandler<HTMLElement>;
  id?: string;
}
export const TodoCheckbox: FC<TodoCheckboxProps> = ({ status, handleClick, id }) => {
  return (
    <StyledCheckboxWrapper>
      <StyledCheckbox data-testid={`todo-item-${id}`} role="button" onClick={handleClick}>
        {status === TodoStatus.Done && <StyledCheckboxMark data-testid="checkbox-done" />}
      </StyledCheckbox>
    </StyledCheckboxWrapper>
  );
};
