import styled from "styled-components";
import { mxw, breakpoints } from "../../styles/mediaquerySettings";
import { Container } from "../../styles/styleSheets";

export const FooterSection = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.backgroundColor};
`;

export const FooterWrapper = styled.div`
  ${Container}
  padding: 40px 15px;
  display: flex;
  justify-content: space-between;
  ${mxw(breakpoints.md)`
    padding: 20px 15px;
    justify-content: center;
    align-items: center;
  `}
`;

export const FooterLogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    ${mxw(breakpoints.sm)`
      text-align: center;
    `}
  }

  ${mxw(breakpoints.md)`
    height: 120px;
    align-items: center;
  `}
`;

export const FooterLogoTop = styled.div`
  ${mxw(breakpoints.md)`
        display: flex;
    flex-direction: column;
    align-items: center;
  `}
`;

export const FooterMap = styled.div`
  width: 400px;
  height: auto;
  img {
    width: 400px;
    height: 160px;
    object-fit: cover;
  }

  ${mxw(breakpoints.xl)`
      display: none;
  `}
`;

export const FooterMediaWrapper = styled.div`
  ${mxw(breakpoints.md)`
      display: none;
  `}
`;

FooterSection.displayName = "FooterSection";
FooterWrapper.displayName = "FooterWrapper";
FooterMap.displayName = "FooterMap";
FooterLogoWrapper.displayName = "FooterLogoWrapper";
FooterLogoTop.displayName = "FooterLogoTop";
FooterMediaWrapper.displayName = "FooterMediaWrapper";
