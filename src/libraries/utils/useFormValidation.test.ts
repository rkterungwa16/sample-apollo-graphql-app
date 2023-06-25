/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom/extend-expect';
// import { fireEvent, render } from '@testing-library/react';

import { useFormValidation } from './useFormValidation';

describe('useFormValidation', () => {
  it('exists', () => {
    expect(useFormValidation).toBeDefined();
  });
});

// describe('PinInput', () => {
//   it('exists', () => {
//     expect(PinInput).toBeDefined();
//   });

//   it('renders the correct number of inputs', () => {
//     const { getAllByLabelText } = render(
//       <PinInput numberOfInputs={6} onEntry={() => {}} />,
//     );

//     expect(getAllByLabelText(/number input/i).length).toEqual(6);
//   });

//   it('updates the proper input onChange', () => {
//     const { getByLabelText } = render(
//       <PinInput numberOfInputs={6} onEntry={() => {}} />,
//     );

//     const firstInput = getByLabelText(/number input 1/i) as HTMLInputElement;
//     const secondInput = getByLabelText(/number input 2/i) as HTMLInputElement;
//     const thirdInput = getByLabelText(/number input 3/i) as HTMLInputElement;
//     const fourthInput = getByLabelText(/number input 4/i) as HTMLInputElement;
//     const fifthInput = getByLabelText(/number input 5/i) as HTMLInputElement;
//     const sixthInput = getByLabelText(/number input 6/i) as HTMLInputElement;

//     expect(firstInput).toBeInTheDocument();
//     expect(secondInput).toBeInTheDocument();
//     expect(thirdInput).toBeInTheDocument();
//     expect(fourthInput).toBeInTheDocument();
//     expect(fifthInput).toBeInTheDocument();
//     expect(sixthInput).toBeInTheDocument();

//     fireEvent.input(firstInput, { target: { value: '1' } });
//     fireEvent.input(secondInput, { target: { value: '2' } });
//     fireEvent.input(thirdInput, { target: { value: '4' } });
//     fireEvent.input(fourthInput, { target: { value: '5' } });
//     fireEvent.input(fifthInput, { target: { value: '3' } });
//     fireEvent.input(sixthInput, { target: { value: '7' } });

//     expect(firstInput.value).toEqual('1');
//     expect(secondInput.value).toEqual('2');
//     expect(thirdInput.value).toEqual('4');
//     expect(fourthInput.value).toEqual('5');
//     expect(fifthInput.value).toEqual('3');
//     expect(sixthInput.value).toEqual('7');
//   });

//   it('only allows one digit per input', () => {
//     const { getByLabelText } = render(
//       <PinInput numberOfInputs={6} onEntry={() => {}} />,
//     );

//     const firstInput = getByLabelText(/number input 1/i) as HTMLInputElement;
//     const secondInput = getByLabelText(/number input 2/i) as HTMLInputElement;
//     const thirdInput = getByLabelText(/number input 3/i) as HTMLInputElement;
//     const fourthInput = getByLabelText(/number input 4/i) as HTMLInputElement;
//     const fifthInput = getByLabelText(/number input 5/i) as HTMLInputElement;
//     const sixthInput = getByLabelText(/number input 6/i) as HTMLInputElement;

//     expect(firstInput).toBeInTheDocument();
//     expect(secondInput).toBeInTheDocument();
//     expect(thirdInput).toBeInTheDocument();
//     expect(fourthInput).toBeInTheDocument();
//     expect(fifthInput).toBeInTheDocument();
//     expect(sixthInput).toBeInTheDocument();

//     fireEvent.input(firstInput, { target: { value: '12' } });
//     fireEvent.input(secondInput, { target: { value: '22' } });
//     fireEvent.input(thirdInput, { target: { value: '42' } });
//     fireEvent.input(fourthInput, { target: { value: '52' } });
//     fireEvent.input(fifthInput, { target: { value: '32' } });
//     fireEvent.input(sixthInput, { target: { value: '72' } });

//     expect(firstInput.value).toEqual('1');
//     expect(secondInput.value).toEqual('2');
//     expect(thirdInput.value).toEqual('4');
//     expect(fourthInput.value).toEqual('5');
//     expect(fifthInput.value).toEqual('3');
//     expect(sixthInput.value).toEqual('7');
//   });

//   it('fires the onEntry callback on input', () => {
//     const handleEntry = jest.fn();

//     const { getByLabelText } = render(
//       <PinInput numberOfInputs={2} onEntry={handleEntry} />,
//     );

//     // effect runs once when initial values are set
//     expect(handleEntry).toBeCalledTimes(1);

//     const firstInput = getByLabelText(/number input 1/i) as HTMLInputElement;
//     const secondInput = getByLabelText(/number input 2/i) as HTMLInputElement;

//     expect(firstInput).toBeInTheDocument();
//     expect(secondInput).toBeInTheDocument();

//     fireEvent.input(firstInput, { target: { value: '1' } });

//     expect(handleEntry).toBeCalledTimes(2);
//     expect(handleEntry).toBeCalledWith('1');

//     fireEvent.input(secondInput, { target: { value: '2' } });

//     expect(handleEntry).toBeCalledTimes(3);
//     expect(handleEntry).toHaveBeenCalledWith('12');
//   });
// });
