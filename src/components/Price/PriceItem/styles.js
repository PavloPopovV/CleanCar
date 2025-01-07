import styled from "styled-components";
import { PriceInfoWrapper, StyleSpan } from "../../../styles/styleSheets";

export const PriceDesc = styled.div`
  max-width: 700px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
`;


export const PriceDescTerms = styled.div`
  ${PriceInfoWrapper}

  span:nth-child(1) {
    ${StyleSpan}
  }
`;

export const PriceDescList = styled.ul`
  width: 100%;
`;

export const PriceDescWarning = styled.span`
  padding-top: 10px;
  ${StyleSpan}
`;


PriceDesc.displayName = "PriceDescription";
PriceDescWarning.displayName = "PriceDescWarning";
PriceDescTerms.displayName = "PriceDescTerms";
PriceDescList.displayName = "PriceDescList";
