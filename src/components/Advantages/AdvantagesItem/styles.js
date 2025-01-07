import styled from "styled-components";
import { StyleSpan } from "../../../styles/styleSheets";
import { mxw, breakpoints } from "../../../styles/mediaquerySettings";

export const AdvantagesItemWrapper = styled.div`
  padding: 15px 0;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  max-width: 700px;
  width: 100%;

  ${mxw(breakpoints.md)`
    max-width: 100%;
  `}
`;
export const AdvantagesTitle = styled.span`
  display: block;
  font-size: 18px;
  margin-bottom: 5px;

  ${mxw(breakpoints.md)`
     font-size: 16px;
  `}
`;

export const AdvantagesText = styled.p`
  ${StyleSpan}
  font-size: 16px;
  
  ${mxw(breakpoints.sm)`
     font-size: 14px;
  `}
`;

AdvantagesItemWrapper.displayName = "AdvantagesItemWrapper";
AdvantagesText.displayName = "AdvantagesText";
AdvantagesTitle.displayName = "AdvantagesTitle";
