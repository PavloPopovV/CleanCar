import styled from "styled-components";
import { mxw, breakpoints } from "../../styles/mediaquerySettings";

export const AboutCarImg = styled.img`
  width: 80%;
  height: 30%;
  object-fit: cover;

  ${mxw(breakpoints.xxl)`
      height: auto;
  `}

  ${mxw(breakpoints.lg)`
    width: 60%;
  `}
  
  ${mxw(breakpoints.sm)`
    width: 60%;
  `}
`;
