import { FC } from 'react';
import { StyledCheckboxWrapper, StyledCheckboxMark, StyledCheckmarkIcon } from './styles';
import { TodoStatus } from '../../../generated/graphql';

export interface TodoCheckboxProps {
  status: TodoStatus;
}
export const TodoCheckbox: FC<TodoCheckboxProps> = ({ status }) => {
  return (
    <StyledCheckboxWrapper role="input">
      {status === TodoStatus.Done && (
        <StyledCheckboxMark>
          <StyledCheckmarkIcon />
        </StyledCheckboxMark>
      )}
    </StyledCheckboxWrapper>
  );
};
