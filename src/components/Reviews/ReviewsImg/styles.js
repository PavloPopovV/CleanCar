import styled from "styled-components";
import { ImgCardsStyles } from "../../../styles/styleSheets";
import { mxw, breakpoints } from "../../../styles/mediaquerySettings";

export const ReviewsImgList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 250px);
  grid-auto-rows: 200px;
  gap: 16px;
  li {
    ${ImgCardsStyles}
    img {
      width: 70%;
      height: 50%;
      object-fit: cover ;

      ${mxw(breakpoints.xxl)`
      height: auto;
  `}
      
      ${mxw(breakpoints.lg)`
        width: 60%;
      `}
    }
  }
  li:nth-child(1) {
    grid-column: 1;
    grid-row-start: 2;

    ${mxw(breakpoints.lg)`
     grid-column: 1;
     grid-row-start: 1;
    `}
  }
  li:nth-child(3),
  li:nth-child(2) {
    grid-column: 2;
  }

  ${mxw(breakpoints.lg)`
     grid-template-columns: repeat(3, 1fr);
     grid-auto-rows: 150px;
     gap:0 10px;

      li:nth-child(3){
       grid-column: 3;
      }
  `}

${mxw(breakpoints.sm)`
     grid-auto-rows: 100px;
  `}
`;

export const ReviewsImgWrapper = styled.div`
  padding-top: 20px;
  position: relative;

  div {
    position: absolute;
    transform: translate(0, 0px);

    ${mxw(breakpoints.lg)`
     display:none;
    `}
  }
`;

ReviewsImgWrapper.displayName = "ReviewsImgWrapper"
ReviewsImgList.displayName = "ReviewsImgList" 