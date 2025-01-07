import styled from "styled-components";
import { PriceInfoWrapper, StyleSpan } from "../../../styles/styleSheets";

export const PriceDescWrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.borderColor};
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  padding: 16px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const PriceDescInfo = styled.div`
  max-width: 400px;
  width: 100%;
  position: relative;


`;

export const PriceDescTime = styled.span`
  ${StyleSpan}
`;

export const PriceDesc = styled.div`
  ${PriceInfoWrapper}
`;

export const PriceDescText = styled.span`
  ${StyleSpan}
`;

PriceDescText.displayName = "PriceDescText";
PriceDescTime.displayName = "PriceDescTime";
PriceDesc.displayName = "PriceDesc";
PriceDescWrapper.displayName = "PriceDescWrapper";
PriceDescInfo.displayName = "PriceDescInfo";
