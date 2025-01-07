import styled from 'styled-components';
import { mxw, breakpoints } from "../../styles/mediaquerySettings";

export const Title = styled.h2`
  font-size: 42px;
  font-weight: 400;
  margin-bottom: 15px;

  ${mxw(breakpoints.md)`
    font-size: 30px;
  `}

  ${mxw(breakpoints.sm)`
    font-size: 24px;
  `}
`;

Title.displayName = "Title";