/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { TodoCheckbox } from './TodoCheckbox';
import { TodoStatus } from '../../../generated/graphql';

describe('TodoCheckbox', () => {
  it('exists', () => {
    expect(TodoCheckbox).toBeDefined();
  });

  it('renders done check mark', () => {
    const { getByTestId } = render(<TodoCheckbox status={TodoStatus.Done} />);
    const checkmarkDone = getByTestId('checkbox-done');
    expect(checkmarkDone).toBeInTheDocument();
  });

  it('renders check mark as not done', () => {
    const { getByTestId } = render(<TodoCheckbox status={TodoStatus.Todo} />);
    const findCheckmark = () => {
      getByTestId('checkbox-done');
    };
    expect(findCheckmark).toThrowError();
  });
});
