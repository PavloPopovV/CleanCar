import styled from "styled-components";

import {
  mxw,
  breakpoints,
  lineClamp,
} from "../../../styles/mediaquerySettings";
import {
  ServicesActiveTabs,
  ServicesUnActiveTabs,
  ImgCardsStyles,
  ArrowBtn,
} from "../../../styles/styleSheets";

export const ServiceCardWrapper = styled.div`
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.backgroundColor : theme.bodyColor};
  width: 100%;
  padding: 25px;
  display: flex;
  justify-content: space-between;
  align-items: start;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  overflow: hidden;

  ${mxw(breakpoints.lg)`
    padding: 20px 5px;
  `}
`;

export const ServiceCardTitle = styled.span`
  font-size: 18px;
  max-width: 180px;
  width: 100%;

  ${mxw(breakpoints.xl)`
    width: 100px;
  `}

  ${mxw(breakpoints.lg)`
    font-size: 16px;
    margin-right:15px;
  `}

  ${mxw(breakpoints.sm)`
    font-size: 14px;
  `}
`;

export const ServiceCardImg = styled.div`
  ${({ $isActive }) => ($isActive ? ServicesActiveTabs : ServicesUnActiveTabs)};
  ${ImgCardsStyles}
  background-color: #dcdcdc;
  border-radius: 15px;
  max-width: 250px;
  width: 100%;
  height: 180px;
  margin-right: 20px;
  transition: transform 0.3s linear;
  img {
    width: 80%;
    height: 50%;
    object-fit: cover;

    ${mxw(breakpoints.xxl)`
      height: auto;
  `}

    ${mxw(breakpoints.md)`
      width:60%;
    `}
  }

  ${mxw(breakpoints.lg)`
    max-width: 200px;
  `}

  ${mxw(breakpoints.md)`
    display:none;
  `}
`;

export const ServiceCardModal = styled.a`
  display: ${({ $isActive }) => ($isActive ? "block" : "none")};
  text-decoration: underline;
  cursor: pointer;
`;

export const ServiceCardBtn = styled.button`
  transform: ${({ $isActive }) =>
    $isActive ? "rotate(-180deg)" : "rotate(0)"};
  ${ArrowBtn}
`;

export const ServiceCardText = styled.p`
  color: ${({ theme }) => theme.colorText};
  max-width: 450px;
  width: 100%;
  ${({ $isActive }) => lineClamp($isActive ? 10 : 1)};

  ${mxw(breakpoints.xl)`
    max-width: 300px;
  `}

  ${mxw(breakpoints.xl)`
    max-width: 400px;
  `}

  ${mxw(breakpoints.md)`
    margin-bottom:10px;
  `}

  ${mxw(breakpoints.sm)`
    max-width: 200px;
  `}
`;

export const ServiceCardContent = styled.div`
  max-width: 600px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;

  ${mxw(breakpoints.xl)`
     max-width: 500px;
  `}

  ${mxw(breakpoints.md)`
    max-width: 500px;
  `}
   ${mxw(breakpoints.sm)`
     max-width: 250px;
  `}
`;

export const ServiceCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  height: ${({ $isActive }) => ($isActive ? "180px" : "0")};

  ${mxw(breakpoints.md)`
     height: auto;
  `}
`;

ServiceCardWrapper.displayName = "ServiceCardWrapper";
ServiceCardImg.displayName = "ServiceCardImg";
ServiceCardModal.displayName = "ServiceCardModal";
ServiceCardText.displayName = "ServiceCardText";
ServiceCardContent.displayName = "ServiceCardContent";
ServiceCardTitle.displayName = "ServiceCardTitle";
ServiceCardInfo.displayName = "ServiceCardInfo";
ServiceCardBtn.displayName = "ServiceCardBtn";
