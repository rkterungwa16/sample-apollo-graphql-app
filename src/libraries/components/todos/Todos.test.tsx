/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom/extend-expect';
import React, { useState as useStateMock } from 'react';
import { render } from '@testing-library/react';
import { Todos } from './Todos';
import { TodoStatus } from '../../../generated/graphql';

describe('Todos', () => {
  it('exists', () => {
    expect(Todos).toBeDefined();
  });

  // it('renders done check mark', () => {
  //   const { getByTestId } = render(
  //     <Todos />
  //   );
  //   const checkmarkDone = getByTestId('checkbox-done');
  //   expect(checkmarkDone).toBeInTheDocument()
  // });

  // it('renders check mark as not done', () => {
  //   const { getByTestId } = render(
  //     <Todos />
  //   );
  //   const findCheckmark = () => {
  //     getByTestId('checkbox-done');
  //   }
  //   expect(findCheckmark).toThrowError();
  // });
});
