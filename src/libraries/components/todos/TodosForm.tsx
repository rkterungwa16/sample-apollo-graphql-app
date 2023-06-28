import { FC } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import {
  StyledFormButtonElementsWrapper,
  StyledFormWrapper,
  StyledFormInputElementWrapper,
  StyledInput,
  StyledSearchButton,
  StyledCreateTodoButton
} from './styles';
import { useFormValidation } from '../../utils/useFormValidation';
import { createTodoFormValidatorSchema } from '../../utils/validation-schema';
import { FormTexts } from './constants';
import { CREATE_TODO, FETCH_USER_TODOS } from '../../graphql/todos';
import { TodosFormProps } from './types';

export const TodosForm: FC<TodosFormProps> = ({ handleTodos, handleTodo }) => {
  const { handleChange, formValues, handleSetFormValues } = useFormValidation(
    {
      content: '',
      searchTerm: ''
    },
    createTodoFormValidatorSchema
  );
  const [createTodo] = useMutation(CREATE_TODO);
  // const { loading, error, data, refetch } = useQuery(FETCH_USER_TODOS);

  const handleCreateTodo = async () => {
    try {
      const {
        data: { createTodo: todo }
      } = await createTodo({
        variables: {
          content: formValues.content
        }
      });

      handleTodo?.(todo);
      handleSetFormValues({
        content: ''
      });
    } catch (e) {
      console.log('e____', e);
      // setStatus(e);
    }
  };

  // const handleSearch = async () => {
  //   try {
  //     // const {
  //     //   data: { todos }
  //     // } = await fetchUserTodos({
  //     //   variables: {
  //     //     ...formValues
  //     //   }
  //     // });
  //     // console.log('todos', todos);
  //     await refetch({
  //       searchTerm: formValues.searchTerm
  //     });
  //     handleTodos?.(data);
  //   } catch (e) {
  //     // setStatus(e);
  //   }
  // };
  // console.log('_______', data);

  return (
    <StyledFormWrapper>
      <StyledFormInputElementWrapper>
        <StyledInput
          id={FormTexts.CREATE_TODO_CONTENT}
          name={FormTexts.CREATE_TODO_CONTENT}
          type={FormTexts.CREATE_TODO_CONTENT}
          placeholder={FormTexts.CREATE_TODO_PLACEHOLDER}
          onChange={handleChange}
          value={formValues.content}
        />
      </StyledFormInputElementWrapper>
      <StyledFormInputElementWrapper>
        <StyledFormButtonElementsWrapper>
          <StyledInput
            id={FormTexts.SEARCH}
            name={FormTexts.SEARCH}
            type={FormTexts.SEARCH}
            placeholder={FormTexts.SEARCH_PLACEHOLDER}
            onChange={handleChange}
            value={formValues.searchTerm}
          />
          <StyledSearchButton
            disabled={!formValues.searchTerm ? true : false}
            // onClick={handleSearch}
          >
            {FormTexts.SEARCH_BUTTON}
          </StyledSearchButton>
          <StyledCreateTodoButton
            disabled={!formValues.content ? true : false}
            onClick={handleCreateTodo}
          >
            {FormTexts.CREATE_TODO_BUTTON}
          </StyledCreateTodoButton>
        </StyledFormButtonElementsWrapper>
      </StyledFormInputElementWrapper>
    </StyledFormWrapper>
  );
};
