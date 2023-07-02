import { Todo } from '../../../generated/graphql';
import { FormTexts, TodoTexts } from './constants';
import {
  StyledFormInputElementWrapper,
  StyledFormButtonElementsWrapper,
  StyledInput,
  StyledPrimaryButton,
  StyledSecondaryButton
} from './styles';
import { ChangeEventHandler, FC, useState } from 'react';

export interface TodoItemEditInputProps {
  handleUpdate?: (prop: 'status' | 'content', value: string) => void;
  todo?: Todo;
  handleToggleEditInput?: () => void;
}

export const TodoItemEditInput: FC<TodoItemEditInputProps> = ({
  handleUpdate,
  todo,
  handleToggleEditInput
}) => {
  const [content, setContent] = useState(todo?.content || '');

  const handleClick = async () => {
    await handleUpdate?.('content', content);
  };
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.currentTarget.value;
    setContent(value);
  };
  return (
    <StyledFormInputElementWrapper>
      <StyledFormButtonElementsWrapper>
        <StyledInput
          id={FormTexts.EDIT_TODO_CONTENT}
          name={FormTexts.EDIT_TODO_CONTENT}
          type="text"
          placeholder={FormTexts.EDIT_TODO_PLACEHOLDER}
          onChange={handleChange}
          value={content}
        />
        <StyledSecondaryButton onClick={handleToggleEditInput}>
          {FormTexts.CANCEL_BUTTON}
        </StyledSecondaryButton>
        <StyledPrimaryButton onClick={handleClick}>{TodoTexts.TODO_UPDATE}</StyledPrimaryButton>
      </StyledFormButtonElementsWrapper>
    </StyledFormInputElementWrapper>
  );
};
