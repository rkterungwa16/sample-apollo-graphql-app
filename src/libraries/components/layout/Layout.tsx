import styled from 'styled-components';
import { devices } from '../../utils/breakpoints';
import { FC, ReactNode } from 'react';

export const StyledPageComponentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  @media only screen and ${devices.md} {
    width: 600px;
    padding: 0;
  }
`;

export const StyledPageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => (
  <StyledPageWrapper>
    <StyledPageComponentsWrapper>{children}</StyledPageComponentsWrapper>
  </StyledPageWrapper>
);
