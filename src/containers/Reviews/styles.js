import styled from "styled-components";
import { mxw, breakpoints } from "../../styles/mediaquerySettings";

export const ReviewsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${({ theme }) => theme.backgroundColor};
  gap: 50px;

  ${mxw(breakpoints.lg)`
    flex-direction:column;
    gap: 20px;
  `}
`;

export const ReviewsListWrapper = styled.ul`
  position: relative;
  max-width: 700px;
  width: 100%;
  
  ${mxw(breakpoints.lg)`
     max-width: 100%;
  `}
`;


ReviewsWrapper.displayName='ReviewsWrapper'
ReviewsListWrapper.displayName='ReviewsListWrapper'