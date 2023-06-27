import styled from 'styled-components';
import { devices } from '../../utils/breakpoints';

export const StyledFormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledFormInputElementWrapper = styled.div`
  width: 100%;
  margin-top: 0.25rem;
  display: flex;
  flex-direction: column;
`;

export const StyledFormButtonElementsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const StyledInput = styled.input`
  width: 100%;
  border-radius: 0.8rem;
  border: none;
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
  height: 48px;
  font-size: 1.2rem;
  text-indent: 1rem;
  line-height: normal;
  color: #767676;
  background: #f3f1f2;
  font-weight: 500;
  letter-spacing: 2px;
  // @media only screen and ${devices.md} {
  //   width: 80%;
  // }
`;

const buttonStyles = `
  padding: 0.8rem;
  border-radius: 0.8rem;
  margin-left: 0.5rem;
  cursor: pointer;
  height: 48px;
  border: none;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
`;
export const StyledCreateTodoButton = styled.button`
  ${buttonStyles}
  background: #df2060;
  color: #f3f1f2;
`;

export const StyledSearchButton = styled.button`
  ${buttonStyles}
  background: #F3F1F2;
  color: #0e0c0c;
`;

export const StyledInputErrorMessage = styled.p`
  font-size: 1rem;
  color: #a01845;
  margin-bottom: 0.25rem;
`;

export const StyledTodosCard = styled.div`
  background: #f3f1f2;
  border-radius: 1rem;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
  padding: 1rem;
`;
export const StyledTodosWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  color: #0e0c0c;
`;
export const StyledEmptyTodosText = styled.p`
  color: #86797d;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.1875rem;
  text-align: center;
`;
