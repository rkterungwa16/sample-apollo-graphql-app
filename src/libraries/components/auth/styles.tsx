import styled from 'styled-components';
import { devices } from '../../utils/breakpoints';

export const StyledFormWrapper = styled.div`
  width: 90%;
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

export const StyledButton = styled.button`
  padding: 0.8rem;
  border-radius: 0.8rem;
  margin: 0.25rem;
  cursor: pointer;
  background: #df2060;
  height: 48px;
  border: none;
  color: #ffffff;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
`;
export const StyledInputErrorMessage = styled.p`
  font-size: 1rem;
  color: #a01845;
  margin-bottom: 0.25rem;
`;
