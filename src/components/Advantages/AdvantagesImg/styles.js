import styled from "styled-components";
import { ImgCardsStyles } from "../../../styles/styleSheets";
import { mxw, breakpoints } from "../../../styles/mediaquerySettings";

export const AdvantagesImgWrapper = styled.div`
  max-width: 520px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${mxw(breakpoints.xl)`
    max-width: 420px;
  `}

  ${mxw(breakpoints.lg)`
    max-width: 200px;
  `}

  ${mxw(breakpoints.md)`
    display:none;
  `}
`;

export const AdvantagesItemTop = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: end;
  span {
    display: block;
    margin-bottom: 50px;
  }

  ${mxw(breakpoints.lg)`
    display:none;
  `}
`;

export const AdvantagesGridBox = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 250px);
  grid-auto-rows: 160px;
  gap: 16px;
  li {
    ${ImgCardsStyles}
    img {
      width: 80%;
      height: 70%;


      ${mxw(breakpoints.xxl)`
      height: auto;
  `}
      ${mxw(breakpoints.xl)`
        width: 60%;
      `}

      ${mxw(breakpoints.lg)`
        width: 50%;
      `}
    }
  }
  li:nth-child(1),
  li:nth-child(2) {
    grid-column: 1;
  }
  li:nth-child(3) {
    grid-column: 2;

    ${mxw(breakpoints.lg)`
      grid-column: 1;
    `}
  }

  ${mxw(breakpoints.xl)`
    grid-template-columns:repeat(2, 200px);
  `}

  ${mxw(breakpoints.lg)`
    grid-template-columns:1fr;
  `}
`;
AdvantagesImgWrapper.displayName = "AdvantagesImgWrapper";
AdvantagesGridBox.displayName = "AdvantagesGridBox";
AdvantagesItemTop.displayName = "AdvantagesItemTop";
