import styled from "styled-components";
import { mxw, breakpoints} from "../../styles/mediaquerySettings";

export const PriceListWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 30px;

  ${mxw(breakpoints.md)`
      flex-direction:column;
  `}
`;
PriceListWrapper.displayName = "PriceListWrapper";
