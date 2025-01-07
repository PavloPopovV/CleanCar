import styled from "styled-components";
import { mxw, breakpoints } from "../../styles/mediaquerySettings";

export const HeroWrapper = styled.section`
  position: relative;
  display: flex;
  justify-content: space-around;
`;

export const HeroLeftSide = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: start;
  margin-right: 30px;



  ${mxw(breakpoints.md)`
    background-color: rgba(255, 255, 255, 0.6);
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0;
    padding-left: 10px;
  `}
`;

export const HeroInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  span:last-child {
    color: ${({ theme }) => theme.colorText};
  }
`;

export const HeroTitle = styled.span`
  font-size: 50px;
  text-transform: uppercase;
  margin-bottom: 10px;

  ${mxw(breakpoints.sm)`
      font-size: 35px;
  `}
`;

export const HeroImg = styled.img`
  display: block;
  width: 500px;
  height: 750px;
  object-fit: cover;

  ${mxw(breakpoints.xxl)`
      height: auto;
  `}

  ${mxw(breakpoints.md)`
      width: 100%;
  `}
`;



HeroWrapper.displayName = "HeroWrapper";
HeroLeftSide.displayName = "HeroTitleSide";
HeroInfo.displayName = "HeroInfo";
HeroTitle.displayName = "HeroTitle";
HeroImg.displayName = "HeroImg";
