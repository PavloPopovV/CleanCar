import styled from "styled-components";
import { mxw, breakpoints} from "../../../styles/mediaquerySettings";


export const PriceTabList = styled.ul`
    max-width: 550px;
    width: 100%;

    ${mxw(breakpoints.md)`
      max-width: 100%;
  `}
`;

PriceTabList.displayName = "PriceTabList";