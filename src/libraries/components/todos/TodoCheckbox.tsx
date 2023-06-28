import { FC } from 'react';
import { StyledCheckboxWrapper, StyledCheckboxMark } from './styles';
import { TodoStatus } from '../../../generated/graphql';

export interface TodoCheckboxProps {
  status: TodoStatus;
}
export const TodoCheckbox: FC<TodoCheckboxProps> = ({ status }) => {
  return (
    <StyledCheckboxWrapper>
      {status === TodoStatus.Done && <StyledCheckboxMark data-testid="checkbox-done" />}
    </StyledCheckboxWrapper>
  );
};
