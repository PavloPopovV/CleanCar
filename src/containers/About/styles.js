import styled from "styled-components";
import { ImgCardsStyles } from "../../styles/styleSheets";
import { mxw, breakpoints } from "../../styles/mediaquerySettings";

export const AboutWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;

  ${mxw(breakpoints.lg)`
    flex-direction: column;
  `}
`;

export const AboutWrapperInfo = styled.div`
  max-width: 600px;
  width: 100%;
  p {
    color: ${({ theme }) => theme.colorText};
    margin-bottom: 60px;
    ${mxw(breakpoints.lg)`
      margin-bottom: 30px;
    `}
  }

  ${mxw(breakpoints.lg)`
    max-width: 100%;
  `}
`;

export const AboutWrapperImgList = styled.ul`
  display: grid;
  grid-template-columns: 400px 200px 200px;
  grid-auto-rows: 200px;
  gap: 16px;
  
  li {
    ${ImgCardsStyles}
  }
  li:nth-child(1) {
    grid-column: 1;
    grid-row-start: 1;
    grid-row-end: 3;

    ${mxw(breakpoints.xl)`
     display:none;
    `}
  }
  li:nth-child(2),
  li:nth-child(3) {
    grid-column: 2;
  }
  li:nth-child(4),
  li:nth-child(5) {
    grid-column: 3;
  }
  li:nth-child(4) {
    grid-row-start: 1;
  }

  ${mxw(breakpoints.xl)`
    grid-template-columns: 1fr 1fr;
    li:nth-child(2),
    li:nth-child(3),
    li:nth-child(4),
    li:nth-child(5) {
      grid-column: span 1;
    }
  `}

  ${mxw(breakpoints.lg)`
    gap:10px;
    grid-template-columns: 1fr 1fr;
    li:nth-child(2),
    li:nth-child(3),
    li:nth-child(4),

    li:nth-child(5) {
      grid-column: span 1;
    }
  `}

  ${mxw(breakpoints.sm)`
    grid-auto-rows: 150px;
  `}
`;

AboutWrapper.displayName = "AboutWrapper";
AboutWrapperInfo.displayName = "AboutWrapperInfo";
AboutWrapperImgList.displayName = "AboutWrapperImgList";
