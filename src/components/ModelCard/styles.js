import styled from "styled-components";
import { Link } from "react-router-dom";
import { ArrowBtn } from "../../styles/styleSheets";
import { mxw, breakpoints} from "../../styles/mediaquerySettings";

export const ModelCardWrapper = styled.div`
  background-color: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModelCardImg = styled.img`
  width: 60%;
  height: 300px;
  object-fit: contain;

  ${mxw(breakpoints.md)`
      height: 200px;
  `}

  ${mxw(breakpoints.sm)`
      height: 150px;
  `}
`;

export const ModelCardInfo = styled.div`
  background-color: ${({ theme }) => theme.bodyColor};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 5px;
`;

export const ModelCardText = styled.div`
  span:last-child {
    display: block;
    color: ${({ theme }) => theme.colorText};
  }
`;

export const ModalCardBtn = styled(Link)`
  ${ArrowBtn}
  transition: transform 0.3s ease-out;

  &:hover {
    transform: rotate(-45deg);
  }
`;

ModelCardWrapper.displayName = "ModelCardWrapper";
ModelCardImg.displayName = "ModelCardImg";
ModelCardInfo.displayName = "ModelCardInfo";
ModelCardText.displayName = "ModelCardText";
ModalCardBtn.displayName = "ModalCardBtn";
