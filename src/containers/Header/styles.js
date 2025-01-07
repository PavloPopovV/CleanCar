import styled from "styled-components";
import { mxw, breakpoints } from "../../styles/mediaquerySettings";

export const HeaderWrapper = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mxw(breakpoints.md)`
     margin-bottom:20px;
  `}
`

HeaderWrapper.displayName= 'HeaderWrapper'