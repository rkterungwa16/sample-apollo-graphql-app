import { Layout } from '../../libraries/components/layout/Layout';
import { TodosForm } from '../../libraries/components/todos/TodosForm';
import { StyledTodosPageHeaderWrapper } from './styles';

export const Todo = () => {
  return (
    <Layout>
      <StyledTodosPageHeaderWrapper>
        <h3>My todos</h3>
      </StyledTodosPageHeaderWrapper>
      <TodosForm />
    </Layout>
  );
};

export default Todo;
