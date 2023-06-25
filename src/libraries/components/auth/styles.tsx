import styled from "styled-components";
import { devices } from "../../utils/breakpoints";

export const StyledFormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

`;

export const StyledFormInputElementWrapper = styled.div`
  margin-top: 0.25rem;
`;

export const StyledFormButtonElementsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border-radius: .8rem;
  // @media only screen and ${devices.md} {
  //   width: 80%;
  // }
`
