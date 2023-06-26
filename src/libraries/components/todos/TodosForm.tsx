import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../graphql/login';
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
import { CREATE_TODO } from '../../graphql/creat-todo';

export const TodosForm = () => {
  const { handleChange, formValues, errors } = useFormValidation(
    {
      todo: '',
      search: ''
    },
    createTodoFormValidatorSchema
  );
  const [createUser] = useMutation(CREATE_TODO);
  const [getToken] = useMutation(LOGIN_USER);
  const navigate = useNavigate();

  const handleCreateTodo = async () => {
    try {
      const {
        data: { createTodo: todo }
      } = await createUser({
        variables: {
          content: formValues.content
        }
      });

    } catch (e) {
      console.log('e____', e);
      // setStatus(e);
    }
  };

  const handleSearch = async () => {
    try {
      const {
        data: { token }
      } = await getToken({
        variables: {
          ...formValues
        }
      });

      localStorage.setItem('token', token);
      navigate('/todos', { replace: true });
    } catch (e) {
      // setStatus(e);
    }
  };

  return (
    <StyledFormWrapper>
      <StyledFormInputElementWrapper>
        <StyledInput
          id={FormTexts.CREATE_TODO_CONTENT}
          name={FormTexts.CREATE_TODO_CONTENT}
          type={FormTexts.CREATE_TODO_CONTENT}
          placeholder={FormTexts.CREATE_TODO_PLACEHOLDER}
          onChange={handleChange}
          value={formValues.email}
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
            value={formValues.password}
          />
          <StyledSearchButton disabled={!formValues.search ? true : false} onClick={handleSearch}>
            {FormTexts.SEARCH_BUTTON}
          </StyledSearchButton>
          <StyledCreateTodoButton
            disabled={!formValues['create-todo'] ? true : false}
            onClick={handleCreateTodo}
          >
            {FormTexts.CREATE_TODO_BUTTON}
          </StyledCreateTodoButton>
        </StyledFormButtonElementsWrapper>
      </StyledFormInputElementWrapper>
    </StyledFormWrapper>
  );
};
