import styled from "styled-components";
import { ArrowBtn, StyleSpan } from "../../../styles/styleSheets";
import { mxw, breakpoints} from "../../../styles/mediaquerySettings";



export const PriceTabWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.backgroundColor};
  padding: 20px 0;
  cursor: pointer;

  ${mxw(breakpoints.md)`
      padding: 15px 0;
  `}
`;

export const PriceTitle = styled.div`
  font-size: 18px;
  span:last-child {
    ${StyleSpan}
  }
  ${mxw(breakpoints.md)`
       font-size: 16px;
  `}
`;

export const PriceTabBtn = styled.button`
  ${ArrowBtn}
  transform: ${({ $isActive }) => ($isActive ? "rotate(45deg)" : "rotate(0)")};
  transition: transform 0.3s linear;
`;

PriceTabWrapper.displayName = "PriceTabWrapper";
PriceTitle.displayName = "PriceTitle";
PriceTabBtn.displayName = "PriceTabBtn";
