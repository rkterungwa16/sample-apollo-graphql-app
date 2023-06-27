import { Layout } from '../../libraries/components/layout/Layout';
import { Todos } from '../../libraries/components/todos/Todos';
import { StyledTodosPageHeaderWrapper } from './styles';

export const Todo = () => {
  return (
    <Layout>
      <StyledTodosPageHeaderWrapper>
        <h3>My todos</h3>
      </StyledTodosPageHeaderWrapper>
      <Todos />
    </Layout>
  );
};

export default Todo;
