import styled from "styled-components";
import { mxw, breakpoints } from "../../styles/mediaquerySettings";
import { ImgCardsStyles } from "../../styles/styleSheets";

export const DetailsIntoTitle = styled.h3`
  padding-top: 50px;
  font-size: 50px;
  text-transform: uppercase;
  margin-bottom: 10px;
  font-weight: 400;

  ${mxw(breakpoints.md)`
    font-size: 34px;
  `}

  ${mxw(breakpoints.sm)`
    font-size: 28px;
  `}
`;

export const DetailsIntoText = styled.div`
  max-width: 400px;
  width: 100%;
  margin-bottom: 50px;
  p {
    position: relative;
    padding-left: 25px;

    &::after {
      content: "";
      position: absolute;
      width: 10px;
      height: 10px;
      background-color: ${({ theme }) => theme.defaultText};
      border-radius: 50%;
      top: 3px;
      left: 5px;

      ${mxw(breakpoints.sm)`
        left: 0;
        top: 5px;
        width: 8px;
        height: 8px;
      `}
    }

    ${mxw(breakpoints.sm)`
      padding-left: 15px;
    `}
  }

  ${mxw(breakpoints.md)`
    margin-bottom: 25px;
  `}
`;

export const DetailsIntroList = styled.ul`
  position: relative;
  display: flex;
  gap: 10px;
  overflow-x: scroll;
  width: 100%;
  padding-bottom: 20px;

  &::-webkit-scrollbar {
    height: 5px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.backgroundColor};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
    cursor: pointer;
  }
`;

export const DetailsIntroImg = styled.li`
  flex: 0 0 25%;
  height: 250px;
  ${ImgCardsStyles}

  img {
    display: block;
    width: 60%;
    object-fit: cover;
  }

  ${mxw(breakpoints.lg)`
    height: 200px;
  `}

  ${mxw(breakpoints.md)`
    flex: 0 0 45%;
    height: 150px;
  `}

  ${mxw(breakpoints.sm)`
    flex: 0 0 55%;
  `}
`;

DetailsIntoTitle.displayName = "DetailsIntoTitle";
DetailsIntoText.displayName = "DetailsIntoText";
DetailsIntroImg.displayName = "DetailsIntroImg";
DetailsIntroList.displayName = "DetailsIntroList";
