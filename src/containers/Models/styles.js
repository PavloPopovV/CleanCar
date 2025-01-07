import styled from "styled-components";
import { mxw, breakpoints } from "../../styles/mediaquerySettings";

export const ModelWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap:18px;

  ${mxw(breakpoints.md)`
    grid-template-columns: repeat(2, 1fr);
      gap:10px;
  `}
`;

ModelWrapper.displayName = "ModelWrapper";