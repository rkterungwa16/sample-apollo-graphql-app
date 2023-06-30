import { TodoStatus } from '../../../generated/graphql';

export const sampleTodos = [
  {
    id: '1',
    content: 'new todo',
    status: TodoStatus.Todo,
    createdAt: '2023-06-29T13:24:57.253Z',
    updatedAt: '2023-06-29T13:24:57.253Z'
  },
  {
    id: '2',
    content: 'Test todo',
    status: TodoStatus.Todo,
    createdAt: '2023-06-29T13:25:04.914Z',
    updatedAt: '2023-06-29T13:25:04.914Z'
  }
];
